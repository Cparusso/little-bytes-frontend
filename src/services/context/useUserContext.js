import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserContext = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return { isLoggedIn, setIsLoggedIn };
};
