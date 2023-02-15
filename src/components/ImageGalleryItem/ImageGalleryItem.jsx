import { Modal } from "components/Modal/Modal";
import { Component } from "react";

export class ImageGalleryItem extends Component {
    state = {
        modalActive: false,
    }

    toggleModal = () => {
        this.setState(({ modalActive }) => ({ modalActive: !modalActive }))
    };


    render() {
        const { imageUrl, tags, largeImageURL } = this.props
        return (
            <li className="ImageGalleryItem" onClick={this.toggleModal}>
                <img className="ImageGalleryItem-image" src={imageUrl} alt={tags} />
                {this.state.modalActive && <Modal largeImageURL={largeImageURL} />}
            </li>

        );
    };

};