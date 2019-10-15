import { Component, OnInit } from '@angular/core';
import { PreFlopRaiseService } from '../pre-flop-raise.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  constructor(public preFlopRaiseService: PreFlopRaiseService) { }

  ngOnInit() {
  }

}
