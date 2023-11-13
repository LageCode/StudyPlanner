import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <form>
      <fieldset>
        <legend>Log-in to an existing account</legend>
        <input id={"si-email-field"} type={"email"} value={email} placeholder={"E-mail"} onChange={(e) => setEmail(e.target.value)} />
        <input id={"si-password-field"} type={"password"} value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
        <button type={"button"} onClick={handleSignIn}>Log-in !</button>
      </fieldset>
    </form>
  );
};

export default SignIn;