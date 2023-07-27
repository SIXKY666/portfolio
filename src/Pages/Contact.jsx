import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="container h-full mt-6">
                    <p className="text-3xl font-bold text-blue-400">Contacts 📇</p>
                    <p className="text-2xl opacity-80 leading-relaxed">You can reach me through these following ways</p>
                </div>
                <div className="container">
                    <ul className="flex flex-col gap-3">
                        <li className="">
                            <Link className="cursor-pointer flex items-center" to="https://web.facebook.com/jackks666/" target="_blank">
                                <FontAwesomeIcon className="inline hover:opacity-70 cursor-pointer" icon={faFacebookSquare} size="3x" />
                                <p className="text-2xl opacity-80 leading-relaxed ml-3 inline">Jack Natdanai</p>
                            </Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer flex items-center" to="https://www.linkedin.com/in/natdanai-khemthong-0040a2264/" target="_blank">
                                <FontAwesomeIcon className="inline hover:opacity-70 cursor-pointer" icon={faLinkedin} size="3x" />
                                <p className="text-2xl opacity-80 leading-relaxed ml-3 inline">Natdanai Khemtong</p>
                            </Link>
                        </li>
                        <li>
                            <Link className="cursor-pointer flex items-center" to="mailto: natdanai226@gmail.com" target="_blank">
                                <FontAwesomeIcon className="inline hover:opacity-70 cursor-pointer" icon={faEnvelope} size="3x" />
                                <p className="text-2xl opacity-80 leading-relaxed ml-3 inline">natdanai226@gmail.com</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}