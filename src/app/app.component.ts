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
  public position: string = "";
  public correct: boolean;
  public wrong: boolean;
  public count: number = 0;
  public longestWinStreak: number = 0;

  ngOnInit() {

    const setImageUrl = (cardOne, cardTwo) => {
      this.url1 = `assets/images/${cardOne}`;
      this.url2 = `assets/images/${cardTwo}`;
    }

    const setCompleteHand = (cardOne, cardTwo) => {
      let suited = "";
      let offsuit = "";
      let completeHand = "";
      let completeHand2 = "";
      if (cardOne[1] === cardTwo[1]) {
        suited = "s";
      } else if (cardOne[0] === cardTwo[0]) {
        offsuit ='';
        suited = '';
      } else if (cardOne[1] !== cardTwo[1]) {
        offsuit = "o";
      }
      completeHand = cardOne[0] + cardTwo[0] + suited + offsuit;
      completeHand2 = cardTwo[0] + cardOne[0] + suited + offsuit;
    }

    const drawCards = () => {
      const cardOne = deck[Math.floor(Math.random() * 52)];
      const updatedDeck = deck.filter((card) => card !== cardOne);
      const cardTwo = updatedDeck[Math.floor(Math.random() * 51)];
      setImageUrl(cardOne, cardTwo);
      setCompleteHand(cardOne, cardTwo);
    }

    const setTablePosition = () => {
      const position = Math.floor(Math.random() * 8);
      const positionName = ['Under the Gun', 'Under the Gun +1', 'Under the Gun +2', 'Lowjack', 'Highjack', 'Cutoff', 'Button', 'Small Blind'];
      this.position = positionName[position]
    }




  //analyzing whether raise or fold was correct or wrong
  let result = document.getElementById("displayResult");
  // result.addEventListener('animationend', function() {
  //   result.classList.remove('flashit');
  // });
  const correct = () => {
    result.innerHTML = "Correct!";
    result.classList.add('flashit');
    count++;
    if (count > longestStreak) {
      longestStreak = count;
    }
    document.getElementById("winStreak").innerHTML = "Count: " + count;
    document.getElementById("longestStreak").innerHTML = "Longest Win Streak: " + longestStreak;
  }
  const wrong = () => {
    result.innerHTML = "Wrong!";
    result.classList.add('flashit');
    count = 0;
    document.getElementById("winStreak").innerHTML = "";
  }

  //user clicks raise button
  let raiseButton = document.getElementById("raiseBTN")
  raiseButton.addEventListener("click", function(){
    if (table[position].includes(completeHand) || table[position].includes(completeHand2)) {
      correct();
    } else {
      wrong();
    }
    newGame();
  });

  //user clicks fold button
  let foldButton = document.getElementById("foldBTN")
  foldButton.addEventListener("click", function(){
    if (!table[position].includes(completeHand) && !table[position].includes(completeHand2)) {
      correct();
    } else {
      wrong();
    }
    newGame();
  });

  //start over
  let startOver = document.getElementById("startOver")
  startOver.addEventListener("click", function() {
    count = 0;
    longestStreak = 0;
    document.getElementById("winStreak").innerHTML = "";
    document.getElementById("displayResult").innerHTML = "";
    document.getElementById("longestStreak").innerHTML = "";
    newGame();
  })

  //new game
  const newGame = () => {
    let deck = [
      'AS.jpg',
      'AC.jpg',
      'AD.jpg',
      'AH.jpg',
      'KS.jpg',
      'KC.jpg',
      'KD.jpg',
      'KH.jpg',
      'QS.jpg',
      'QC.jpg',
      'QD.jpg',
      'QH.jpg',
      'JS.jpg',
      'JC.jpg',
      'JD.jpg',
      'JH.jpg',
      'TS.jpg',
      'TC.jpg',
      'TD.jpg',
      'TH.jpg',
      '9S.jpg',
      '9C.jpg',
      '9D.jpg',
      '9H.jpg',
      '8S.jpg',
      '8C.jpg',
      '8D.jpg',
      '8H.jpg',
      '7S.jpg',
      '7C.jpg',
      '7D.jpg',
      '7H.jpg',
      '6S.jpg',
      '6C.jpg',
      '6D.jpg',
      '6H.jpg',
      '5S.jpg',
      '5C.jpg',
      '5D.jpg',
      '5H.jpg',
      '4S.jpg',
      '4C.jpg',
      '4D.jpg',
      '4H.jpg',
      '3S.jpg',
      '3C.jpg',
      '3D.jpg',
      '3H.jpg',
      '2S.jpg',
      '2C.jpg',
      '2D.jpg',
      '2H.jpg'
    ];
    // cardOne = deck[Math.floor(Math.random() * 52)];
    // deck.splice(deck.indexOf(cardOne), 1);
    // cardTwo = deck[Math.floor(Math.random() * 51)];
    // getCardOne();
    // getCardTwo();
    // suited = '';
    // offsuit = '';
    // completeHand = '';
    // completeHand2 = '';
    // cardComparison();
    // completeHand = cardOne[0] + cardTwo[0] + suited + offsuit;
    // completeHand2 = cardTwo[0] + cardOne[0] + suited + offsuit;
    // position = Math.floor(Math.random() * 8);
    // showPosition();
  };
  }
}
