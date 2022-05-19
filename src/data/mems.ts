import { Mems } from "./mems.d";

export const mems: Mems = [
  {
    id: 1,
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: {
      type: "staticSource",
      value: "picacho.jpeg",
    },
    description: "Lorem",
  },
  {
    id: 2,
    title: "Mem 2",
    upvotes: 6,
    downvotes: 0,
    img: {
      type: "staticSource",
      value: "bulbasaur.jpeg",
    },
    description: "Lorem",
  },
  {
    id: 3,
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: {
      type: "link",
      value:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1280px-Calico_tabby_cat_-_Savannah.jpg",
    },
    description: "Lorem",
  },
];
