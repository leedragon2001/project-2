import { Routes, Route } from 'react-router-dom';
import Slidebar from '../Sliderbar/Sliderbar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Devices from '../../pages/Devices/Devices';
import Services from '../../pages/Services/Services';
import OrdinalNumber from '../../pages/Ordinal-Number/OrdinalNumber';
import Report from '../../pages/Report/Report';
import SettingSystem from '../../pages/Setting-System/SettingSystem';
import './Menu.scss'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-left'>
                <Slidebar />
            </div>
            <div className='menu-right'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/devices' element={<Devices />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/ordinal-number' element={<OrdinalNumber />} />
                    <Route path='/report' element={<Report />} />
                    <Route path='/setting-system' element={<SettingSystem />} />
                </Routes>

            </div>
        </div>
    )
}

export default Menu 