import React from 'react';
import { BiHome } from 'react-icons/bi';
import { FaGithub, FaPencilAlt } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { ReactComponent as TistoryIcon } from '../public/tistory-icon.svg';
import { AiOutlineAudit } from "react-icons/ai";
import '../style/Header.css';

const Header = () => {
    return (
        <header>
            <div className="menu-container bold-text">
                <a href="/" className="menu-item bold-text"><BiHome/>&nbsp;Home</a>
                <a href="/board" className="menu-item bold-text"><FaPencilAlt/>&nbsp;Post</a>
                <a href="https://github.com/Kukvly" className="menu-item bold-text"><FaGithub/>&nbsp; Kuks Github</a>
                <a href="https://pomi-4-me.tistory.com/" className="menu-item bold-text">
                    <TistoryIcon/>&nbsp; Kuks Tistory
                </a>
                <a href="http://localhost:8090" className="menu-item bold-text"><AiOutlineAudit/>&nbsp;Kuks SNS</a>
                <a href="/auth" className="menu-item bold-text"><IoIosPerson/>&nbsp; Kuks</a>
            </div>
            <hr/>
        </header>
    );
};

export default Header;