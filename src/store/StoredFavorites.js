/* 
We create this file to use createContext in React, so that we can create a state which can be 
used globally (through different components)
*/

import { createContext, useState } from "react";

const FavoriteContext = createContext({
	favorites: [],
	totalFavorites: 0,
	// addFavorite: (aNewFavorite) => {},
	// removeFavorite: (removedId) => {},
	// isFavorite: (meetupId) => {},
});

// This function will be responsible for providing necessary information for other components that are interested in FavoriteContext
// Everything needs to be wrapped inside <FavoriteContext.Provider>
export function FavoriteContextProvider(props) {
	const [favoriteList, setFavoriteList] = useState([]);

	function addToFavorite(aNewFavorite) {
		/*
        We could directly concact aNewFavorite to favorites list, but we don't. 
        The reason is that when dealing with a situation that's extremely rely on previous 
        stage, if we concat it directly to the favorites list, the newest state might not be 
        updated or processed on time. So the condition of a list might not be the most updated.
        Instead, we pass a function, and that function will be called by React for you and it will 
        update the most updated snapshot. 
        */
		setFavoriteList((LastFavoriteList) => {
			return LastFavoriteList.concat(aNewFavorite);
		});
	}

	function removeFromFavorite(removedId) {
		setFavoriteList((LastFavoriteList) => {
			return LastFavoriteList.filter(
				(eachFavorite) => eachFavorite.id !== removedId
			);
		});
	}

	function isFavorite(meetupId) {
		return favoriteList.some((aFavorite) => aFavorite.id === meetupId);
	}

	// Context here is a evolved version of FavoriteContext, it's values are updated compared to FavoriteContext
	const context = {
		favorites: favoriteList,
		totalFavorites: favoriteList.length,
		addFavorite: addToFavorite,
		removeFavorite: removeFromFavorite,
		isFavorite: isFavorite,
	};

	return (
		<FavoriteContext.Provider value={context}>
			{props.children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContext;
