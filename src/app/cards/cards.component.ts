import { Component, OnInit } from '@angular/core';
import { PreFlopRaiseService } from '../pre-flop-raise.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  constructor(public preFlopRaiseService: PreFlopRaiseService) { }

  ngOnInit() {
  }

}
