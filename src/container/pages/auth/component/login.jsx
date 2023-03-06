import image from "../../../../assets/images/svg/login.svg";
import image2 from "../../../../assets/images/svg/forgotPassword.svg";
import "../styles/loginPage.css"

function Login() {
    return (
        <div className="page1">
            <div className="leftSide">
                <img src={image} alt="login" className="page1Image"/>
            </div>
            <div className="rightSide">
                <p className="welcome">Welcome Back!</p>
                <p className="log">Log in to your Dashboard</p>
                <input className="page1Input" type="text" placeholder="Email"></input>
                <input className="page1Input" type="text" placeholder="Password"></input>
                <div className="down">
                    <div className="rememberMe">
                    <input type="checkbox"></input>
                    <p>Remember me</p>

                    </div>
                    <div className="forgotDiv">
                        <img src={image2} alt="icon" className="forgotPasswordIcon"/>
                        <p>Forgot Password</p>
                    </div>
                </div>
                <button className="loginButton">Login</button>
                <div className="sign_up">
                    <p className="acct">Don't have an Account?</p>
                    <a href="" className="signUp">Sign Up</a>
                </div>
            </div>
        </div>
    )
}
export default Login;