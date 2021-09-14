import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { BasketCards } from './BasketCards';
import { PriceModal } from './PriceModal';

export const Basket = ({ nav, setNav }) => {
  const baskets = useSelector((state) => state.baskets);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    setNav(false);
  }, []);
  return (
    <>
      <div className='contBasket'>
          {baskets?.map((basket) =>
        <BasketCards key={basket.id} basket={basket}/>
        )}
      </div>
      {/* <Button variant="primary" onClick={handleShow}> */}
      <Button variant={baskets?.length ? 'primary' : 'secondary'} onClick={baskets?.length ? handleShow : null}>
        Заказать
      </Button>
      <PriceModal 
      show={show} setShow={setShow} />
    </>
  );
};

