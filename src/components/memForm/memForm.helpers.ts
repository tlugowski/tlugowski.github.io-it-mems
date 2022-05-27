import { NewMem } from "./memForm.d";

export const validateForm = (formData: NewMem): [boolean, string] => {
  if (formData.title.length <= 5) {
    return [false, "Tytuł memea musi byc dluzszy niz 5 znaków"];
  }
  if (formData.description.length <= 15) {
    return [false, "Opis memea musi byc dluzszy niz 15 znaków"];
  }
  if (formData.img.length <= 5) {
    return [false, "Link do mema musi byc dluzszy niz 5 znaków"];
  }

  return [true, ""];
};
