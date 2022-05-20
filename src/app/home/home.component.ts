import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';
import { Player } from '../_models/player';
import { FaceCardsPipe } from '../_pipes/face-cards.pipe';

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

  pipe!: FaceCardsPipe;

  ngOnInit(): void {
      // const players = [];
    this.players.push(new Player('Dealer'));
    this.pipe = new FaceCardsPipe();
  }

  startGame(event: any) {
    this.gameStarted = true;
    this.gameEnded = false;

    this.players.push(new Player(event.playerName));
    const deck = new Deck(false);
    deck.cards = this.pipe.transform(deck.cards, false);

    deck.shuffle();
    deck.deal(this.players, 2);

    // this.hideStart = true;
    // this.hideEnd = false;
  }
}
