import React from 'react';
import { CSSTransition } from 'react-transition-group';
import CardsSmall from './CardsSmall';

const PageDrawer = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
    <div className="absolute bg-white z-10 h-screen w-full">
      <div className="container mx-auto px-4 mb-16 text-gray-800 leading-normal w-full flex max-w-xl mx-auto my-3 w-full">
        <CardsSmall />
      </div>
    </div>
  </CSSTransition>
  )
}

export default PageDrawer;
