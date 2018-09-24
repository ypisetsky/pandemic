'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Pile extends React.Component {
  render() {
    const children = [];
    for (const cardData of this.props.cards) {
      children.push(cardData.toReact(
        this.props.onPromote,
        this.props.onDelete,
      ));
    }
    return <td>
      {children}
      <div>{this.props.cards.length} cards</div>
    </td>;
  }
}
