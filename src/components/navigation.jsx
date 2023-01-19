import { NavLink } from "react-router-dom";
import './navigation.css'

const routes_Arr = [
    {
        name: 'main',
        to: '/main',
        displayText: 'Главная'
    },
    {
        name: 'about',
        to: '/about',
        displayText: 'О нас'
    },
    {
        name: 'contacts',
        to: '/contacts',
        displayText: 'Контакты'
    },
    {
        name: 'services',
        to: '/services',
        displayText: 'Услуги'
    }

];

const NavBar = () => {
    const NavLink_Arrs = routes_Arr.map((route, index) => {
        return (
            <NavLink
                className={({ isActive }) => (`navigation-item ${isActive && 'navigation-item--active'}`)}
                key={index} to={route.to} end={route.end}> {route.displayText}
            </NavLink>
        )
    })

    return( <nav className="navigation"> <div className="navigation-content"> {NavLink_Arrs} </div> </nav> ); 
};
export default NavBar;