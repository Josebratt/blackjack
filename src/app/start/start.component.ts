import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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

  acesHigh: boolean = false;
  easyMode: boolean = false;
  playerName: string = '';

  constructor(public constantsService: ConstantsService) {}

  ngOnInit(): void {
  }

  startGame(playerForm: NgForm): void {
    if (playerForm.valid) {
      let emitData: any = {
        playerName: this.playerName,
        acesHigh: this.acesHigh,
        easyMode: this.easyMode,
      };
      this.start.emit(emitData);
    } else {
      playerForm.controls.name.markAsTouched();
    }
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
