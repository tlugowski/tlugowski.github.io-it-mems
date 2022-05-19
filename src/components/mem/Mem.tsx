import { MemProps } from "./Mem.d";
import { useMemo } from "react";
import {
  ContainerMem,
  Card,
  VoteContainer,
  VoteButton,
  RateContainer,
} from "./mem.components";
import { changeVoute } from "../../store/memSlice";
import { Rate } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToFavourites, isMemFavourite, removeFromFavourites } from "../../store/userSlice";
// import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const { Meta } = Card;

// const customIcons = {
//   1: <FrownOutlined />,
//   2: <FrownOutlined />,
//   3: <MehOutlined />,
//   4: <SmileOutlined />,
//   5: <SmileOutlined />,
// };

const Mem: React.FC<MemProps> = ({ mem }) => {
  const dispatch = useAppDispatch();
  const isFavourite: boolean = useAppSelector(isMemFavourite(mem.id));
  const img = useMemo(
    () =>
      mem.img.type === "staticSource"
        ? require(`../../images/${mem.img.value}`)
        : null,
    [mem]
  );

  const addPositiveVoute = () => {
    dispatch(
      changeVoute({
        id: mem.id,
        type: "up-mem",
      })
    );
  };

  const addNegativeVoute = () => {
    dispatch(
      changeVoute({
        id: mem.id,
        type: "down-mem",
      })
    );
  };

  const rate = useMemo(() => (mem.upvotes / mem.downvotes) * 2.5, [mem]);

  const toggleFavouriteMem = () => {
    isFavourite ? dispatch(removeFromFavourites(mem.id)) : dispatch(addToFavourites(mem.id)) 
  }
  return (
    <ContainerMem>
      <Card
        cover={
          <img
            alt={mem.title}
            src={mem.img.type === "staticSource" ? img : mem.img.value}
          />
        }
      >
        <Meta title={mem.title} description={mem.description} />
        <VoteContainer>
          <VoteButton onClick={addPositiveVoute}> {mem.upvotes} + </VoteButton>
          <VoteButton onClick={addNegativeVoute}>{mem.downvotes} - </VoteButton>
        </VoteContainer>
        <RateContainer>
          <Rate disabled value={rate} />
        </RateContainer>
        isFavourite - {isFavourite ? "Tak" : "Nie"}
        <button onClick={toggleFavouriteMem}>{isFavourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}</button>
      </Card>
    </ContainerMem>
  );
};

export default Mem;
