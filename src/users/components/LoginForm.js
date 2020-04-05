import React, { useState, useContext } from 'react';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const DUMMY_USER = {
  id: 'anas1234',
  password: 'anas1234'
}

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm({
      username: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.username.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        auth.login(DUMMY_USER.id);
      } catch (err) {}
    } else {
      try {
        auth.login(DUMMY_USER.id);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="p-8">
            <form method="POST" onSubmit={authSubmitHandler}>
              <h2 className="py-2 mb-4 text-center text-gray-600 text-xl">Login Required</h2>
              {!isLoginMode && (
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Your Name</label>
                  <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    placeholder="Name"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                  />
                </div>
              )}
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                <Input
                  element="input"
                  id="username"
                  type="username"
                  label="Username"
                  placeholder="Username"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Please enter a valid Username, at least 5 characters."
                  onInput={inputHandler}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                <Input
                  element="input"
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="******************"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  errorText="Please enter a valid password, at least 5 characters."
                  onInput={inputHandler}
                />
              </div>

              <button
                className="w-1/3 float-right p-3 mt-4 bg-teal-500 text-white rounded shadow my-6"
                disabled={!formState.isValid}
              >{isLoginMode ? 'LOGIN' : 'SIGNUP'}</button>
              <button
                className="w-full p-3 mt-4 bg-blue-500 text-white rounded shadow"
                data-testid="facebook"
              >{isLoginMode ? 'LOGIN' : 'SIGNUP'} with Facebook</button>
              <button className="w-full p-3 mt-4 bg-green-700 text-white rounded shadow">{isLoginMode ? 'LOGIN' : 'SIGNUP'} with Google</button>
            </form>
            <button
              className="font-bold my-3 py-2 text-xs"
              onClick={switchModeHandler}>
              SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </button>
        </div>
      </div>
    </React.Fragment>


  )
}

export default LoginForm;
