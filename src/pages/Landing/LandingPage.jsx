import { Button } from "@mui/material";
import LandingCarousel from "./LandingCarousel/LandingCarousel";
import { useNavigate } from "react-router-dom";
// import Login from "../Login/Login";

export function LandingPage() {
  const navigate = useNavigate();
  function challenge() {
    navigate("/login");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={challenge} variant="contained" disableElevation>
        Click to Challenge
      </Button>

      <LandingCarousel />
    </div>
  );
}
