import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';


function MainNavigation () {
    return (<header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><NavLink to="/">All Meet ups</NavLink></li>
                <li><NavLink to="/new-meetups">New Meet ups</NavLink></li>
                <li><NavLink to="/favorites">My favorites</NavLink></li>
            </ul>
        </nav>
    </header>)
}

export default MainNavigation