import { MemProps } from "./Mem.d";
import { useMemo } from "react";
import { Button } from "antd";
import {
  ContainerMem,
  Card,
  VoteContainer,
  VoteButton,
  RateContainer,
  PositiveButton,
  NegativeButton,
  IsFavouriteWrapper,
  FavouriteButtonWrapper,
} from "./mem.components";
import { changeVoute } from "../../store/memSlice";
import { Rate } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addToFavourites,
  isMemFavourite,
  removeFromFavourites,
} from "../../store/userSlice";

const { Meta } = Card;

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
    isFavourite
      ? dispatch(removeFromFavourites(mem.id))
      : dispatch(addToFavourites(mem.id));
  };
  return (
    <ContainerMem>
      <Card
        className="gradient-border"
        cover={
          <img
            alt={mem.title}
            src={mem.img.type === "staticSource" ? img : mem.img.value}
          />
        }
      >
        <Meta title={mem.title} description={mem.description} />
        <VoteContainer>
          <PositiveButton>
            <VoteButton onClick={addPositiveVoute}>{mem.upvotes} 👍🏻</VoteButton>
          </PositiveButton>
          <NegativeButton>
            <VoteButton onClick={addNegativeVoute}>
              {mem.downvotes} 👎🏻
            </VoteButton>
          </NegativeButton>
        </VoteContainer>
        <RateContainer>
          <Rate disabled value={rate} />
        </RateContainer>
        <IsFavouriteWrapper>
          Is favourite? {isFavourite ? "✅" : "⛔"}
        </IsFavouriteWrapper>
        <FavouriteButtonWrapper>
          <Button type="primary" onClick={toggleFavouriteMem}>
            {isFavourite ? "💔 Delete from favourite" : "❤️ Add to favourite"}
          </Button>
        </FavouriteButtonWrapper>
      </Card>
    </ContainerMem>
  );
};

export default Mem;
