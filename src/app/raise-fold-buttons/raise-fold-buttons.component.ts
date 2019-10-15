import { Component, OnInit } from '@angular/core';
import { deck } from '../deck';
import { table } from '../raising-hands';
import { PreFlopRaiseService } from '../pre-flop-raise.service';

@Component({
  selector: 'app-raise-fold-buttons',
  templateUrl: './raise-fold-buttons.component.html',
  styleUrls: ['./raise-fold-buttons.component.sass']
})
export class RaiseFoldButtonsComponent implements OnInit {

  constructor(public preFlopRaiseService: PreFlopRaiseService) { }

  ngOnInit() {
  }
  public verifyRaise() {
    if (table[this.preFlopRaiseService.position].includes(this.preFlopRaiseService.completeHand1) || table[this.preFlopRaiseService.position].includes(this.preFlopRaiseService.completeHand2)) {
      this.preFlopRaiseService.currentWinStreak++;
      this.preFlopRaiseService.onCorrectChoice();
      if (this.preFlopRaiseService.currentWinStreak > this.preFlopRaiseService.longestWinStreak) {
        this.preFlopRaiseService.longestWinStreak = this.preFlopRaiseService.currentWinStreak;
      }
    } else {
      this.preFlopRaiseService.currentWinStreak = 0;
      this.preFlopRaiseService.onWrongChoice();
    }
    this.preFlopRaiseService.drawCards();
  }

  public verifyFold() {
    if (!(table[this.preFlopRaiseService.position].includes(this.preFlopRaiseService.completeHand1) || table[this.preFlopRaiseService.position].includes(this.preFlopRaiseService.completeHand2))) {
      this.preFlopRaiseService.currentWinStreak++;
      this.preFlopRaiseService.onCorrectChoice();
      if (this.preFlopRaiseService.currentWinStreak > this.preFlopRaiseService.longestWinStreak) {
        this.preFlopRaiseService.longestWinStreak = this.preFlopRaiseService.currentWinStreak;
      }
    } else {
      this.preFlopRaiseService.currentWinStreak = 0;
      this.preFlopRaiseService.onWrongChoice();
    }
    this.preFlopRaiseService.drawCards();
  }
}
