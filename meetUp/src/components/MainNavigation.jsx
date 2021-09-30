import { NavLink } from "react-router-dom";


function MainNavigation () {
    return <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li><NavLink to="/">All Meet ups</NavLink></li>
                <li><NavLink to="/new-meetup">New Meet ups</NavLink></li>
                <li><NavLink to="/favorites">My favorites</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation