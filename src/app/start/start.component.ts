import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstantsService } from '../_services/constants.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @Input()
  data: any;

  @Output()
  start = new EventEmitter<string>();

  disableButton: boolean = false;
  acesHigh: boolean = false;
  easyMode: boolean = false;
  states!: object;
  playerName: string = '';

  constructor(public constantsService: ConstantsService) {}

  ngOnInit(): void {
    this.disableButton = false;

    this.states = {
      warning: true,
      error: false,
    };
  }

  startGame(event: any): void {
    event.preventDefault();
    let emitData: any = {
      playerName: this.playerName,
      acesHigh: this.acesHigh,
      easyMode: this.easyMode
    }
    this.start.emit(emitData);
  }

  toggleAces(): void {
    this.acesHigh = !this.acesHigh;
  }

  toggleMode(): void {
    this.easyMode = !this.easyMode;
  }

  setPlayerName(name: string): void {
    this.playerName = name;
  }
}
