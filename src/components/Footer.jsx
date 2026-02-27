import { assets } from "../assets/assets"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <div
                className="bg-gray-900 text-sm text-gray-400 px-4 sm:px-8 md:px-20 lg:px-32 py-10"
                id="Footer"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">

                    {/* Logo + Description */}
                    <div className="md:w-1/3">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-10 object-contain"
                                src={assets.logo}
                                alt="Logo"
                            />
                            <span className="text-white font-semibold text-lg tracking-widest">
                                ANTS
                            </span>
                        </div>

                        <p className="mt-4">
                            Ants symbolize teamwork, discipline, and resilience.
                            They work collaboratively toward a common goal,
                            communicating effectively and supporting one another
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="md:w-1/7">
                        <h3 className="text-white text-lg font-bold mb-4">
                            Company
                        </h3>

                        <ul className="flex flex-col gap-2">
                            <li><a href="#Header" className="hover:text-white">Home</a></li>
                            <li><a href="#About" className="hover:text-white">About</a></li>
                            {/* <li><a href="#Projects" className="hover:text-white">Projects</a></li> */}
                            <li><a href="#Services" className="hover:text-white">Services</a></li>
                            <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
                            <Link to="/announcement" className="cursor-pointer hover:text-gray-400 whitespace-nowrap">
                                Announcement
                            </Link>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="md:w-1/ flex flex-col gap-2">
                        <h3 className="text-white text-lg font-bold mb-4">
                            Address
                        </h3>

                        <a
                            className="hover:text-white"
                            href="https://maps.app.goo.gl/S97Enz8BzU5nfaDT6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Location: Naya Bazaar Marg,<br />
                            Kathmandu 44600
                        </a>

                        <a className="hover:text-white">
                            Contact: +977 9801907482
                        </a>

                        <p className="hover:text-white">
                            Email: manish.manandhar@antsware.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="bg-gray-900 flex justify-center gap-6 py-4">
                <a
                    href="https://www.facebook.com/AntsPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF className="text-white text-xl hover:text-cyan-500 transition" />
                </a>

                <a
                    href="https://www.linkedin.com/company/antsnepal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-white text-xl hover:text-cyan-500 transition" />
                </a>
            </div>

            {/* Copyright */}
            <div className="bg-gray-900 text-center py-5">
                <p className="text-gray-500 text-sm">
                    © 2026 All Rights Reserved By Ants Private Limited
                </p>
            </div>
        </>
    );
};

export default Footer
