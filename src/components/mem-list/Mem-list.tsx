import React from "react";
import { MemListProps } from "./Mem-list.d";
import { Mems } from "./../../data/mems.d";
import { selectMemesByType } from "./../../store/memSlice";
import Mem from "./../mem/Mem";
import { useAppSelector } from "../../app/hooks";

const MemList: React.FC<MemListProps> = ({ type }) => {
  const mems: Mems = useAppSelector(selectMemesByType(type));

  return (
    <>
      {mems.map((mem, index) => (
        <Mem key={index} mem={mem} />
      ))}
    </>
  );
};

export default MemList;
