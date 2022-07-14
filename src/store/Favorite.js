import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
  addFavorite: (meetups) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [userFavorite, setUserFavorite] = useState([]);
  const addFavoriteHandler = (meetups) => {
    setUserFavorite((prev) => {
        return prev.concat(meetups)
    })
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorite((prev) => {
        return prev.filter(item => item.id !== meetupId)
    })
  };

  const itemIsFavoriteHandler = (meetupId) =>
    userFavorite.some((meetup) => meetup.id === meetupId);

  const context = {
    favorite: userFavorite,
    totalFavorite: userFavorite.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
