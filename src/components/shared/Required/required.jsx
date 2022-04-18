import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.int";

const Required = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (!user) {
    return <Navigate to={`/login`} replace state={{ from: location }} />;
  }
  return children;
};

export default Required;
