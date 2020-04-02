import React from 'react';

const LoginForm = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
        <div className="p-8">
            <form method="POST" className="" action="#" onSubmit="return false;">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                    <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                    <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                </div>

                <button className="w-1/3 float-right p-3 mt-4 bg-teal-500 text-white rounded shadow my-6">Sign In</button>
                <button className="w-full p-3 mt-4 bg-blue-500 text-white rounded shadow">Sign In with Facebook</button>
                <button className="w-full p-3 mt-4 bg-green-700 text-white rounded shadow">Sign In with Google</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;
