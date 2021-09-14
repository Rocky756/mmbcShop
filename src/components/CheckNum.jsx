import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { inBasketDeleteAC } from '../redux/actionCreators/deleteFromBasketAC';
import { inBasketputAC } from '../redux/actionCreators/putToBasketAC';

export const CheckNum = ({ id, counter, setCounter, basket }) => {
  const dispatch = useDispatch();
  
  const deleteFromBasket = (basket) => {
    const action = inBasketDeleteAC(basket);
    dispatch(action);
    setCounter((pre) => pre-1)
  }
  const addToBasketHandler = (basket) => {
      const action = inBasketputAC(basket);
      dispatch(action);
      setCounter((pre) => pre+1)
  }

  return (
    <div key={id} className={counter ? 'checkFlex' : null}>
      {counter > 0 &&
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash plusDash" viewBox="0 0 16 16"
      onClick={()=> deleteFromBasket(basket)}
      >
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
      {counter}
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus plusDash" viewBox="0 0 16 16"
      onClick={()=> addToBasketHandler(basket)}
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      </>
      }
    </div>
  );
};

