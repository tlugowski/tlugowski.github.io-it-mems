import React from "react";
import MemForm from "../../components/memForm/memForm";
import { ContainerAddMem } from "./addMemForm.components";

const AddMemFormView: React.FC = () => {
  return (
    <ContainerAddMem>
      <MemForm />
    </ContainerAddMem>
  );
};

export default AddMemFormView;
