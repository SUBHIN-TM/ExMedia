import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="h-auro bg-black p-5 pt-20">
            <div className="  pt-11 ">
                <div className="design  flex justify-evenly ">
                    <div className="dbox">
                        <p>E</p>
                    </div>
                    <div className="dbox">
                        <p>X</p>
                    </div>
                    <div className="dbox">
                        <p>M</p>
                    </div>
                    <div className="dbox">
                        <p>E</p>
                    </div>
                    <div className="dbox">
                        <p>D</p>
                    </div>
                    <div className="dbox">
                        <p>I</p>
                    </div>
                    <div className="dbox">
                        <p>A</p>
                    </div>
                </div>
               

                <div className="footer text-xl text-white flex font-bold justify-around mt-12 cursor-pointer pb-11">
                    <p className="hover:text-red-500">HOME</p>
                    <p className="hover:text-red-500">ABOUT</p>
                    <p className="hover:text-red-500">SERVICES</p>
                    <p className="hover:text-red-500">CONTACT</p>
                </div>

                <div className=" text-white text-3xl flex justify-between p-4 border">
                    <IoLogoInstagram className="hover:text-red-500" />
                    <FaTwitter className="hover:text-red-500" />
                    <FaFacebookMessenger className="hover:text-red-500" />
                    <FaLinkedin className="hover:text-red-500" />
                    <FaYoutube className="hover:text-red-500" />
                </div>
                <div className="text-white text-center py-4">
                ©️ Copyright 2024 EXMEDIA
                </div>
               



            </div>
        </div>
    )
}

export default Footer;