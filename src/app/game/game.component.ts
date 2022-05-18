import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';
import { Player } from '../_models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() player!: Player;

  constructor() { }

  ngOnInit(): void {
    // this.player = new Player('Dan');

    // const deck = new Deck(false);
    // deck.shuffle();
    // deck.deal([this.player], 2);

    // console.log(this.player.hand);
    
    console.log(this.player);
    
  }

}
