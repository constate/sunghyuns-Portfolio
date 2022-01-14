import { useState } from "react";
import EditContext from "../EditContext";

const EditProvider = ({ children }) => {
  const [editInfo, setEditInfo] = useState({
    check: true,
  });
  return (
    <EditContext.Provider
      value={{
        editInfo,
        setEditInfo,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
