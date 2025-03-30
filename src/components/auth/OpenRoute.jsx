import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return children;
}

export default OpenRoute;
