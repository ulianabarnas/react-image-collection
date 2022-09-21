import { useEffect } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function FavoriteImages({images}) {
  useEffect(() => {
    new SimpleLightbox('.gallery a')
  }, [])

  return (
    <div className="gallery">
      {images.map((image) => {
        const { id, webformatURL, tags, largeImageURL } = image;
        return (
              <a key={id} href={largeImageURL}>
                  <img src={webformatURL} alt={tags} width="300"/>
              </a>)})}
    </div>
  )
}
