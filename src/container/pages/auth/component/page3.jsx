import page3Image from "../../../../assets/images/svg/pages.svg"
import "../styles/page3.css"
import { useState } from "react";

function Page3(){
  const [show, setShow] = useState(false);
    return (
      <div className="mainDiv3">
        <div className="page3">
            <div className="leftSide">
                <img src={page3Image} alt="otpImage" className="page3Image"/>
            </div>
            <div className="rightSide3">
                <div className="inputsContainer">
                <p className="enterOtp">Enter your OTP number</p>
              <div className="inputs3">
                  <input
                    type="text"
                    name="email"
                    id="input"
                    maxLength="1"
                    placeholder="-"
                  />

                  <input
                    type="text"
                    name="email"
                    id="input"
                    maxLength="1"
                    placeholder="-"
                  />

                  <input
                    type="text"
                    name="email"
                    id="input"
                    maxLength="1"
                    placeholder="-"
                  />

                  <input
                    type="text"
                    name="email"
                    id="input"
                    maxLength="1"
                    placeholder="-"
                  />
              </div>
                  <br/>
                  <button className="continue3"
                  onClick={() => {
                    setShow(!show)
                  }}
                  >Continue</button>
                </div>
            </div>
        </div>

        <div>
        <div className="modalDiv3" style={{display: show ? "block" : "none"}}>
                <div className="modalContent3">
                    <p className="modal3">Your Account has bee Successfully Verified</p>
                    <p className="page3ModalLink"><a href="/page4" >continue</a></p>
         </div>
            </div>
        </div>
      </div>
    )
}
export default Page3;