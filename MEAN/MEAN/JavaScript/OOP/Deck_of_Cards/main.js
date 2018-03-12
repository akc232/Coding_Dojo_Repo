// #Deck of Cards Outline
//
// ##Object constructors with properties/methods
//
// + **Deck**
//   + cards
//   + shuffle
//   + reset
//   + dealRandomCard
// + **Card**
//   + value
//   + suit
// + **Player**
//   + name
//   + hand
//   + takeCard
//   + discard
// **Game**
//    +startgame(
//       +addPlayer(from deck)
//       +shuffleDeck(from deck)
            // )
//    +dealBlackJack
//    +hit
//    +stay
//    +evaluateCards
//    +determineWinner
//    +newGame



function Deck(){
   this.buildDeck()
   //this builds the deck giving it the suits and values and pushing it into a cards list.
}
   Deck.prototype.buildDeck = function(){
      var suits = ["Hearts", "Diamonds","Spades","Clubs"],
      values = ['ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'],
      self = this
   this.cards = [];
      suits.forEach(function(suit){
         values.forEach(function(value){
            self.cards.push(new Card(suit,value));
         });
      });
      // console.log(this);
      return this;

   }
   // shuffles the deck
   Deck.prototype.shuffleCards = function(){
      var unshuffledCards = this.cards.length;
      var cardIndex;
      var temp;

      while (unshuffledCards > 0){
         cardIndex = Math.floor(Math.random() * unshuffledCards);
         unshuffledCards-= 1;
         temp = this.cards[cardIndex];
         this.cards[cardIndex] = this.cards[unshuffledCards];
         this.cards[unshuffledCards] = temp;
      }
      return this;
   }
// this is a rest for the deck to reshuffle
   Deck.prototype.reshuffle = function(){
      this.buildDeck().shuffleCards()
   }
// this deals a random card to the player and pops it out of the shuffled cards
   Deck.prototype.dealRandomCard = function(){
      return (this.cards.length > 0) ? this.cards.pop() : null;
   }
// constructor for cards
function Card(suits, values){
      this.suits = suits;
      this.values = values;
   }
// contstructor for the player
function Player(name){
      this.name = name;
      this.hand = [];
   }
// allows the player to take a card and pushes it to their hand
Player.prototype.takeCard = function(deck){

  this.hand.push(deck.dealRandomCard());
  return this;
}
// allows the player to discard the card
Player.prototype.discard = function(cardIndex){

  if (this.hand.length > cardIndex){
    this.hand.splice(cardIndex, 1);
  }
  return this;
}
// game constructor.. in progress... will be completed as in outline(variation).
function Game(){

}

// var andrew = new Player("Andrew"),
//    deck = new Deck()
// deck.shuffleCards()
