import { Route, Routes } from "react-router-dom";
import MainHeaderLayout from "./component/layout/MainHeader";
import AllMeatUpsPage from "./page/AllMeatUps";
import FavoritesPage from "./page/Favorites";
import NewMeetUpsPage from "./page/NewMeatUp";

function App() {
  return (
    <>
      <MainHeaderLayout />
      <Routes>
        <Route path="/" element={<AllMeatUpsPage />} />
        <Route path="/new-meetups" element={<NewMeetUpsPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
