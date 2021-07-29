import React from 'react'
import { Modal, Button } from 'reactstrap'

export const ErrorModal = ({ msj, toggle }) => {
    return (
        <Modal
            className="modal-dialog-centered modal-danger"
            contentClassName="bg-gradient-danger"
            isOpen={!!msj}
        >
            <div className="modal-body">
                <div className="text-center">
                    <i className="ni ni-sound-wave ni-3x" />
                    <h4 className="mt-4 heading">Uppps!</h4>
                    <p><div dangerouslySetInnerHTML={{__html: msj}} /> </p>
                </div>
            </div>
            <div className="modal-footer justify-content-center mt--4">
                <Button
                    className="text-white"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggle}
                >
                    Entendido
                </Button>
            </div>
        </Modal>
    )
}
