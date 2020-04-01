import React from 'react';
import CardsLarge from './CardsLarge';
import CardsSmall from './CardsSmall';

const contentContainter = "flex flex-row flex-wrap flex-grow mt-2"

const Contents = () => {
  return (
    <div className={`${contentContainter}`}>
      <CardsSmall/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
      <CardsLarge/>
    </div>
  )
}

export default Contents;
