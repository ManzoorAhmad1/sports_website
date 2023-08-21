import classes from "./LoginForm.module.css"
import { useState } from "react"
const LoginForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState("");
    const [userNameValidation, setUserNameValidation] = useState(true);
    const [userPasswordValidation, setUserPasswordValidation] = useState(true);

    const submitFormHandler = (event) => {
        event.preventDefault()
        setUserName("")
        setUserPassword("")
        if (userName.trim() === "") {
            setUserNameValidation(false)
        }
        if (userPassword.trim() === "") {
            setUserPasswordValidation(false)
        }
        if (userName.trim() === "" && userPassword.trim() === "") {
            return;
        }
        console.log(userName)
        console.log(userPassword)

    }
    const userNameOnChangeHandler = (event) => {
        setUserName(event.target.value)
        if (userName.trim() !== 0) {
            setUserNameValidation(true)
        }
    }
    const userPasswordOnChangeHandler = (event) => {
        setUserPassword(event.target.value)
        if (userPassword.trim() !== 0) {
            setUserPasswordValidation(true)
        }
    }

    return (
        <div>
            <form className={classes.form} onSubmit={submitFormHandler}>
                {userNameValidation ? <></> : <p>Enter a valid userName</p>}
                <input type="text" value={userName}
                    onChange={userNameOnChangeHandler}
                    placeholder="Enter  UserName"
                />

                {userPasswordValidation ? <></> : <p>Enter a valid UserPassword</p>}
                <input type="password" value={userPassword}
                    onChange={userPasswordOnChangeHandler}
                    placeholder="Enter  Password" />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;