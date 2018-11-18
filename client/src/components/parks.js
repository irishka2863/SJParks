import React, { Component } from 'react'
import Todo from './todo';
import Items from './items';

export default class parks extends Component {
  inputElement = React.createRef(); // createRef? 
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    }
  }
    handleInput = e => {
      const itemText = e.target.value; // Still Kinda Fuzzy About this Concept
      const currentItem = {text: itemText, key:Date.now() } // key is a key value pair from currentItem
      this.setState({
        currentItem,
      })
    }

     addItem = e => {
       e.preventDefault();
      const newItem = this.state.currentItem
      if (newItem.text !== ''){ // .text? is it a string method? if it is, what does it do?
        console.log(newItem)
        const items = [...this.state.items, newItem] // ... -> This is a Spread Operator but idk i don't understand the concept fully
        this.setState({
          items: items,
          currentItem: {text: '', key: ''}
        })  
      }
    }

     deleteItem = key => {
      const filteredItems = this.state.items.filter(item => { // i forgot what filter() does i need to reasearch this again. 
        return item.key !== key;
      })
      this.setState({
        items: filteredItems
      })
    }

     render(){
      return(
        <div>
          <Todo
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <Items entries={this.state.items} deleteItem={this.deleteItem}/>
        </div>
      )
    }
}

// PLEASE LOOK AT THE COMMENTS ON MY CODE AND IF YOU CAN EXPLAIN TO ME ABOUT THESE CONCEPTS
// THANK YOU!!!




/*
export default class parks extends Component {
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      parkFilter: ''
    }
  }

  handleFilter = (e) => {
    this.setState({
      parkFilter: e.target.value
    })
    this.props.onChange(e.target.value) 
  }

  render() {
    return (
      <div>
        <h1>Parks</h1>
        <div className="form-group">
            <label htmlFor="username">New Parks Title: </label> <br />
            <input type="name" name="name" placeholder="Parks" />
        </div>
        <div className="form-group">
            <label htmlFor="username">Keyword </label> <br />
            <input type="name" name="name" placeholder="Keyword" />
        </div>
        <button>Create New Park</button>
        <input type="name" id="filter" 
        value= {this.state.parkFilter}
        onChange={this.handleFilter}
        placeholder="search park by name"/>
      </div>
    )
  }
}
*/

// FILTER CODE!!! //




