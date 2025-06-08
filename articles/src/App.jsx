import { createContext, useState } from 'react';
import './App.css'
import Login from './components/Login'
import { useEffect } from 'react';

export const MyContext = createContext();

function App() {
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [user, setUser] = useState();

  const snackbar = text => {
    setSnackbarText(text);
    setIsSnackbar(true);
    // הסתר ההודעה לאחר 2 שניות
    setTimeout(() => setIsSnackbar(false), 2 * 1000);
  }

  useEffect(() => {
    getLoginStatus();
  }, []);

  const getLoginStatus = async () => {
    const res = await fetch(`https://api.shipap.co.il/login`, {
      credentials: 'include',
    });

    if (res.ok) {
      const user = await res.json();
      setUser(user);
    } else {
      setUser(null);
    }
  }

  const logout = async () => {
    setIsLoader(true);

    const res = await fetch(`https://api.shipap.co.il/logout`, {
      credentials: 'include',
    });

    setIsLoader(false);

    if (res.ok) {
      setUser(null);
    }
  }

  return (
    <MyContext.Provider value={{ snackbar, setIsLoader, setUser }}>
      {user && <header>ברוך הבא {user.fullName} <button className='logout' onClick={logout}>התנתק</button></header>}
      <h1>ניהול כתבות</h1>

      {user === null && <Login />}

      {isLoader && <div className="loaderFrame"><div className="loader"></div></div>}
      {isSnackbar && <div className="snackbar">{snackbarText}</div>}
    </MyContext.Provider>
  )
}

export default App
