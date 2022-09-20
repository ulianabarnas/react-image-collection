import getImages from "services/imagesApi"
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

export default class CommonImages extends Component {
    state = {
        images: [],
    }

    handlerSearch = () => {
        getImages().then(data => this.setState((prevState) => {
        return {images: prevState.images}
    }))}
    
  render() {
    return (
      <div>
        <Button
            type="button"
            variant="primary"
            onClick={this.handlerSearch}>Search</Button>
      </div>
    )
  }
}
