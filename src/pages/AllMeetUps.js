import MeetupList from "../components/meetups/MeetupList";
// useEffect let you run some code in a certain condition
import { useState, useEffect } from "react";

// How useEffect() works, takes 2 arguments, first one function, the second one is a list of dependency
// the function argument inside useEffect() only execute when the dependency in the second argument changes

function AllMeetUps() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	let content;
	const axios = require("axios");
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				"https://react-getting-started-915a4-default-rtdb.firebaseio.com/meetups.json"
			)
			.then((response) => {
				const meetups = [];
				for (let k in response.data) {
					const temp = {
						id: k,
						...response.data[k].meetupData,
					};
					meetups.push(temp);
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, [axios]);

	if (isLoading) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		);
	}

	if (loadedMeetups.length === 0) {
		content = <h3>Don't have any meetups yet, create some</h3>;
	} else {
		content = <MeetupList leagueChamps={loadedMeetups} />;
	}

	return (
		<div>
			<h1>All Meetups Page</h1>
			{content}
		</div>
	);
}

export default AllMeetUps;
