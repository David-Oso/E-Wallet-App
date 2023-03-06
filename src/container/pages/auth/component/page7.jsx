import page7Image from "../../../../assets/images/svg/pages3.svg";
import enterOtp from "../../../../assets/images/svg/enterOtp.svg"
import "../styles/page7.css";

function Page7(){
    return(
        <div className="page7">
            <div className="leftSide7">
                <img src={page7Image} alt="" className="page7Image"/>
            </div>
            <div className="rightSide7">
                <div className="inputsContainer7">
                <img src={enterOtp} alt="" className="enterOtpImage7"/>
                    <p className="enterOtp7">Enter your OTP number</p>
                        <div className="inputs7">
                            <input
                                type="text"
                                id="input7"
                                maxLength="1"
                                placeholder="-"
                            />

                            <input
                                type="text"
                                id="input7"
                                maxLength="1"
                                placeholder="-"
                            />

                            <input
                                type="text"
                                id="input7"
                                maxLength="1"
                                placeholder="-"
                            />

                            <input
                                type="text"
                                id="input7"
                                maxLength="1"
                                placeholder="-"
                            />
                        </div>
                  <br/>
                  <button className="continue7">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Page7;