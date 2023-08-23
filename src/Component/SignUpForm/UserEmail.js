import classes from "./SignUpForm.module.css"
const UserEmail = (props) => {

    const OnChangeEmailHandler = (event) => {
        props.setUserEmail(event.target.value);
        if (props.userEmail.trim() !== 0) {
            props.setUserEmailValid(true);
            return;
        }
    }
    let inputStyle = props.userEmailValid ? `${classes.input}` : `${classes.ValidInput}`;
    return (
        <div>
            <input
                className={inputStyle}
                type="text"
                value={props.userEmail}
                onChange={OnChangeEmailHandler}
                placeholder="Enter your Email"
            />
        </div>
    )
}
export default UserEmail;