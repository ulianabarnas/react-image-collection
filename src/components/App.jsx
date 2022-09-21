import React, { Component } from 'react';
import CommonImages from './CommonImages/CommonImages';
import FavoriteImages from './FavoriteImages/FavoriteImages';
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

  handlerAddFavoriteImg = (img) => {
    if (this.state.favoriteImages.find((item) => item.id === img.id)) {
      alert('Almost added')
      return
    }
    this.setState({
      favoriteImages: [...this.state.favoriteImages, img]
    })
  } 
  
  render() {
    return (
      <div>
        <SelectBasicExample onChange={this.handlerChoice} />

        {this.state.choicePage === 'images' && <CommonImages add={this.handlerAddFavoriteImg} />}
        
        {this.state.choicePage === 'favImg' && (<FavoriteImages images={this.state.favoriteImages} />)}
      </div>
    )
  }
}
