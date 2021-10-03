import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetUp) {
        // setUserFavorites(userFavorites.concat(favoriteMeetUp)) state updates are not instant react schedules them do the below instead
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteMeetUp);
        });
    }

    function removeFavoriteHandler(meetUpId) {
        setUserFavorites((previousUserFavorites) =>
            previousUserFavorites.filter((meetup) => meetup.id !== meetUpId)
        );
    }

    function itemsFavoriteHandler(meetUpId) {
        return userFavorites.some(meetup => meetup.id === meetUpId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
