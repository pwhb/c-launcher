import { useEffect } from 'react';
import './App.css';
import { auth } from './lib/firebase';
import Navbar from './lib/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './lib/redux/authSlice';
import CockLauncher from './lib/components/CockLauncher';

function App()
{
  const { currentUser } = useSelector((state: any) => state.auth);

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
      
        {/* <img src={VITE_SVG} alt="penis" className={`mx-auto w-20 animate-bounce`} /> */}
        <CockLauncher />
      </div>
    </>
  );
}

export default App;
