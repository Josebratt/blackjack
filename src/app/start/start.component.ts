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
  states!: object;

  constructor(public constantsService: ConstantsService) {}

  ngOnInit(): void {
    this.disableButton = false;

    this.states = {
      warning: true,
      error: false
    }
  }

  startGame(event: any) {
    event.preventDefault();
    this.start.emit();
  }

  toggleAces() {
    this.acesHigh = !this.acesHigh;
  }
}
