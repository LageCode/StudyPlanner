import React, { useState } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase-config';

const SignOut = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e.message);
    }
  }

  return <button type={"button"} disabled={!user} onClick={handleSignOut}>Log-out !</button>
};

export default SignOut;
