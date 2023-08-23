import { Fragment, useState } from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import LoginForm from './Component/LoginForm/LoginForm';
import SignUpForm from './Component/SignUpForm/SignUpForm';

function App() {
  const [signUpForm, setSignUpForm] = useState(false);
  const signUpHandler = () => {
    setSignUpForm(true)
  }
  return (
    <Fragment>
      <Navbar signUp={signUpHandler} />
      {!signUpForm ? <LoginForm /> : <SignUpForm />}
    </Fragment>
  );
}

export default App;
