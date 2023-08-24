import { Fragment } from 'react';
import './App.css';
// import Navbar from './Component/Home/Header/Navbar';
// import LoginForm from './Component/Home/LoginForm/LoginForm';
// import SignUpForm from './Component/Home/SignUpForm/SignUpForm';
import Cricket from './Component/Sports/Cricket/Cricket';

function App() {
  // const [signUpForm, setSignUpForm] = useState(false);
  // const signUpHandler = () => {
  //   setSignUpForm(true)
  // }
  return (
    <Fragment>
      {/* <Navbar signUp={signUpHandler} />
      {!signUpForm ? <LoginForm /> : <SignUpForm />} */}
      <Cricket />
    </Fragment>
  );
}

export default App;
