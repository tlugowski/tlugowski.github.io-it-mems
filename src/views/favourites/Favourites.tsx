import React from "react";
import MemList from "../../components/mem-list/Mem-list";
import { ContainerFavourites } from "./favourites.components";

const Favourites: React.FC = () => {
  return (
    // <ContainerFavourites>
    <MemList type="favourites" />
    // </ContainerFavourites>
  );
};

export default Favourites;
