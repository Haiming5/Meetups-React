import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import AddedToFirebase from "../components/ui/SuccessfullyAddedToFIrebase";
import { useState } from "react";

function NewMeetUps() {
	const [added, setAdded] = useState(false);

	function clickedOk() {
		setAdded(false);
	}

	function saveToGoogleFirebase(meetupData) {
		const axios = require("axios");
		axios.post(
			"https://react-getting-started-915a4-default-rtdb.firebaseio.com/meetups.json",
			{ meetupData }
		);
		setAdded(true);
	}

	return (
		<div>
			{added ? (
				<AddedToFirebase clickOk={clickedOk} />
			) : (
				<NewMeetUpForm onSaveData={saveToGoogleFirebase} />
			)}
		</div>
	);
}

export default NewMeetUps;
