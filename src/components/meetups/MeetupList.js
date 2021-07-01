import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
	return (
		<ul className={classes.list}>
			{props.leagueChamps.map((eachChamp) => (
				<MeetupItem
					key={eachChamp.id}
					id={eachChamp.id}
					name={eachChamp.enteredTitle}
					description={eachChamp.enteredDescription}
					img={eachChamp.enteredImage}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
