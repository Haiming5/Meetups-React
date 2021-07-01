import { Route, Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

// This module is called component in javascript
// Standard javascript function, we export it in the end so it can be used in other modules.
// The only thing interesting is that it returns a JSX (a html in javascript) form.
// In fact this App() is still javascript object that just looks like html, it's not html.
function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetUps />
				</Route>
				<Route path="/new_meetups">
					<NewMeetUps />
				</Route>
				<Route path="/favorites">
					<Favorites />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
