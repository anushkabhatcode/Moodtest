import { useContext } from "react";
import UserContext from "./Auth/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSmile, FaEnvelope, FaSignOutAlt, FaBeer, FaChartArea, FaPhoneSquare } from 'react-icons/fa';


function Sidebar(props){

    const class_name=props.class_name;
    
    const navigate = useNavigate();

    //useContext to logout user
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        navigate('/');
     };

    return(
    <div className={class_name}>
        <div className="nav-links">
            <Link to={"/home"}><FaHome /> Home</Link>
            <Link to={"/moodboost"}><FaSmile /> MoodBoost</Link>
            <Link to={"/dashboard"}><FaChartArea />  Logs</Link>
            <Link to={"/contact"}><FaEnvelope /> Contact</Link>
            <div className="bottom_nav_container">
            <Link to={"/connect"}><FaPhoneSquare /> Connect</Link>
                <div className="logout-link" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </div>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;