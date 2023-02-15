import { Component } from "react";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
                this.props.closeModalByEsc()
            }
    }


    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>,
            modalRoot
        );
    };

};