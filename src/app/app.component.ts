import { Component, OnInit } from '@angular/core';
import { deck } from './deck';
import { table } from './raising-hands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public url1: string = "";
  public url2: string = "";
  public positionName: string = "";
  public correct: boolean;
  public wrong: boolean;
  public currentWinStreak: number = 0;
  public longestWinStreak: number = 0;
  private completeHand1 = '';
  private completeHand2 = '';
  private position: number;
  public flashTrue: boolean = false;

  ngOnInit() {
    this.drawCards();
  }

  private drawCards = () => {
    const cardOne = deck[Math.floor(Math.random() * 52)];
    const updatedDeck = deck.filter((card) => card !== cardOne);
    const cardTwo = updatedDeck[Math.floor(Math.random() * 51)];
    this.setTablePosition();
    this.setImageUrl(cardOne, cardTwo);
    this.setCompleteHand(cardOne, cardTwo);
  }

  private setImageUrl(cardOne, cardTwo) {
    this.url1 = `assets/images/${cardOne}`;
    this.url2 = `assets/images/${cardTwo}`;
  }

  private setCompleteHand = (cardOne, cardTwo) => {
    let suited = "";
    let offsuit = "";
    if (cardOne[1] === cardTwo[1]) {
      suited = "s";
    } else if (cardOne[0] === cardTwo[0]) {
      offsuit ='';
      suited = '';
    } else if (cardOne[1] !== cardTwo[1]) {
      offsuit = "o";
    }
    this.completeHand1 = cardOne[0] + cardTwo[0] + suited + offsuit;
    this.completeHand2 = cardTwo[0] + cardOne[0] + suited + offsuit;
  }

  private setTablePosition() {
    this.position = Math.floor(Math.random() * 8);
    const positionName = ['Under the Gun', 'Under the Gun +1', 'Under the Gun +2',
                          'Lowjack', 'Highjack', 'Cutoff', 'Button', 'Small Blind'];
    this.positionName = positionName[this.position];
  }

  public verifyRaise() {
    if (table[this.position].includes(this.completeHand1) || table[this.position].includes(this.completeHand2)) {
      this.currentWinStreak++;
      this.flashTrue = true;
      if (this.currentWinStreak > this.longestWinStreak) {
        this.longestWinStreak = this.currentWinStreak;
      }
    } else {
      this.currentWinStreak = 0;
    }
    this.drawCards();
  }

  public verifyFold() {
    if (!(table[this.position].includes(this.completeHand1) || table[this.position].includes(this.completeHand2))) {
      this.currentWinStreak++;
      this.flashTrue = true;
      if (this.currentWinStreak > this.longestWinStreak) {
        this.longestWinStreak = this.currentWinStreak;
      }
    } else {
      this.currentWinStreak = 0;
    }
    this.drawCards();
  }

  private onChoice() {
    setTimeout(() => this.flashTrue = false, 3000)
  }
}
