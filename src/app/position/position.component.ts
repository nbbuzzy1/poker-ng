import { Component, OnInit } from '@angular/core';
import { PreFlopRaiseService } from '../pre-flop-raise.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {

  constructor(public preFlopRaiseService: PreFlopRaiseService) { }

  ngOnInit() {
    // this.preFlopRaiseService.setTablePosition();
  }



}
