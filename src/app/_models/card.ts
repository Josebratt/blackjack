export class Card {
    constructor(
        public color: string,
        public suit: string,
        public name: string | undefined,
        public value: number
    ){}
}