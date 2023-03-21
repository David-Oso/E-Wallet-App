import page4Image from  "../../../../assets/images/svg/pages2.svg"
import "../styles/page4.css"

function Page4(){
    return(
        <div className="page4">
            <div className="leftSide4" >
                <img src={page4Image} alt="registrationImage" className="page4Image"/>
            </div>
            <div className="rightSide4">
                <div className="firstReg">
                    <p className="pNumber">1 of 3</p>
                    <p className="reg">Kindly Complete Your Registration</p>
                </div>

                <hr className="page4LineBreak"/>
                <p className="kyc">KYC</p>
                <p className="iden">Select a Form Of Identification</p>
                <input type="text" className="page4Input" placeholder="NIN"/><br />
                <input type="text" className="page4Input" placeholder="Home Address"/>

                <hr className="page4LineBreak"/>
                <div className="secondReg">
                    <p className="add4">Add Cards</p>
                    <p className="plus4">+</p>
                </div>
                <input type="text" className="page4Input2" placeholder="Card Name"/><br />
                <input type="text" className="page4Input2" placeholder="Card Number"/><br />
                <input type="text" className="page4Input2" placeholder="Exp.Date                mm/yr"/><br />
                <input type="text" className="page4Input2" placeholder="CVV"/><br /><br />

                <a href="." className="next4">Next</a>
            </div>
        </div>
    )
}

export default Page4;