import { NewMem } from "./memForm.d";

export const validateForm = (formData: NewMem): [boolean, string] => {
  if (formData.title.length <= 5) {
    return [false, "Mem's title must be longer than 5 characters"];
  }
  if (formData.description.length <= 15) {
    return [false, "Mem's description must be longer than 15 characters"];
  }
  if (formData.img.length <= 5) {
    return [false, "Link to Mems must be longer than 5 characters"];
  }

  return [true, ""];
};
