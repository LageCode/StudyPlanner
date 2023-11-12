import React from 'react';
import { auth } from '../firebase-config';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

export const AuthPage = () => {
  return (
    <div>
      <h1>StudyPlanner - Authentication</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};