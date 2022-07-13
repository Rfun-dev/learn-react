import { createContext ,useState} from "react";

const FavoriteContext = createContext
(
    {
        favorite : [],
        totalFavorite : 0,
    }
);

const FavoriteContextProvider = (props) => {
    const [userFavorite,setUserFavorite] = useState();
    const addFavoriteHandler = (meetups) => {
        setUserFavorite = (prev) => (
            prev.concat(meetups)
        );
    };

    const removeFavoriteHandler = (meetupId) => {
        FavoriteContext.filter((meetup) => (
            meetup.id !== meetupId 
        ));
    };

    const itemIsFavoriteHandler = (meetupId) => {
        FavoriteContext.Consumer(meetup => meetup.id === meetupId)
    }

    const context = {
        favorite : userFavorite,
        totalFavorite : userFavorite.length
    }

    return(
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}