import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { ProductCard } from './ProductCard';

export const Main = ({ nav, setNav }) => {
  const goods = useSelector((state) => state.goods);
  useEffect(() => {
    setNav(true);
  }, [])
  

  return (
    <div className='cont'>
      {goods?.map((product) =>
      <ProductCard key={product.id} product={product}/>
      )}
    </div>
  );
};

