'use strict';

export default class CardManager {
  constructor(cards) {
    this.cardStacks = [cards];
    this.callback = null;
    this.promoteCard = this.promoteCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  promoteCard(id) {
    for (let i = 0; i < this.cardStacks.length; i++) {
      for (let j = 0; j < this.cardStacks[i].length; j++) {
        if (this.cardStacks[i][j].id == id) {
          if (i == this.cardStacks.length - 1) {
            this.cardStacks.push([this.cardStacks[i][j]]);
          } else {
            this.cardStacks[this.cardStacks.length - 1].push(
              this.cardStacks[i][j],
            );
          }
          this.deleteByPosition(i, j);
          if (this.callback) {
            this.callback(this.cardStacks);
          }
          return;
        }
      }
    }
    console.log("Could not find " + id);
  }

  deleteCard(id) {
    for (let i = 0; i < this.cardStacks.length; i++) {
      for (let j = 0; j < this.cardStacks[i].length; j++) {
        if (this.cardStacks[i][j].id == id) {
          this.deleteByPosition(i, j);
          if (this.callback) {
            this.callback(this.cardStacks);
          }
          return;
        }
      }
    }
    console.log("Could not find " + id);
  }

  addCard(card) {
    this.cardStacks[0].push(card);
    if (this.callback) {
      this.callback(this.cardStacks);
    }
  }

  deleteByPosition(i, j) {
    if (this.cardStacks[i].length == 1) {
      this.cardStacks.splice(i, 1);
    } else {
      this.cardStacks[i].splice(j, 1);
    }
  }

  setCallback(callback) {
    this.callback = callback;
  }
}
