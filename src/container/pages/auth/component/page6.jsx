import page6Image from "../../../../assets/images/svg/pages3.svg"
import resetPImage from "../../../../assets/images/svg/resetPImage.svg"
import "../styles/page6.css"

function Page6(){
    return (
        <div className="page6">
            <div className="leftSide6">
                <img src={page6Image} alt="resetpasswordImage" className="page6Image"/>
            </div>
            <div className="rightSide6">
                <p className="reset6">Reset Password</p>
                <img src={resetPImage} alt="" className="resetPImage"/><br />
                <p className="enterEmail6">Enter Email Address to reset Password</p>
                <input type="text" placeholder="Email Address" className="page6Input"/><br />
                <button className="next6">Next</button><br /><br />
                <a href="." className="cancel6">Cancel</a>
            </div>
        </div>
    )
}

export default Page6;