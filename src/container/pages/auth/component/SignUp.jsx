import image from "../../assets/images/svg/signup.svg";
import {RightSideDiv, TextInput } from "../styles/authentication.styled";

function SignUp(){
    return (

        <div>
            <div className="leftSide">
                <img src={image} alt="sinUpImage" className="leftImage"/>
            </div>
            <RightSideDiv>
            <p>Welcome!</p>
                <p>Sign up by entering the information below</p>
                <TextInput placeholder="Email"/>
                <div className="signUpDiv">
                    <p>Already have an Account</p>
                    <a href=".">Login</a>
                </div>
                <button className="signUpButton">Sign Up</button>
            </RightSideDiv>
            </div>

        
        
    )
}

export default SignUp;