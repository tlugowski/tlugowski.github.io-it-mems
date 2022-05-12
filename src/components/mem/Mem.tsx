import { MemProps } from "./Mem.d";
import { useMemo } from "react";
import {
  ContainerMem,
  Card,
  VoteContainer,
  VoteButton,
} from "./mem.components";
import { useDispatch } from "react-redux";
import { changeVoute } from "../../store/memSlice";

const { Meta } = Card;

const Mem: React.FC<MemProps> = ({ mem }) => {
  const dispatch = useDispatch();
  const img = useMemo(() => require(`../../images/${mem.img}`), [mem]);

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
  return (
    <ContainerMem>
      <Card cover={<img alt={mem.title} src={img} />}>
        <Meta title={mem.title} description={mem.description} />
        <VoteContainer>
          <VoteButton onClick={addPositiveVoute}> {mem.upvotes} + </VoteButton>
          <VoteButton onClick={addNegativeVoute}>
            {" "}
            {mem.downvotes} -{" "}
          </VoteButton>
        </VoteContainer>
      </Card>
    </ContainerMem>
  );
};

export default Mem;
