import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public COLORS: string[];
  public SUITS: string[];
  public FACES: string[];
  public PIPS: number[];

  constructor() {
    this.COLORS = ['Black', 'Red'];
    this.SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    this.FACES = ['Aces', 'Jack', 'Queen', 'King'];
    this.PIPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  }
}
