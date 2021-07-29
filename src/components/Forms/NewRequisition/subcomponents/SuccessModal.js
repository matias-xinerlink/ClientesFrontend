import React from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'reactstrap'

export const SuccessModal = ({ info }) => {
    const { message, requisition } = info;
    return (
        <Modal
            className="modal-dialog-centered modal-success"
            contentClassName="bg-success"
            isOpen={true}
        >
            <div className="modal-body">
                <div className="text-center">
                    <i className="ni ni-books ni-3x" />
                    <h4 className="mt-4 heading">¡éxito!</h4>
                    <p><div dangerouslySetInnerHTML={{ __html: message }} /> </p>
                </div>
            </div>
            <div className="modal-footer mt--4">
                <Button
                    className="text-white"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    tag={Link}
                    to={'/solicitudes'}
                >
                    Volver a Solicitudes
                </Button>
                <Button
                    className="text-white ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    tag={Link}
                    to={'/solicitudes/' + requisition}
                >
                    Ver Solicitud
                </Button>
            </div>
        </Modal>
    )
}
