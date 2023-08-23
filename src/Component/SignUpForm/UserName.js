import classes from "./SignUpForm.module.css"
const UserName = (props) => {

    const OnChangeNameHandler = (event) => {
        props.setUserName(event.target.value);
        if (props.userName.trim() !== 0) {
            props.setUserNameValid(true);
            return;
        }
    }
    let inputStyle = props.userNameValid ? `${classes.input}` : `${classes.ValidInput}`;
    return (
        <div>
            <input
                className={inputStyle}
                type="text"
                value={props.userName}
                onChange={OnChangeNameHandler}
                placeholder="Enter your Name"
            />
        </div>
    )
}
export default UserName;