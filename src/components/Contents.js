import React from 'react';
import CardsLarge from './CardsLarge';
import CardsSmall from './CardsSmall';

const Contents = () => {
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
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
