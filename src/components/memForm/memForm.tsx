import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../../app/hooks";
import { addMem } from "../../store/memSlice";
import {
  CardAddMem,
  FormAddMem,
  HeaderWrapper,
  InputWrapper,
  LabelWrapper,
  NotificationWrapper,
  SectionWrapper,
  SendButton,
  SendContainer,
} from "../../views/addMemForm/addMemForm.components";
import { NewMem } from "./memForm.d";

const MemForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [mem, setMem] = useState<NewMem>({
    title: "",
    description: "",
    img: "",
  });

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const onSubmit: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    dispatch(addMem(mem));
    setIsSuccessful(true);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setMem({
      ...mem,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!isSuccessful) {
      return;
    }

    const timer = setTimeout(() => {
      setIsSuccessful(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessful]);

  return (
    <CardAddMem>
      <FormAddMem>
        <HeaderWrapper>Add your mems</HeaderWrapper>
        <SectionWrapper>
          <LabelWrapper>Mem's name: </LabelWrapper>
          <InputWrapper
            type="text"
            name="title"
            value={mem.title}
            onChange={onChange}
          />
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>Mem's author:</LabelWrapper>
          <InputWrapper
            type="text"
            name="description"
            value={mem.description}
            onChange={onChange}
          />
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>Add mem link:</LabelWrapper>
          <InputWrapper
            type="text"
            value={mem.img}
            onChange={onChange}
            name="img"
          />
        </SectionWrapper>
        {isSuccessful && (
          <NotificationWrapper>
            Mem's has been added correctly!
          </NotificationWrapper>
        )}
        <SendContainer>
          <SendButton type="primary" onClick={onSubmit}>
            Send
          </SendButton>
        </SendContainer>
      </FormAddMem>
    </CardAddMem>
  );
};

export default MemForm;
