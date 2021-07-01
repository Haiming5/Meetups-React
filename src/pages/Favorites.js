import FavoriteContext from "../store/StoredFavorites";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function Favorites() {
	const currentContext = useContext(FavoriteContext);
	let content;
	const [favoriteFromFirebase, setFavoriteFromFirebase] = useState([]);

	const axios = require("axios");
	useEffect(() => {
		axios
			.get(
				"https://react-getting-started-915a4-default-rtdb.firebaseio.com/favorites.json"
			)
			.then((eachMeetup) => {
				const meetups = [];
				for (let k in eachMeetup.data) {
					const temp = {
						id: k,
						...eachMeetup.data[k],
					};
					meetups.push(temp);
				}
				setFavoriteFromFirebase(meetups);
			});
	}, [axios]);

	// console.log("favoriteFromFirebase", favoriteFromFirebase); // list of objects

	if (favoriteFromFirebase.length === 0) {
		content = <h3> Don't have any favorites yet</h3>;
	} else {
		content = <MeetupList leagueChamps={favoriteFromFirebase} />;
	}
	return (
		<section>
			<h1> My Favorite </h1>
			{content}
		</section>
	);
}

export default Favorites;
