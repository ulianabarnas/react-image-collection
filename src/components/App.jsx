import React, { Component } from 'react';
import CommonImages from './CommonImages/CommonImages';
import SelectBasicExample from "./Select/Select";

export default class App extends Component {
  state = {
    favoriteImages: [],
    choicePage: '',
  }

  handlerChoice = ({target: {value}}) => {
    this.setState({
      choicePage: value
    })
  }

  render() {
    return (
      <div>
        <SelectBasicExample onChange={this.handlerChoice} />
        {this.state.choicePage === 'images' && <CommonImages/>}
      </div>
    )
  }
}
