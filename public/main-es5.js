(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: orange; display: grid;  grid-template-columns: 1fr 3fr 1fr;\r\njustify-items: center;\">\r\n    <div><img class=\"logo\" src=\"assets/images/icon.png\"/></div>\r\n    <div></div>\r\n    <div *ngIf=\"authenticated\"><i class=\"pi pi-sign-out\" style=\"font-size: 2.5em; color: #6b5b95\" (click)=\"logout()\"></i></div>\r\n</div>\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-grid\" *ngIf=\"players < NUM_PLAYER\">\n    <h5>Hi, {{players}} player(s) in the game... We need 3 players ^.^</h5>\n</div>\n<div class=\"p-grid\">\n    <div class=\"p-col-5\">\n        <h5 *ngIf=\"!game?.story&&(playerId == game?.storyTeller)\">Welcome Player{{playerId}}, You're the storyteller!\n        </h5>\n        <h5 *ngIf=\"!game?.story&&(playerId != game?.storyTeller)\">Welcome Player{{playerId}}, Wait for a story!</h5>\n        <h5 *ngIf=\"game?.story\">Welcome Player{{playerId}}, The story is:</h5>\n    </div>\n    <div class=\"p-col-5\">\n        <form *ngIf=\"!game?.story&&(playerId == game?.storyTeller)\" [formGroup]=\"myForm\" (ngSubmit)=\"submitStory()\">\n            <input type=\"text\" name=\"story\" placeholder=\"Tell a story..\" [formControl]=\"story\">\n            <button [disabled]=\"playerId != game?.storyTeller\" type=\"submit\">Send story</button>\n        </form>\n        <h5>{{story?.value}}</h5>\n    </div>\n    <div class=\"p-col-2\">\n        <h5>Score: {{game?.playerAsset[playerId].score}}</h5>\n    </div>\n</div>\n<div class=\"p-grid p-justify-center\" *ngIf=\"!game?.playerAsset[playerId].guessCard\">\n    <div class=\"p-md-2 p-col-2\" *ngFor=\"let card of activeCards\" (click)=\"chooseGuessCard(card)\">\n        <img *ngIf=\"!hidden\" style=\"width:100%; height:100%\" src=\"/api/image/{{card}}\" alt=\"{{card}}\">\n        <img *ngIf=\"hidden\" style=\"width:100%; height:100%\" src=\"./assets/images/cover.JPG\" alt=\"cover card\">\n    </div>\n</div>\n<div class=\"p-grid p-justify-center\" *ngIf=\"!!game?.playerAsset[playerId].guessCard\">\n    <div class=\"p-md-2 p-col-2\">\n        <img style=\"width:100%; height:100%\" src=\"/api/image/{{game.playerAsset[playerId].guessCard}}\"\n            alt=\"{{game.playerAsset[playerId].guessCard}}\">\n    </div>\n</div>\n<div class=\"p-grid p-justify-center\">\n    <div class=\"p-md-2 p-col-2\" *ngFor=\"let card of game?.playerAsset[playerId].poolCards\"\n        (click)=\"chooseActiveCards(card)\">\n        <img style=\"width: 100%; height: 100%;\" src=\"/api/image/{{card}}\" alt=\"{{card}}\">\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p-dataView [value]=\"groups\">\n    <ng-template let-group pTemplate=\"listItem\">\n        <div class=\"ui-g-12 ng-star-inserted\" style=\"float: left; box-sizing: border-box; padding: 0.5em\">\n            <div class=\"group-details\">\n                <div style=\"display: flex;align-items: center;\">\n                    <!-- <img src=\"assets/assets/images//group/{{group.group_name}}.png\"> -->\n                    <img src=\"assets/images/icon.png\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-12\">Group Name: <b>{{group.group_name}}</b></div>\n                        <div class=\"ui-g-12\">Top score: <b>Top score</b></div>\n                        <div class=\"ui-g-12\">Number of players: <b>No of members</b></div>\n                    </div>\n                </div>\n                <!-- <button pButton type=\"button\" icon=\"pi pi-users\" (click)=\"selectGroup($event, group)\"></button> -->\n                <button pButton type=\"button\" icon=\"pi pi-users\" (click)=\"goToGroupWaiting(group)\"></button>\n            </div>\n        </div>\n    </ng-template>\n\n</p-dataView>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-waiting.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-waiting.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>group-waiting works! {{groupName}}</p>\n<button (click)=startGame()>Start game!</button>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\" style=\"line-height: 1.25;\"></i></span>\r\n                <input type=\"text\" pInputText placeholder=\"Email\" formControlName=\"email\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-key\" style=\"line-height: 1.25;\"></i></span>\r\n                <input type=\"password\" pInputText placeholder=\"Password\" formControlName=\"password\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-12\"></div>\r\n        <div class=\"ui-g-12 ui-md-12\"></div>    \r\n        <button class=\"ui-g-12 ui-md-4\"\r\n        pButton type=\"submit\" label=\"Login\" class=\"ui-button-rounded\"></button>\r\n    </div>\r\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>sign-up works!</p>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Username\" formControlName=\"username\">\n            </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-envelope\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Email\" formControlName=\"email\">\n            </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-key\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"password\" pInputText placeholder=\"Password\" formControlName=\"password\">\n            </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-md-12\"></div>\n        <div class=\"ui-g-12 ui-md-12\"></div>\n        <button class=\"ui-g-12 ui-md-4\" pButton type=\"submit\" label=\"Login\" class=\"ui-button-rounded\"></button>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login.component.ts");
            /* harmony import */ var _components_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game.component */ "./src/app/components/game.component.ts");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _components_group_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/group-list.component */ "./src/app/components/group-list.component.ts");
            /* harmony import */ var _components_group_waiting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/group-waiting.component */ "./src/app/components/group-waiting.component.ts");
            var routes = [
                { path: '', component: _components_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'game/:groupId', component: _components_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
                { path: 'groups', component: _components_group_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupListComponent"], canActivate: [_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]] },
                { path: 'group-waiting-room/:groupName', component: _components_group_waiting_component__WEBPACK_IMPORTED_MODULE_7__["GroupWaitingComponent"] },
                { path: '**', redirectTo: '/', pathMatch: 'full' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex; /* or inline-flex */\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\ntable {\r\n    table-layout: fixed;\r\n    width: 90% ;\r\n}\r\n\r\ntd {\r\n    width: 15% ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogOTAlIDtcclxufVxyXG5cclxudGQge1xyXG4gICAgd2lkdGg6IDE1JSA7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(gameSvc, router) {
                    this.gameSvc = gameSvc;
                    this.router = router;
                    this.title = 'client';
                }
                Object.defineProperty(AppComponent.prototype, "authenticated", {
                    get: function () {
                        return this.gameSvc.isAuthenticated();
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.logout = function () {
                    this.gameSvc.logout();
                    this.router.navigate(['login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _components_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game.component */ "./src/app/components/game.component.ts");
            /* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login.component.ts");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
            /* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
            /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
            /* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
            /* harmony import */ var _components_group_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/group-list.component */ "./src/app/components/group-list.component.ts");
            /* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
            /* harmony import */ var _components_group_waiting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/group-waiting.component */ "./src/app/components/group-waiting.component.ts");
            /* harmony import */ var _components_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sign-up.component */ "./src/app/components/sign-up.component.ts");
            /* harmony import */ var _components_transition_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/transition-group.component */ "./src/app/components/transition-group.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                        _components_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        _components_group_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupListComponent"],
                        _components_group_waiting_component__WEBPACK_IMPORTED_MODULE_16__["GroupWaitingComponent"],
                        _components_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                        _components_transition_group_component__WEBPACK_IMPORTED_MODULE_18__["TransitionGroupComponent"], _components_transition_group_component__WEBPACK_IMPORTED_MODULE_18__["TransitionGroupItemDirective"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_15__["DataViewModule"]
                    ],
                    providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/game.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/components/game.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".p-grid {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0.25em;\r\n}\r\nh5 {\r\n    margin: 0em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuaDUge1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/game.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/components/game.component.ts ***!
          \**********************************************/
        /*! exports provided: GameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function () { return GameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
            var GameComponent = /** @class */ (function () {
                function GameComponent(gameService, fb, route) {
                    var _this = this;
                    this.gameService = gameService;
                    this.fb = fb;
                    this.route = route;
                    this.NUM_PLAYER = 3;
                    this.story = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                    this.storyTeller = 0;
                    this.playerId = 0;
                    this.hidden = true;
                    this.activeCards = [];
                    this.myForm = this.fb.group({ story: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
                    this.gameId = this.route.snapshot.paramMap.get('groupId');
                    this.gameService.initPusher(this.gameId)
                        .then(function (result) {
                        _this.playerId = result - 1;
                        console.log('playerId is', _this.playerId, 'storyteller', _this.storyTeller);
                        _this.createPlayerAsset(_this.gameId, _this.playerId);
                    })
                        .catch(function (error) { console.log('Promise rejected', error); });
                    this.listenForChanges(this.gameId); //update game
                    this.gameService.listenMember(this.gameId); //update players (no. of players)
                    this.activeCards.forEach(function (e) { return _this.gameService.getCardImage(e); });
                }
                GameComponent.prototype.ngOnInit = function () {
                };
                GameComponent.prototype.getQueryParam = function (name) {
                    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
                    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
                };
                GameComponent.prototype.getUniqueId = function () {
                    return Math.random().toString(36).substr(2, 8);
                };
                GameComponent.prototype.createPlayerAsset = function (gameId, playerId) {
                    var _this = this;
                    this.gameService.createPlayerAsset(gameId, playerId)
                        .then(function (result) {
                        _this.game = result;
                    })
                        .catch(function (error) { console.log('Error is', error); });
                };
                GameComponent.prototype.chooseActiveCards = function (cardId) {
                    if (this.cannotActivateCard()) {
                        return;
                    }
                    this.gameService.chooseActiveCard(this.gameId, this.playerId, cardId)
                        .then(function (result) {
                    })
                        .catch(function (error) {
                    });
                    return this;
                };
                GameComponent.prototype.chooseGuessCard = function (cardId) {
                    if (this.cannotGuessCard()) {
                        return;
                    }
                    this.gameService.chooseGuessCard(this.gameId, this.playerId, cardId)
                        .then(function (result) {
                    })
                        .catch(function (error) {
                    });
                    return this;
                };
                GameComponent.prototype.listenForChanges = function (gameId) {
                    var _this = this;
                    var idx = this.pusherChannel.findIndex(function (e) { return e.gameId == gameId; });
                    this.pusherChannel[idx].channel.bind('server-fire', function (obj) {
                        console.log('obj received', obj);
                        var tempArray = [];
                        obj.game.playerAsset.forEach(function (element) {
                            if (!!element.activeCard) {
                                tempArray.push(element.activeCard);
                            }
                        });
                        _this.activeCards = tempArray;
                        if (_this.activeCards.length == _this.NUM_PLAYER) {
                            console.log('shuffling');
                            _this.shuffleCard(_this.activeCards);
                            _this.shuffleCard(_this.activeCards);
                            //Reveal cards
                            _this.hidden = false;
                        }
                        _this.game = obj.game; //update the game
                        _this.storyTeller = obj.game.storyTeller;
                        _this.story.setValue(obj.game.story);
                        if (_this.activeCards.length == 0) {
                            _this.hidden = true;
                        }
                        console.log('LISTEN FOR CHANGE: updated game is', _this.game);
                        console.log('storyTeller >', _this.storyTeller);
                    });
                    return this;
                };
                GameComponent.prototype.cannotActivateCard = function () {
                    return !!this.game.playerAsset[this.playerId].activeCard || (this.playerId != this.game.storyTeller && !this.game.story);
                };
                GameComponent.prototype.cannotGuessCard = function () {
                    return !!this.game.playerAsset[this.playerId].guessCard;
                };
                GameComponent.prototype.submitStory = function () {
                    this.gameService.submitStory(this.gameId, this.story.value);
                };
                GameComponent.prototype.shuffleCard = function (cardArray) {
                    var currentIndex = cardArray.length;
                    var temp;
                    var randomIndex;
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                        // And swap it with the current element.
                        temp = cardArray[currentIndex];
                        cardArray[currentIndex] = cardArray[randomIndex];
                        cardArray[randomIndex] = temp;
                    }
                    return cardArray;
                };
                Object.defineProperty(GameComponent.prototype, "pusherChannel", {
                    get: function () {
                        return this.gameService.getChannel();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameComponent.prototype, "players", {
                    get: function () {
                        return this.gameService.getNoOfPlayers();
                    },
                    enumerable: true,
                    configurable: true
                });
                return GameComponent;
            }());
            GameComponent.ctorParameters = function () { return [
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/components/game.component.css")).default]
                })
            ], GameComponent);
            /***/ 
        }),
        /***/ "./src/app/components/group-list.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/components/group-list.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".group-details {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 2em;\r\n    border-bottom: 1px solid #d9dad9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/group-list.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/components/group-list.component.ts ***!
          \****************************************************/
        /*! exports provided: GroupListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function () { return GroupListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var GroupListComponent = /** @class */ (function () {
                function GroupListComponent(gameSvc, router) {
                    this.gameSvc = gameSvc;
                    this.router = router;
                    this.groups = [];
                }
                GroupListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.gameSvc.getAllGroups()
                        .then(function (result) {
                        _this.groups = result;
                        console.log('groups are', _this.groups);
                    })
                        .catch(function (err) {
                        console.log('err is', err);
                    });
                };
                GroupListComponent.prototype.goToGroupWaiting = function (group) {
                    this.router.navigate(["group-waiting-room/" + group.group_name]);
                };
                return GroupListComponent;
            }());
            GroupListComponent.ctorParameters = function () { return [
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            GroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-group-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-list.component.css */ "./src/app/components/group-list.component.css")).default]
                })
            ], GroupListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/group-waiting.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/group-waiting.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAtd2FpdGluZy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/group-waiting.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/group-waiting.component.ts ***!
          \*******************************************************/
        /*! exports provided: GroupWaitingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupWaitingComponent", function () { return GroupWaitingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
            var GroupWaitingComponent = /** @class */ (function () {
                function GroupWaitingComponent(route, gameSvc, router) {
                    this.route = route;
                    this.gameSvc = gameSvc;
                    this.router = router;
                }
                GroupWaitingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.groupName = this.route.snapshot.paramMap.get('groupName');
                    console.log('groupName is', this.groupName);
                    this.gameSvc.getGameId(this.groupName)
                        .then(function (result) {
                        _this.groupId = result;
                        console.log('groupId received from server:', _this.groupId);
                    });
                };
                GroupWaitingComponent.prototype.startGame = function () {
                    this.router.navigate(["game/" + this.groupId]);
                };
                return GroupWaitingComponent;
            }());
            GroupWaitingComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            GroupWaitingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-group-waiting',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-waiting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-waiting.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-waiting.component.css */ "./src/app/components/group-waiting.component.css")).default]
                })
            ], GroupWaitingComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/components/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/components/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, GameSvc) {
                    this.fb = fb;
                    this.GameSvc = GameSvc;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                };
                LoginComponent.prototype.login = function () {
                    this.GameSvc.login(this.loginForm.value);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/sign-up.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/components/sign-up.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/sign-up.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/sign-up.component.ts ***!
          \*************************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent() {
                }
                SignUpComponent.prototype.ngOnInit = function () {
                };
                return SignUpComponent;
            }());
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up.component.css")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/app/components/transition-group.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/transition-group.component.ts ***!
          \**********************************************************/
        /*! exports provided: TransitionGroupItemDirective, TransitionGroupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroupItemDirective", function () { return TransitionGroupItemDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroupComponent", function () { return TransitionGroupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TransitionGroupItemDirective = /** @class */ (function () {
                function TransitionGroupItemDirective(elRef) {
                    this.el = elRef.nativeElement;
                }
                return TransitionGroupItemDirective;
            }());
            TransitionGroupItemDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            TransitionGroupItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[transition-group-item]'
                })
            ], TransitionGroupItemDirective);
            var TransitionGroupComponent = /** @class */ (function () {
                function TransitionGroupComponent() {
                }
                TransitionGroupComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.refreshPosition('prevPos');
                    this.activeCards.changes.subscribe(function (activeCards) {
                        activeCards.forEach(function (card) {
                            card.prevPos = card.newPos || card.prevPos;
                        });
                        activeCards.forEach(_this.runCallback);
                        _this.refreshPosition('newPos');
                        activeCards.forEach(_this.applyTranslation);
                        // force reflow to put everything in position
                        // const offSet = document.body.offsetHeight;
                        _this.activeCards.forEach(_this.runTransition.bind(_this));
                    });
                };
                TransitionGroupComponent.prototype.runCallback = function (card) {
                    if (card.moveCallback) {
                        card.moveCallback();
                    }
                };
                TransitionGroupComponent.prototype.runTransition = function (card) {
                    if (!card.moved) {
                        return;
                    }
                    var cssClass = this.class + '-move';
                    var el = card.el;
                    var style = el.style;
                    el.classList.add(cssClass);
                    style.transform = style.WebkitTransform = style.transitionDuration = '';
                    el.addEventListener('transitionend', card.moveCallback = function (e) {
                        if (!e || /transform$/.test(e.propertyName)) {
                            el.removeEventListener('transitionend', card.moveCallback);
                            card.moveCallback = null;
                            el.classList.remove(cssClass);
                        }
                    });
                };
                TransitionGroupComponent.prototype.refreshPosition = function (prop) {
                    this.activeCards.forEach(function (card) {
                        card[prop] = card.el.getBoundingClientRect();
                    });
                };
                TransitionGroupComponent.prototype.applyTranslation = function (card) {
                    card.moved = false;
                    var dx = card.prevPos.left - card.newPos.left;
                    var dy = card.prevPos.top - card.newPos.top;
                    if (dx || dy) {
                        card.moved = true;
                        var style = card.el.style;
                        style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
                        style.transitionDuration = '0s';
                    }
                };
                return TransitionGroupComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('transition-group')
            ], TransitionGroupComponent.prototype, "class", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(TransitionGroupItemDirective)
            ], TransitionGroupComponent.prototype, "activeCards", void 0);
            TransitionGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: '[transition-group]',
                    template: '<ng-content></ng-content>'
                })
            ], TransitionGroupComponent);
            /***/ 
        }),
        /***/ "./src/app/services/game.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/game.service.ts ***!
          \******************************************/
        /*! exports provided: GameService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function () { return GameService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var GameService = /** @class */ (function () {
                function GameService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.pusherChannel = [];
                    this.authenticated = false;
                    this.pusher = new Pusher('32a6b9413c2f9c9ce393', {
                        authEndpoint: '/pusher/auth',
                        cluster: 'ap1',
                        forceTLS: true,
                    });
                }
                GameService.prototype.canActivate = function () {
                    // if (!this.authenticated)
                    //   this.router.navigate(['/login']);
                    // return (this.authenticated)
                    return true;
                };
                GameService.prototype.isAuthenticated = function () {
                    return this.authenticated;
                };
                GameService.prototype.createPlayerAsset = function (gameId, playerId) {
                    return this.http.get("/game/player/create/" + gameId + "/" + playerId)
                        .toPromise();
                };
                GameService.prototype.initPusher = function (gameId) {
                    var _this = this;
                    this.pusherChannel.push({ gameId: gameId, channel: this.pusher.subscribe("presence-" + gameId) });
                    return new Promise(function (resolve, reject) {
                        var idx = _this.pusherChannel.findIndex(function (e) { return e.gameId == gameId; });
                        _this.pusherChannel[idx].channel.bind('pusher:subscription_succeeded', function (members) {
                            if (!members) {
                                reject({ error: 'Pusher subscription error' });
                            }
                            else {
                                console.log('Pusher subscription succeeded, no of members:', members);
                                _this.players = members.count;
                                resolve(_this.players);
                            }
                        });
                    });
                };
                GameService.prototype.listenMember = function (gameId) {
                    var _this = this;
                    var idx = this.pusherChannel.findIndex(function (e) { return e.gameId == gameId; });
                    this.pusherChannel[idx].channel.bind('pusher:member_added', function (member) {
                        _this.players++;
                    });
                    this.pusherChannel[idx].channel.bind('pusher:member_removed', function (member) {
                        _this.players--;
                    });
                };
                GameService.prototype.chooseActiveCard = function (gameId, playerId, cardId) {
                    return this.http.get("/game/card/active/" + gameId + "/" + playerId + "/" + cardId)
                        .toPromise();
                };
                GameService.prototype.chooseGuessCard = function (gameId, playerId, cardId) {
                    return this.http.get("/game/card/guess/" + gameId + "/" + playerId + "/" + cardId)
                        .toPromise();
                };
                GameService.prototype.getChannel = function () {
                    return this.pusherChannel;
                };
                GameService.prototype.getNoOfPlayers = function () {
                    return this.players;
                };
                GameService.prototype.submitStory = function (gameId, story) {
                    console.log("in service story is", story);
                    return this.http.post("/game/story/" + gameId, { story: story })
                        .toPromise();
                };
                GameService.prototype.guessCard = function (gameId, playerId, cardId) {
                    return this.http.get("/game/card/vote/" + gameId + "/" + playerId + "/" + cardId)
                        .toPromise();
                };
                GameService.prototype.getAllGroups = function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                        .set('Authorization', "Bearer " + window.localStorage.getItem('access_token'));
                    return (this.http.get('/api/groups', { headers: headers })
                        .toPromise());
                };
                GameService.prototype.login = function (formObj) {
                    var _this = this;
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                    headers.set('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('/authenticate', formObj, { headers: headers })
                        .toPromise()
                        .then(function (result) {
                        console.log('raw is', result);
                        // Store token
                        window.localStorage.setItem('access_token', result.access_token);
                        _this.authenticated = true;
                        _this.router.navigate(['groups']);
                    })
                        .catch(function (error) { });
                };
                GameService.prototype.getGameId = function (groupName) {
                    return this.http.get("/game/id/" + groupName).toPromise();
                };
                GameService.prototype.getCardImage = function (cardId) {
                    return this.http.get("game/card/image/" + cardId);
                };
                GameService.prototype.logout = function () {
                    //   Remove data
                    window.localStorage.removeItem('access_token');
                };
                return GameService;
            }());
            GameService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], GameService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\marya\dixit\client\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map