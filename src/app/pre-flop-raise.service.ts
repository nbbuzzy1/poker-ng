import { Injectable } from '@angular/core';
import { deck } from './deck';
import { table } from './raising-hands';

@Injectable({
  providedIn: 'root'
})
export class PreFlopRaiseService {
  public positionName: string = "";
  public position: number;
  public url1: string = "";
  public url2: string = "";
  public completeHand1 = '';
  public completeHand2 = '';
  public correct: boolean = false;
  public wrong: boolean = false;
  public currentWinStreak: number = 0;
  public longestWinStreak: number = 0;

  public setTablePosition() {
    this.position = Math.floor(Math.random() * 8);
    const positionName = ['Under the Gun', 'Under the Gun +1', 'Under the Gun +2',
                          'Lowjack', 'Highjack', 'Cutoff', 'Button', 'Small Blind'];
    this.positionName = positionName[this.position];
  }

  public drawCards = () => {
    const cardOne = deck[Math.floor(Math.random() * 52)];
    const updatedDeck = deck.filter((card) => card !== cardOne);
    const cardTwo = updatedDeck[Math.floor(Math.random() * 51)];
    this.setTablePosition();
    this.setImageUrl(cardOne, cardTwo);
    console.log(this.url1);
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

  public onCorrectChoice() {
    this.correct = true;
    setTimeout(() => this.correct = false, 3000)
  }

  public onWrongChoice() {
    this.wrong = true;
    setTimeout(() => this.wrong = false, 3000)
  }
}
