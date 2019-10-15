import { Component, OnInit } from '@angular/core';
import { PreFlopRaiseService } from './pre-flop-raise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(public preFlopRaiseService: PreFlopRaiseService) {}

  ngOnInit() {
    this.preFlopRaiseService.drawCards();
  }
}
