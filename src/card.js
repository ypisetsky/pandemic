'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    const x = <span dangerouslySetInnerHTML={{__html: "&"+"#10060;"}}></span>;
    return <div className={"card "+this.props.color} onClick={this.onClick}>
      {this.props.name}
      {" "}<span onClick={this.onDelete}>{x}</span>
    </div>;
  }

  onClick() {
    console.log('on click');
    if (this.props.onPromote) {
      this.props.onPromote(this.props.id);
    }
  }

  onDelete(evt) {
    evt.stopPropagation();
    console.log('on delete', this.props);
    if (this.props.onDelete) {
      console.log('on delete2');
      this.props.onDelete(this.props.id);
    }
  }
}

export class CardData {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.id = Math.random();
  }

  toReact(onPromote, onDelete) {
    return <Card 
      name={this.name}
      color={this.color} 
      id={this.id} 
      onPromote={onPromote}
      onDelete={onDelete}
     />;
  }
}
