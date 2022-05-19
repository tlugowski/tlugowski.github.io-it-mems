// React + Redux
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import HotView from "./views/hot/Hot";
import FavouritesView from "./views/favourites/Favourites";
import MainView from "./views/main/Main";
import RegularView from "./views/regular/Regular";
import AppInfoView from "./views/app-info/app-info";

// Material Ui

// CSS
import "./App.css";
import AddMemFormView from "./views/addMemForm/addMemForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />}>
        <Route index element={<AppInfoView />} />
        <Route path="regular" element={<RegularView />} />
        <Route path="hot" element={<HotView />} />
        <Route path="favourites" element={<FavouritesView />} />
        <Route path="add-mem" element={<AddMemFormView />} />
        {/* <Route path="*" element={<NoMatch />} /> // 404 */}
      </Route>
    </Routes>
  );
}

export default App;
