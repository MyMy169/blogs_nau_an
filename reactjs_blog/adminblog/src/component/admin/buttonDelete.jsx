import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function InfoDelete() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} type="submit" style={{ fontSize: '7px' }} onclick="return confirm('Bạn có chắc chắn muốn xóa?')" className="btn btn-danger" title="Xóa bài viết"><i className="fa fa-trash" /></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="alert alert-danger">{"Bạn có muốn xóa bài viết không?"}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}