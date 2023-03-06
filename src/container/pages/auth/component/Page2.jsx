import page2Image from "../../../../assets/images/svg/pages.svg"
import "../styles/signUpPage.css"

function Page2(){
    return(
        <div className="page2">
            <div className="leftSide">
                <img src={page2Image} className="page2Image" alt="signUpImage"/>
            </div>
            <div className="rightSide">
                <p className="welcome">Welcome!</p>
                <p className="inform">Sign up by entering the information below</p>
                <input type="text" className="page2Input" placeholder="First Name:"/>
                <input type="text" className="page2Input" placeholder="Last Name:"/>
                <input type="email" className="page2Input" placeholder="Email:"/>
                <input type="password" className="page2Input" placeholder="Password:"/>
                <div className="signUpDiv">
                    <p className="acct">Already have an Account?</p>
                    <a href="" className="login">Login</a>
                </div>
                <button className="signUpButton">Sign Up</button>
            </div>
        </div>
    )
}
export default Page2;