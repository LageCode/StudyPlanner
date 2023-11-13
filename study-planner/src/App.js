import './App.css';
import { auth, db } from './firebase-config';
import SignOut from './components/Auth/SignOut';
import { AuthPage } from './pages/AuthPage';

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import {HomePage} from "./pages/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Planner} from "./components/Main/Planner";
import {Recorder} from "./components/Main/Recorder";
import {RecordHistory} from "./components/Main/RecordHistory";

function App() {
  const [ user, setUser ] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage user={user} />,
      children: [
        {
          path: 'record',
          // TODO
          element: <Recorder />
        },
        {
          path: 'plan',
          // TODO
          element: <Planner />
        },
        {
          path: 'history',
          // TODO
          element: <RecordHistory />
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthPage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
