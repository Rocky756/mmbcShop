import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Card, Button, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { CheckNum } from './CheckNum';
import { inBasketputAC } from '../redux/actionCreators/putToBasketAC';

export const BasketCards = ({ basket, summ, setSumm }) => {
  const dispatch = useDispatch();
  const [showDescr, setShowDescr] = useState(false);
  const reducDescr = basket?.description.split('').slice(0, 126).join('');
  const [counter, setCounter] = useState(1);


  const addToBasketHandler = (basket) => {
    const action = inBasketputAC(basket);
    dispatch(action);
    setCounter((pre) => pre+1);
}
  return (
    <div>
      <Card 
        className={basket?.number > 0 && counter ? 'text-center prodBasketCard success' : 'text-center prodCard fail'}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px'}}>
          <Card.Img style={{width: '8rem', height: '10rem'}} variant="top" src={`${basket?.img}`} />
        </div>
        <Card.Body className='cardBodyCont'>
          <Card.Title style={{fontSize: '0.8rem', height: '30px'}}>{basket?.title}</Card.Title>
          {basket?.description.length > reducDescr?.length
          ? 
          <> 
            {showDescr 
            ?
            <>
              <Card.Text style={{ fontSize: '0.7rem', height: '100px', margin: '0' }}>{basket.description}</Card.Text>
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
          {counter ?
          <CheckNum key={basket.id} id={basket.id} counter={counter} setCounter={setCounter} basket={basket}/>
          :<Button 
          key={basket.id}
          variant={basket.number > 0 ? 'primary' : 'secondary'}
          onClick={()=> addToBasketHandler(basket)}
          >Вернуть</Button>
          }
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{color: 'red', fontWeight: 'bold'}}>{basket?.price * counter} руб.</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

