import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import baocao from '../../assets/baocao.png'
import dichvu from '../../assets/dichvu.png'
import dashboard from '../../assets/dashboard.png'
import thietbi from '../../assets/thietbi.png'
import capso from '../../assets/capso.png'
import caidat from '../../assets/caidat.png'
import logout from '../../assets/logout.png'
import './Slidebar.scss'

const Slidebar = () => {
    return (
        <div className="sliderbar-container">
            <div className="sliderbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='slidebar-body'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img className="icon" src={dashboard} alt="dashboard" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/devices">
                            <img className="icon" src={thietbi} alt="thietbi" />
                            Devices
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">
                            <img className="icon" src={dichvu} alt="dichvu" />
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ordinal-number">
                            <img src={capso} alt="capso" />
                            Ordinal Number
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/report">
                            <img src={baocao} alt="baocao" />
                            Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting-system">
                            <img src={caidat} alt="caidat" />
                            Setting System
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">
                            <img src={logout} alt="logout" />
                            Đăng xuất
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slidebar