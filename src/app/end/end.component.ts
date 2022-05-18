import { Component, OnInit } from '@angular/core';
import { Player } from '../_models/player';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  dealer!: Player;

  constructor() { }

  ngOnInit(): void {
    this.dealer = new Player('Dealer');
  }

}
