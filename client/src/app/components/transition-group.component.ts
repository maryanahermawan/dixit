import { Component, ContentChildren, Directive, ElementRef, Input, QueryList } from '@angular/core';

@Directive({
  selector: '[transition-group-item]'
})
export class TransitionGroupItemDirective {
  prevPos: any;

  newPos: any;

  el: HTMLElement;

  moved: boolean;

  moveCallback: any;

  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }
}


@Component({
  selector: '[transition-group]',
  template: '<ng-content></ng-content>'
})
export class TransitionGroupComponent {
  @Input('transition-group') class;

  @ContentChildren(TransitionGroupItemDirective) activeCards: QueryList<TransitionGroupItemDirective>;

  ngAfterContentInit() {
    this.refreshPosition('prevPos');
    this.activeCards.changes.subscribe(activeCards => {
      activeCards.forEach(card => {
        card.prevPos = card.newPos || card.prevPos;
      });

      activeCards.forEach(this.runCallback);
      this.refreshPosition('newPos');
      activeCards.forEach(this.applyTranslation);

      // force reflow to put everything in position
      // const offSet = document.body.offsetHeight;
      this.activeCards.forEach(this.runTransition.bind(this));
    })
  }

  runCallback(card: TransitionGroupItemDirective) {
    if(card.moveCallback) {
      card.moveCallback();
    }
  }

  runTransition(card: TransitionGroupItemDirective) {
    if (!card.moved) {
      return;
    }
    const cssClass = this.class + '-move';
    let el = card.el;
    let style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = '';
    el.addEventListener('transitionend', card.moveCallback = (e: any) => {
      if (!e || /transform$/.test(e.propertyName)) {
        el.removeEventListener('transitionend', card.moveCallback);
        card.moveCallback = null;
        el.classList.remove(cssClass);
      }
    });
  }

  refreshPosition(prop: string) {
    this.activeCards.forEach(card => {
      card[prop] = card.el.getBoundingClientRect();
    });
  }

  applyTranslation(card: TransitionGroupItemDirective) {
    card.moved = false;
    const dx = card.prevPos.left - card.newPos.left;
    const dy = card.prevPos.top - card.newPos.top;
    if (dx || dy) {
      card.moved = true;
      let style: any = card.el.style;
      style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
      style.transitionDuration = '0s';
    }
  }
}