import React from "react";
import "../styles/Modal.css";

interface Props {
  author: string;
  description: string;
  image: string;
  title: string;
  rating: number;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function BookModal(props: Props): JSX.Element {
  const handleReadBook = () => {
    window.location.href = "/book-reading";
  };

  if (!props.isOpen) return <></>;

  return (
    <div className="modal-overlay" onClick={props.toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{props.title}</h3>
          <button className="close-btn" onClick={props.toggleModal}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-text">By: {props.author}</div>
          <div className="modal-text">Description: {props.description}</div>
          <div className="modal-text">Rating: {props.rating} / 5.0</div>
        </div>
        <div className="modal-footer">
          <button className="read-btn" onClick={handleReadBook}>
            Read Book
          </button>
        </div>
      </div>
    </div>
  );
}
