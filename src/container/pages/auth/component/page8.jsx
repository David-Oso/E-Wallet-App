import page8Image from "../../../../assets/images/svg/pages3.svg";
import newPImage from "../../../../assets/images/svg/newPImage.svg"
import successmarkImage from "../../../../assets/images/svg/successmark.svg"
import "../styles/page8.css"
import { useState } from "react";


function Page8(){
    const [show, setShow] = useState(false);

    return(
        <div className="mainDiv8">
        <div className="page8">
            <div className="leftSide8">
                <img src={page8Image} alt="new passwordImage" className="page8Image"/>
            </div>
            <div className="rightSide8">
                <img src={newPImage} alt="" className="enterNewPImage8"/><br />
                <p className="enterNewP8">Enter New Password</p>
                <input type="password" placeholder="New Password" className="page8Input"/><br />
                <button className="reset8"
                onClick={()=> {setShow(!show)}}
                >Reset</button>
            </div>
        </div>
        <div className="modalDiv8" style={{display: show ? "block" : "none"}}>
                <div className="modalContent8">
                    <p className="modal8">
                        Success<span className="modalSpan8">
                            <img src={successmarkImage} alt="" className="successMark8"/>
                            </span>
                    </p>
                    <p className="page8ModalLink"><a href="" >Go to dashboard</a></p>
                </div>
        </div>
        </div>
    )
}

export default Page8;