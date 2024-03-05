import { useState } from "react";
import Form from "../Form/Form.jsx";
import "./modal.css";

const Modal = ({handleNewBook}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div onClick={toggleModal} className="add-new-book-btn">
        <i className="fa-solid fa-plus"></i>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add new book</h2>
            <Form handleNewBook={handleNewBook} toggleModal={toggleModal}/>
            <button onClick={toggleModal} className="close-modal">
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
