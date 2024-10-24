"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const AuthInterface = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Logo en Titel */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/logo.png"
            alt="Virtual Sound Works"
            width={200}
            height={200}
            className="mb-4 rounded-lg shadow-2xl shadow-purple-900/20"
          />
          <div className="absolute -inset-2 bg-purple-900/20 rounded-lg blur-xl opacity-75 -z-10" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 hover:text-purple-400 transition-colors">
          Virtual Sound Works
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Create. Produce. Innovate.
        </p>
      </div>

      {/* Login/Register Form */}
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-lg border border-purple-900/20">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-400">
            {isLogin ? 'Login to your account' : 'Register for a new account'}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-900 border border-purple-900/20 rounded-md text-white focus:border-purple-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
          )}
          
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-900 border border-purple-900/20 rounded-md text-white focus:border-purple-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-gray-900 border border-purple-900/20 rounded-md text-white focus:border-purple-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 bg-gray-900 border border-purple-900/20 rounded-md text-white focus:border-purple-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-900 text-white p-3 rounded-md hover:bg-purple-800 transition-colors mt-6"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default AuthInterface;