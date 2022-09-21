import getImages from "services/imagesApi"
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

export default class CommonImages extends Component {
    state = {
        images: [],
    }

    handlerSearch = () => {
        getImages().then(data => this.setState((prevState) => {
        return {images: [...prevState.images, ...data.hits]}
    }))}
    
    render() {
        const { images } = this.state;
        const { add } = this.props;
    return (
      <div>
        <Button
            type="button"
            variant="primary"
                onClick={this.handlerSearch}
        >Search
        </Button>
            <ul>
                {images.map((image) => {
                    const { id, webformatURL, tags } = image;
                    return <li key={id} onClick={() => add(image)}>
                        <img src={webformatURL} alt={tags} width="300"/>
                    </li>})}
            </ul>    
      </div>
    )
  }
}
