import page5Image from "../../../../assets/images/svg/pages2.svg"
import "../styles/page5.css"

function Page5(){
    return(
        <div className="page5">
            <div className="leftSide5">
                <img src={page5Image} alt="about you" className="page5Image"/>
            </div>
            <div className="rightSide5">
                <div className="firstReg">
                    <p className="pNumber5">2 of 3</p>
                    <p className="reg5">More Details about you!</p>
                </div>

                <hr className="page5LineBreak"/>
                <p className="nok">Next Of Kin</p>

                <input type="text" className="page5Input" placeholder="Full Name"/><br />
                <input type="text" className="page5Input" placeholder="Email Address"/><br />
                <input type="text" className="page5Input" placeholder="Phone Number"/><br />
                <input type="text" className="page5Input" placeholder="Relationship"/>

                <hr className="page5LineBreak"/>
                <p className="bvn">BVN</p>
                <input type="text" className="page5Input" placeholder="BVN"/>
                <button className="continue5">Continue</button><br /><br />
                <a href="" className="prev5">Prev</a>
            </div>
        </div>
    )
}

export default Page5;