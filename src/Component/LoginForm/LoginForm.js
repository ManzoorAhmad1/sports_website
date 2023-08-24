

// useRedux Toolkit Package for LogigForm Validation 

import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginForm.module.css"
import { userName, userNameValidation, userPassword, userPasswordValidation } from "../Redux/FormValidation";
const LoginForm = (props) => {
    const dispatch = useDispatch();

    //  UserName use UseSlector ////////////////

    const userNameValid = useSelector((state) => { return (state.userNameValidation.userNameValidation) })
    const userFormName = useSelector((state) => { return (state.userFormName.userName) })

    // userPassword use useSelector //////////////

    const userPasswordValid = useSelector((state) => { return (state.userPasswordValidation.userPasswordValidation) })
    const userFormPassword = useSelector((state) => { return (state.userFormPassword.userPassword) })

    //  formSubmitHandler////////////////////////////////

    const submitFormHandler = (event) => {
        event.preventDefault()

        dispatch(userNameValidation(false));
        dispatch(userPasswordValidation(false));

        if (userFormName.trim() === '') {
            return;
        }
        if (userFormPassword.trim() === '') {
            return;
        }

        dispatch(userName(""))
        dispatch(userPassword(""))
        console.log(userFormName)
        console.log(userFormPassword)

    }
    // userNameOnChangeHandler/////////////////////
    const userNameOnChangeHandler = (event) => {
        dispatch(userName(event.target.value))
        dispatch(userNameValidation(true));


    }
    // userPasswordOnChangeHandler////////////////////////////
    const userPasswordOnChangeHandler = (event) => {
        dispatch(userPassword(event.target.value))
        dispatch(userPasswordValidation(true));
    }

    return (

        //    signUp Form JSX //////////////////       

        <div>
            <form className={classes.form} onSubmit={submitFormHandler}>

                {!userNameValid ? <label><p>Enter a valid User Name</p></label> : <></>}

                <input type="text"
                    value={userFormName}
                    onChange={userNameOnChangeHandler}
                    placeholder="Enter  UserName"
                />


                {!userPasswordValid ? <label><p>Enter a valid User Password</p></label> : <></>}

                <input type="text"
                    value={userFormPassword}
                    onChange={userPasswordOnChangeHandler}
                    placeholder="Enter  UserPassword"
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;

































// import classes from "./LoginForm.module.css"
// import { useState } from "react"
// const LoginForm = (props) => {
//     const [userName, setUserName] = useState('');
//     const [userPassword, setUserPassword] = useState("");
//     const [userNameValidation, setUserNameValidation] = useState(true);
//     const [userPasswordValidation, setUserPasswordValidation] = useState(true);

//     const submitFormHandler = (event) => {
//         event.preventDefault()
//         setUserName("")
//         setUserPassword("")
//         if (userName.trim() === "") {
//             setUserNameValidation(false)
//         }
//         if (userPassword.trim() === "") {
//             setUserPasswordValidation(false)
//         }
//         if (userName.trim() === "" && userPassword.trim() === "") {
//             return;
//         }
//         console.log(userName)
//         console.log(userPassword)

//     }
//     const userNameOnChangeHandler = (event) => {
//         setUserName(event.target.value)
//         if (userName.trim() !== 0) {
//             setUserNameValidation(true)
//         }
//     }
//     const userPasswordOnChangeHandler = (event) => {
//         setUserPassword(event.target.value)
//         if (userPassword.trim() !== 0) {
//             setUserPasswordValidation(true)
//         }
//     }

//     return (
//         <div>
//             <form className={classes.form} onSubmit={submitFormHandler}>
//                 {userNameValidation ? <></> : <p>Enter a valid userName</p>}
//                 <input type="text" value={userName}
//                     onChange={userNameOnChangeHandler}
//                     placeholder="Enter  UserName"
//                 />

//                 {userPasswordValidation ? <></> : <p>Enter a valid UserPassword</p>}
//                 <input type="password" value={userPassword}
//                     onChange={userPasswordOnChangeHandler}
//                     placeholder="Enter  Password" />
//                 <button>Log In</button>
//             </form>
//         </div>
//     )
// }

// export default LoginForm;