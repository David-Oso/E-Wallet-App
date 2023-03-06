import page8Image from "../../../../assets/images/svg/pages3.svg";
import newPImage from "../../../../assets/images/svg/newPImage.svg"
import "../styles/page8.css"


function Page8(){
    return(
        <div className="page8">
            <div className="leftSide8">
                <img src={page8Image} alt="new passwordImage" className="page8Image"/>
            </div>
            <div className="rightSide8">
                <img src={newPImage} alt="" className="enterNewPImage8"/><br />
                <p className="enterNewP8">Enter New Password</p>
                <input type="password" placeholder="New Password" className="page8Input"/><br />
                <button className="reset8">Reset</button>
            </div>
        </div>
    )
}

export default Page8;