import React from "react";
import { Routes, Route } from "react-router-dom";

import HotView from "./views/hot/Hot";
import FavouritesView from "./views/favourites/Favourites";
import MainView from "./views/main/Main";
import RegularView from "./views/regular/Regular";
import AppInfoView from "./views/app-info/app-info";

import "./App.css";
import AddMemFormView from "./views/addMemForm/addMemForm";
import NotFound from "./views/notFound/NotFound";
import Home from "./views/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />}>
        <Route index element={<AppInfoView />} />
        <Route path="regular" element={<RegularView />} />
        <Route path="hot" element={<HotView />} />
        <Route path="favourites" element={<FavouritesView />} />
        <Route path="add-mem" element={<AddMemFormView />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
