
  import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import Navbar from './components/Navbar';
  import MainPage from './components/MainPage';
  import Password from './components/Password';
  import PasswordReset from './components/PasswordReset';
  import Login from './components/Login';
  import { login, updatePassword } from './components/redux/action/allaction';
  import { RootStateTSX } from './components/redux/store';

  function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state:RootStateTSX )=> state.money.isAuth);
    const password = useSelector((state :RootStateTSX)=> state.money.password);

    const handlePasswordSubmit = (enteredPassword:string):boolean => {
      if (enteredPassword === password) {
        dispatch(login());
        return true;
      } else {
        alert('Incorrect password');
        return false;
      }
    };

    const handleForgotPassword = () => {
      window.location.href = '/reset-password';
    };

    const handleResetPassword = (newPassword:string) => {
      dispatch(updatePassword(newPassword)); 
      window.location.href = '/';
    };
    const playSound = () => {
      const audio = new Audio('/noti.mp3');
      audio.play();
    };


    return (
      <Router>
        <Navbar playSound={playSound} />
        <Routes>
        
          <Route
            path="/"
            element={isAuth ? <Navigate to="/main" /> : <Login playSound={playSound} />}
          />
          <Route
            path="/password"
            element={isAuth ? <Navigate to="/main" /> : <Password onPasswordSubmit={handlePasswordSubmit} onForgotPassword={handleForgotPassword} />}
          />
          <Route
            path="/reset-password"
            element={isAuth ? <Navigate to="/main" /> : <PasswordReset onResetPassword={handleResetPassword} onGoBack={function (): void {
              throw new Error('Function not implemented.');
            } } />}
          />
          <Route
            path="/main"
            element={isAuth ? <MainPage /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    );
  }

  export default App;
