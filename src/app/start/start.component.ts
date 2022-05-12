import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../_services/constants.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public constantsService: ConstantsService) { }

  ngOnInit(): void {    
  }

}
