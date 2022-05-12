import React from "react";
import { MemListProps } from "./Mem-list.d";
import { Mems } from "./../../data/mems.d";
import { useSelector } from "react-redux";
import { selectMemesByType } from "./../../store/memSlice";
import Mem from "./../mem/Mem";

const MemList: React.FC<MemListProps> = ({ type }) => {
  const mems: Mems = useSelector(selectMemesByType(type));

  return (
    <>
      {mems.map((mem, index) => (
        <Mem key={index} mem={mem} />
      ))}
    </>
  );
};

export default MemList;
