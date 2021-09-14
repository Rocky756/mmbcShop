import React from 'react';
import { useSelector } from "react-redux";
import { Button, Modal } from 'react-bootstrap';

export const PriceModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const baskets = useSelector((state) => state.baskets);
  const arrPrice = [];
  const finalPrice = baskets.forEach((el) => arrPrice.push(el.price * el.repeat));
  const summ = arrPrice.reduce((sum, current) => sum + current, + 0)
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ваш заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>Общая сумма заказа составляет: {summ}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

