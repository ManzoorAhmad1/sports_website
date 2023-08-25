import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from '../SignUpForm/SignUpForm';
import Navbar from '../Header/Navbar';
import { useState } from 'react';
const Home = (props) => {
    const [signUpForm, setSignUpForm] = useState(false);
    const signUpHandler = () => {
        setSignUpForm(true)
    }
    return (
        <div>
            <Navbar signUp={signUpHandler} />
            {!signUpForm ? <LoginForm /> : <SignUpForm />}
        </div>
    )
}
export default Home;
