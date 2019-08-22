const deck = {
    cards: [],
  }
  
  class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    // Will reset a shuffled deck back to HSCD A-K ordered.
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    // Will create a shuffled and randomly ordered deck.
    shuffle(){
        const deck = this.deck;
      let m = deck.length;
      let i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
      return deck;
    }
  
  
  //Will draw the top card from the deck and display it.
  draw(){
    return this.deck.pop();
  }
  };
  
  const deck1 = new Deck();
  
  // WILL DEAL 5 CARDS (SEEN BY LOOKING AT LAST 6 VALUES OF DECK1.DECK, after 5 deal functions, 
  // the 6th last card from the first log will now be the last card on the second log, 
  // and the 5 after it will have been dealt.)
  console.log(deck1.deck);
  deck1.draw();
  deck1.draw();
  deck1.draw();
  deck1.draw();
  deck1.draw();
  console.log(deck1.deck);
  deck1.reset();
  console.log(deck1.deck);
  
    