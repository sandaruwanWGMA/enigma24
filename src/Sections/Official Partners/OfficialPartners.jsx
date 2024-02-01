import React from "react";
import { ReactComponent as BGImage } from "../../assets/official-partners-page/vintage-world-war.svg";
import rec from "../../assets/official-partners-page/Rectangle 3.png";
import army_man from "../../assets/official-partners-page/Rectangle 4.png";
import dialog from "../../assets/official-partners-page/dialog logo.svg";
import wso2 from "../../assets/official-partners-page/WSO2 logo.svg";
import cisco from "../../assets/official-partners-page/Logo_Cisco.svg";
import huawei from "../../assets/official-partners-page/Logo_Huawei.svg";
import "./Official Partners Styles/OfficialParterns.css";

function OfficialPartners(props) {
  return (
    <section className="official-partners-section">
      <BGImage className="bg-world-war" />
      <span>OFFICIAL PARTNERS</span>
      <img src={rec} alt="rectangle" className="rec"></img>
      <img src={army_man} alt="army man" className="army-man"></img>
      <div className="logos">
        <img src={huawei} alt="huawei" className="logo huawei"></img>
        <img src={dialog} alt="dialog" className="logo dialog"></img>{" "}
        <img src={wso2} alt="wso2" className="logo wso2"></img>{" "}
        <img src={cisco} alt="cisco" className="logo cisco"></img>{" "}
      </div>
    </section>
  );
}

export default OfficialPartners;
