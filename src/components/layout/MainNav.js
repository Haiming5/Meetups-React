import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import { useContext } from "react";
import FavoriteContext from "../../store/StoredFavorites";

function MainNav() {
	const currentContext = useContext(FavoriteContext);
	return (
		<header className={classes.header}>
			<div className={classes.logo}> React Meetups </div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new_meetups">New Meetups</Link>
					</li>
					<li>
						<Link to="/favorites">Favorite Meetups</Link>
					</li>
					<li>
						<span className={classes.badge}>
							{currentContext.totalFavorites}
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNav;
