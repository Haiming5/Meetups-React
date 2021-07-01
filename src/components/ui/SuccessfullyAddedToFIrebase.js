import classes from "./SuccessfullyAddedToFIrebase.module.css";
import Card from "./Card";

function AddedToFirebase(props) {
	return (
		<Card>
			<div className={classes.container}>
				<h2>Meetups have been added!!</h2>
				<div className={classes.modal}>
					<button onClick={props.clickOk}>Ok</button>
				</div>
			</div>
		</Card>
	);
}

export default AddedToFirebase;
