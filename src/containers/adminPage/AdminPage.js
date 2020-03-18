import React, { useState } from "react";
import QuillEditor from "../adminPage/components/QuillEditor";
import Welcome from "./components/Welcome";
import { useUserContext } from "../../services/context/useUserContext";
import Quill from "quill";

const AdminPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useUserContext();

  return <QuillEditor />;
};

export default AdminPage;
