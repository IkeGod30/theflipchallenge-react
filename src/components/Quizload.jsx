import { useNavigate } from "react-router-dom";

function Loadquiz({ children }) {
  const navigate = useNavigate();
  //   return navigate("/login");
  return <div>{children}</div>;
}

export default Loadquiz;
