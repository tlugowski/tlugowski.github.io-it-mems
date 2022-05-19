import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../../app/hooks";
import { addMem } from "../../store/memSlice";
import { NewMem } from "./memForm.d";

const MemForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [mem, setMem] = useState<NewMem>({
    title: "",
    description: "",
    img: "",
  });

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessful]);

  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label>Mem's name</label>
        <input type="text" name="title" value={mem.title} onChange={onChange} />
      </div>
      <div>
        <label>Mem's description:</label>
        <input
          type="text"
          name="description"
          value={mem.description}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Add mem link:</label>
        <input
          type="text"
          value={mem.img}
          onChange={onChange}
          name="img"
          // pattern="/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm"
        />
      </div>
      {isSuccessful && <span>Pomysle wstawiono mema</span>}
      <button type="submit">Wyslij</button>
    </form>
  );
};

export default MemForm;
