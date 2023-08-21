import { Fragment } from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import LoginForm from './Component/LoginForm/LoginForm';

function App() {
  return (
    <Fragment>
      <Navbar />
      <LoginForm />
    </Fragment>
  );
}

export default App;
