import Home from './pages/home/Home.js';
import Profile from './pages/profile/Profile';
import SignInSide from './Components/SignInSide.js';
import SignUpSide from './Components/SignUpSide.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import ForgotPassword from './Components/ForgotPassword.js';
import ResetPassword from './Components/ResetPassword.js';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Test from './Test.js';
import Fol from './Components/share/Fol.js';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route
              exact
              path='/'
              element={user ? <Navigate to='/home' /> : <SignInSide />}
            ></Route>

            <Route
              exact
              path='/signup'
              element={user ? <Navigate to='/home' /> : <SignUpSide />}
            ></Route>

            <Route exact path='/test' element={<Test />}></Route>

            <Route element={<PrivateRoute />}>
              <Route exact path='/editpost/:postId' element={<Fol />}></Route>
              <Route exact path='/home' element={<Home />}></Route>
              <Route exact path='/profile/:id' element={<Profile />}></Route>
              <Route exact path='/reset' element={<ResetPassword />}></Route>
            </Route>

            <Route exact path='/forgot' element={<ForgotPassword />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
