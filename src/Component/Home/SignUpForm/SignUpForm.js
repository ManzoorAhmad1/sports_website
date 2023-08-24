
//   useState method for form validation 

//    import all folder relative to SignUpForm //////////////
import { useState } from "react";
import classes from "./SignUpForm.module.css"
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";
import { UserReInterPassword } from "./UserPassword";
const SignUpForm = () => {

    //   use useState Hook for validation //////////////
    const [userName, setUserName] = useState("");
    const [userNameValid, setUserNameValid] = useState(true)
    const [userEmail, setUserEmail] = useState("");
    const [userEmailValid, setUserEmailValid] = useState(true)
    const [userPassword, setUserPassword] = useState("")
    const [userPasswordValid, setUserPasswordValid] = useState(true);
    const [userReInterPassword, setUserReInterPassword] = useState("")
    const [userReInterPasswordValid, setUserReInterPasswordValid] = useState(true);

    // form submit Handler /////////////

    const signUpHandler = (event) => {
        event.preventDefault();
        // use Validation for all input ///////////////////////

        if (userName.trim() === "") {
            setUserNameValid(false)
        }
        if (userEmail.trim() === "") {
            setUserEmailValid(false)
        }
        if (userPassword.trim() === "") {
            setUserPasswordValid(false)
        }

        if (userReInterPassword.trim() === "") {
            setUserReInterPasswordValid(false)
        }
        if (userName.trim() === "") {
            return;
        }
        setUserName("");
        setUserEmail("");
        setUserPassword("")
        setUserReInterPassword("")
        console.log(userName)
    }

    return (

        <form className={classes.form} onSubmit={signUpHandler}>
            <div>
                <UserName
                    userName={userName}
                    setUserName={setUserName}
                    userNameValid={userNameValid}
                    setUserNameValid={setUserNameValid}
                />
            </div>
            <div>
                <UserEmail
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userEmailValid={userEmailValid}
                    setUserEmailValid={setUserEmailValid}
                />
            </div>
            <div>
                <UserPassword
                    userPassword={userPassword}
                    setUserPassword={setUserPassword}
                    userPasswordValid={userPasswordValid}
                    setUserPasswordValid={setUserPasswordValid}
                />
            </div>
            <div>
                <UserReInterPassword
                    userReInterPassword={userReInterPassword}
                    setUserReInterPassword={setUserReInterPassword}
                    userReInterPasswordValid={userReInterPasswordValid}
                    setUserReInterPasswordValid={setUserReInterPasswordValid}
                />             </div>
            <div>
                <button >Submit</button>
            </div>
        </form>


    )
}
export default SignUpForm;