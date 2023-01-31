import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IsAuthContext } from "../App";
import LoadingSpinner from "./LoadingSpinner";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const { authDetails, setAuthDetails } = useContext(IsAuthContext);
  useEffect(() => {
    const checkAuth = async () => {
      if (!authDetails.isAuth) {
        setIsVerifying(false);
        navigate("/login");
        return;
      }
      const res = await fetch(
        "https://spiritandtime-movie-app.com/api/auth/verify",
        {
          method: "POST",
          body: JSON.stringify({
            email: sessionStorage.getItem("email"),
            token: sessionStorage.getItem("jwt"),
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setIsVerifying(false);
      // question: is there a better way of doing this, instead of having a state and showing a loading spinner?
      if (data.msg !== "Authorized") {
        navigate("/login");
      }
    };
    checkAuth();
  }, []);
  if (isVerifying) return <LoadingSpinner />;
  return children;
};

export default ProtectedRoute;
