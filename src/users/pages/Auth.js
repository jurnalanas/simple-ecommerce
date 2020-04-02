import React from 'react';
import LoginForm from '../components/LoginForm';


const Auth = () => {
  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">Simple Ecommerce</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Auth;
