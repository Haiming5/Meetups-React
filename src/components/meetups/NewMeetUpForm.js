import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";
import { useRef } from "react";

function NewMeetUpForm(props) {
	const titleRef = useRef();
	const desRef = useRef();
	const imgRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		const titleVal = titleRef.current.value;
		const desVal = desRef.current.value;
		const imgVal = imgRef.current.value;
		const newMeetup = {
			enteredTitle: titleVal,
			enteredDescription: desVal,
			enteredImage: imgVal,
		};
		props.onSaveData(newMeetup);
	}

	return (
		<div>
			<Card>
				<form className={classes.form} onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor="title">Meetup Title</label>
						<input type="text" id="title" required ref={titleRef}></input>
					</div>
					<div className={classes.control}>
						<label htmlFor="description">Meetup Description</label>
						<textarea row="5" ref={desRef}></textarea>
					</div>
					<div className={classes.control}>
						<label htmlFor="image">Meetup Image</label>
						<input type="url" id="image" required ref={imgRef}></input>
					</div>
					<div className={classes.actions}>
						<button>Add Meetup</button>
					</div>
				</form>
			</Card>
		</div>
	);
}

export default NewMeetUpForm;
