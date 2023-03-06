import page3Image from "../../../../assets/images/svg/pages.svg"
import "../styles/page3.css"

function Page3(){
    return (
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
                  <button className="continue3">Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Page3;