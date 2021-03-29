import React from 'react'

const Modal = ({ show, closeModal, msg, title }) => {
  if (!show) return null
  return (
    <div className="custom-modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => closeModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p>{msg}</p>
          </div>
          <div className="modal-footer">
            <button type="button"
              className="btn btn-secondary"
              onClick={() => closeModal(false)}
            >Close</button>
            <button
              type="button"
              className="btn btn-primary"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
