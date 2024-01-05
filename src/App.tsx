import { useEffect } from 'react';
import './App.css';
import { auth } from './lib/firebase';
import Navbar from './lib/components/Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from './lib/redux/authSlice';
import CockLauncher from './lib/components/CockLauncher';

function App()
{
  const dispatch = useDispatch();

  useEffect(() =>
  {
    auth.onAuthStateChanged((user) =>
    {
      dispatch(setUser(user));
    });
  }, []);


  return (
    <>
      <div className='h-[100vh] max-w-xl mx-auto'>
        <Navbar />
        <CockLauncher />
      </div>
    </>
  );
}

export default App;
