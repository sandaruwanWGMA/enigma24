import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png"
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png"
import SeparatorImg from "../../assets/RegiserNow/separator.svg"
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React, {useState} from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import MemberDetailsCard from "./RegisterNowComponents/MemberDetailsCard";


export const RegisterNow = () => {
    const [teamName, setTeamName] = useState('XTREAM CODERS');
    const [teamNameError, setTeamNameError] = useState('');
    const [clickCount, setClickCount] = useState(1);
    const [components, setComponents] = useState([]);

    // Mock function to simulate checking the database
    const checkTeamName = (teamName) => {
        const existingTeamNames = ['XTREAM CODERS', 'TEAM ALPHA', 'TEAM BETA']; // Add more team names as needed
        return existingTeamNames.includes(teamName.toUpperCase());
    };

    const handleTeamNameChange = (newTeamName) => {
        setTeamName(newTeamName);

        if (checkTeamName(newTeamName)) {
            setTeamNameError('THIS TEAM NAME ALREADY EXISTS.');
        } else {
            setTeamNameError('');
        }
    };

    const handleClick = () => {
        if (clickCount <= 2) {
            setClickCount(prevCount => prevCount + 1);
            setComponents(prevComponents => [...prevComponents,
                <div className="relative h-[210px] mt-12">
                    <div className="form-header absolute w-[300px] h-[48px] top-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                        MEMBER {clickCount} DETAILS :
                    </div>
                    <MemberDetailsCard top="59px"/>
                </div>
                /*<MemberDetailsCard key={clickCount} top={""+(131+clickCount*(19+170))+"px"}/>*/
            ]);
        }
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="absolute w-[100%] h-[1530px]">
                <img
                    className="absolute w-full h-full top-0 left-0"
                    alt="register-now-bg"
                    src={RegisterNowBG}
                />
            </div>
            <div className="w-[1293px] h-[1530px] relative">
                <div className="relative w-[1293px] h-[90px] mt-[30px]">
                    <h1 className="register-now-heading ">
                        REGISTER NOW
                    </h1>
                </div>
                <div className="relative w-[1223px] h-[229px] left-[36px]">
                    <div className="relative h-[210px]">
                        <div className="form-header relative w-[300px] h-[48px] mt-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM DETAILS :
                        </div>
                        <div className="relative w-[1223px] h-[170px]">
                            <FullLengthField label="TEAM NAME :" defaultValue='XTREAM CODERS' top="0" onChange={value => handleTeamNameChange(value)}/>
                            {/*<div className="error-message absolute h-[15px] top-[70px] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[12px] whitespace-nowrap">
                                {teamNameError}
                            </div>*/}
                            <FullLengthField label="TEAM EMAIL ADDRESS :" defaultValue="UGDJHSGF@GMAIL.COM" top="89px" />
                        </div>
                    </div>
                </div>
                <div className="relative w-[1223px] h-[229px] left-[36px] mt-[30px]">
                    <div className="relative h-[210px]">
                        <div className="form-header relative w-[300px] h-[48px] mt-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM LEADER DETAILS :
                        </div>
                        <MemberDetailsCard top="0"/>
                    </div>
                </div>
                <div className="relative w-[1223px] h-[228px] left-[36px] mt-[30px]">
                    <div className="relative h-[210px]">
                        <div className="form-header absolute w-[300px] h-[48px] top-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM MEMBERS :
                        </div>
                        <div className="relative w-[1223px] h-[72px] top-[59px]">
                            <FullLengthField label="NUMBER OF TEAM MEMBERS :" defaultValue="XTREAM CODERS" top="0" />
                        </div>
                        <div className="add-member-btn relative w-[200px] h-[50px] top-[90px] left-[-20px]">
                            <img
                                className="absolute w-[28px] h-[33px] top-[7px] left-[25px]"
                                alt="Plus"
                                src={AddMembersIcon}
                            />
                            <div className="absolute w-[162px] h-[23px] top-0 left-[68px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] font-normal tracking-[0] leading-[48px] whitespace-nowrap">
                                ADD MEMBERS
                            </div>
                            <img
                                className="absolute w-[201px] h-px top-[48px] left-0 object-cover"
                                alt="Line"
                                src={SeparatorImg}
                            />
                        </div>
                        <div>
                            {clickCount>2 && <div>Maximum of 2 members are allowed</div>}
                            {components}
                        </div>
                    </div>
                </div>
                <div className="absolute w-[242px] h-[69px] bottom-[40px] {/*top-[833px]*/} left-[540px]">
                    <div className="relative w-[248px] h-[69px] top-0 left-[-4px]">
                        <div className="submit-frame">
                            <button  onClick={handleClick} className="submit-btn">
                                <div className="submit-padding" />
                                <a  className="submit-txt">SUBMIT</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RegisterNow;
