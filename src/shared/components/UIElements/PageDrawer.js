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
      <CardsSmall/>
    </div>
  </CSSTransition>
  )
}

export default PageDrawer;
