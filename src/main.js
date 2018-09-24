'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Pile from './pile';
import {CardData} from './card';
import InitialData from './data';
import * as Game from './game';
import CardManager from './cardmanager';

class MainWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      stacks: props.manager.cardStacks,
      name: "",
      color: "blue",
    };
    props.manager.setCallback(
      (stacks) => this.setState({stacks: stacks})
    );
  }

  render() {
    const elements = [];
    for (const stack of this.state.stacks) {
      elements.push(
        <Pile cards={stack} onPromote={this.props.manager.promoteCard} onDelete={this.props.manager.deleteCard}/>
      );
    }
    return <div id="mainContent">
      <div>
        {this.renderAddForm()}
      </div>
      <table className="piles">
        <tr>
          {elements}
        </tr>
      </table>
    </div>;
  }

  renderAddForm() {
    return <span>
      Add a card: {" "}
      <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
      {" "}
      <select name="color" value={this.state.color} onChange={this.handleChange}>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
      </select>
      <button name="Add card" onClick={this.addCard} />
    </span>;
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value, "handle.change", this.state);
    this.setState({[e.target.name]: e.target.value});
  }

  addCard(e) {
    const newCard = new CardData(this.state.name, this.state.color);
    this.props.manager.addCard(newCard);
  }

}

const manager = new CardManager(Game.makeInitialCards(InitialData));

ReactDOM.render(<MainWindow manager={manager} />, document.querySelector("#reactRoot"));
