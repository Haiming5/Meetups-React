import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext, useState } from "react";
import FavoriteContext from "../../store/StoredFavorites";

function MeetupItem(props) {
	const currentContext = useContext(FavoriteContext);
	const isFavorite = currentContext.isFavorite(props.id);
	const [isInFirebaseFavorites, setIsInFirebaseFavorites] = useState(false);

	const axios = require("axios");
	// axios
	// 	.get(
	// 		"https://react-getting-started-915a4-default-rtdb.firebaseio.com/meetups.json"
	// 	)
	// 	.then((object) => {
	// 		for (let k in object.data) {
	// 			if (props.id === k) {
	// 				console.log(object.data[k].enteredTitle);
	// 				setIsInFirebaseFavorites(true);
	// 			} else {
	// 				setIsInFirebaseFavorites(false);
	// 			}
	// 		}
	// 	});

	function toggleFavoriteHandler() {
		const axios = require("axios");
		if (isFavorite) {
			currentContext.removeFavorite(props.id);
		} else {
			currentContext.addFavorite({
				key: props.id,
				id: props.id,
				enteredTitle: props.name,
				enteredDescription: props.description,
				enteredImage: props.img,
			});
			axios.post(
				"https://react-getting-started-915a4-default-rtdb.firebaseio.com/favorites.json",
				{
					key: props.id,
					id: props.id,
					enteredTitle: props.name,
					enteredDescription: props.description,
					enteredImage: props.img,
				}
			);
		}
	}

	function deleteFromFirebase(deletedId) {}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.content}>
					<h3>{props.name}</h3>
					<p>{props.description}</p>
				</div>
				<div className={classes.image}>
					<img src={props.img} alt={props.description} />
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteHandler}>
						{isInFirebaseFavorites ? "Remove from Favorite" : "Add to Favorite"}
					</button>
					<button onClick={deleteFromFirebase}>Delete from All Meetups</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
