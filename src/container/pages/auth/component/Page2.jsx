import page2Image from "../../../../assets/images/svg/pages.svg"
import "../styles/page2.css"
import { useState } from "react";

function Page2(){
    const [show, setShow] = useState(false);

    return(
        <div className="mainDiv2">
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
                <div className="signUpDiv2">
                    <p className="acct2">Already have an Account?</p>
                    <p><a href="/login" className="login2">Login</a></p>
                </div>
                <button className="signUpButton2"
                onClick={() => {setShow(!show)}}
                >Sign Up</button>
            </div>
        </div>
        <div className="modalDiv2" style={{display: show ? "block" : "none"}}>
                <div className="modalContent2">
                    <p className="modal2">
                        Kindly Check your mail to see your OTP number <span className="modal2Span">for Account Verification</span>
                    </p>
                </div>
        </div>

        </div>
    )
}
export default Page2;