import './App.css';
import { auth, db } from './firebase-config';
import SignOut from './components/Auth/SignOut';
import { AuthPage } from './pages/AuthPage';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [ user, setUser ] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      {user ?(
        <>
          <p>{user.email}</p>
          <SignOut user={user} />
        </>
      ): (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
