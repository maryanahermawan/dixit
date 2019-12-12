export interface PlayerAsset {
    playerId: number;
    poolCards: number[];
    activeCard: number;
    guessCard: number;
    score: number;
}

export interface Game {
    gameId: string;
    story: string;
    storyTeller: number;
    playerAsset: PlayerAsset[];
}

export interface User {
    username: string;
    email: string;
}

export interface Group {
    groupName: string;
    groupMembers: User[];
}