import { useSelector } from "react-redux";

export const useProfile = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  return { token, user };
};
