import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
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
        <legend>Create a new account</legend>
        <input id={"su-email-field"} type={"email"} value={email} placeholder={"E-mail"} onChange={(e) => setEmail(e.target.value)} />
        <input id={"su-password-field"} type={"password"} value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
        <button type={"button"} onClick={handleSignUp}>Create account !</button>
      </fieldset>
    </form>
  );
};

export default SignUp;