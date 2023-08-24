import classes from "./SignUpForm.module.css"
const UserPassword = (props) => {

    const OnChangePasswordHandler = (event) => {
        props.setUserPassword(event.target.value);
        if (props.userPassword.trim() !== 0) {
            props.setUserPasswordValid(true);
            return;
        }
    }
    let inputStyle = props.userPasswordValid ? `${classes.input}` : `${classes.ValidInput}`;
    return (
        <div>
            <input
                className={inputStyle}
                type="password"
                value={props.userPassword}
                onChange={OnChangePasswordHandler}
                placeholder="Enter your Password"
            />
        </div>
    )
}
export default UserPassword;



export const UserReInterPassword = (props) => {

    const OnChangeReInterPasswordHandler = (event) => {
        props.setUserReInterPassword(event.target.value);
        if (props.userReInterPassword.trim() !== 0) {
            props.setUserReInterPasswordValid(true);
        }
    }
    let inputStyles = props.userReInterPasswordValid ? `${classes.input}` : `${classes.ValidInput}`;
    return (
        <div>
            <input
                className={inputStyles}
                type="password"
                value={props.userReInterPassword}
                onChange={OnChangeReInterPasswordHandler}
                placeholder="Enter type again Password"
            />
        </div>
    )
}
