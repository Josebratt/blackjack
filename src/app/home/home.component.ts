import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';
import { Player } from '../_models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'blackjack';

  // hideStart = false;
  // hideGame = true;
  // hideEnd = true;

  gameStarted = false;
  gameEnded = false;

  public players: any[] = [];

  ngOnInit(): void {
    const deck = new Deck(false);
    deck.shuffle();

    // const players = [];
    this.players.push(new Player('Dealer'));


    deck.deal(this.players, 2);

    // console.log(players[1]);
  }

  startGame() {
    this.gameStarted = true;
    this.gameEnded = false;
    this.players.push(new Player('Dan'));
    // this.hideStart = true;
    // this.hideEnd = false;
  }
}
