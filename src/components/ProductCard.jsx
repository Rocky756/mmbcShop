import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { putToBasketAC } from '../redux/actionCreators/putToBasketAC';
import { deleteFromBasketAC } from '../redux/actionCreators/deleteFromBasketAC';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showDescr, setShowDescr] = useState(false);
  const reducDescr = product.description.split('').slice(0, 126).join('');
  const [btnFlag, setBtnFlag] = useState(false);

  const addToBasketHandler = (product) => {
    if (product.number) {
      const action = putToBasketAC(product);
      dispatch(action);
      setBtnFlag((pre) => !pre)
    }
  }

  const deleteFromBasket = (id) => {
    const action = deleteFromBasketAC(id);
    dispatch(action);
    setBtnFlag((pre) => !pre)
  }

  return (
    <div>
      <Card 
        className={product?.number > 0 ? 'text-center prodCard success' : 'text-center prodCard fail'}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px'}}>
          <Card.Img style={{width: '8rem', height: '10rem'}} variant="top" src={`${product.img}`} />
        </div>
        <Card.Body className='cardBodyCont'>
          <Card.Title style={{fontSize: '0.8rem', height: '30px'}}>{product.title}</Card.Title>
          {product.description.length > reducDescr.length
          ? 
          <> 
            {showDescr 
            ?
            <>
              <Card.Text style={{ fontSize: '0.7rem', height: '100px', margin: '0' }}>{product.description}</Card.Text>
              <p
                style={{ fontSize: '0.7rem', height: '17px', marginBottom: '5px', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setShowDescr((pre) => !pre)}
              >Скрыть
            </p>
            </>
            : 
            <>
              <Card.Text style={{ fontSize: '0.7rem', height: '70px', margin: '0' }}>{reducDescr}...</Card.Text>
              <p
                style={{ fontSize: '0.7rem', height: '17px', marginBottom: '5px', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setShowDescr((pre) => !pre)}
              >Подробнее
              </p>
            </>
            }
          </>
          : <Card.Text style={{fontSize: '0.7rem', height: '92px', margin: '0'}}>{reducDescr}</Card.Text>
          }
          <Button 
          key={product.id}
          variant={product.number > 0 && btnFlag ? 'danger' : product.number > 0 ? 'primary' : 'secondary'}
          onClick={()=> addToBasketHandler(product)}
          onClick={btnFlag ? ()=> deleteFromBasket(product.id) : ()=> addToBasketHandler(product)}
          >{!btnFlag ? 'В корзину' : 'Убрать'}</Button>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{color: 'red', fontWeight: 'bold'}}>{product.price} руб.</ListGroupItem>
          <ListGroupItem style={product.number >0 ? {color: 'green'} : {color: 'red'}}>Остаток: {product.number}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};
