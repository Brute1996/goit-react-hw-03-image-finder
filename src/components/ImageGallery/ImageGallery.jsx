import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";


export class ImageGallery extends Component {


    render() {
        const { gallery } = this.props;
        return (
            <div>
                <ul className="ImageGallery">
                    {gallery.map(({ webformatURL, tags, id, largeImageURL }) =>
                        <ImageGalleryItem
                            key={id}
                            imageUrl={webformatURL}
                            tags={tags}
                            largeImageURL={largeImageURL}
                            />)}
                </ul>
            </div>
        );
    };
};