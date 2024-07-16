import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/iframeSrc/authSelectors";
import "./Logged-in-profile.css";

function LoggedIn() {
  const user = useSelector(selectUser);
  const source = useSelector((state) => state.quiz.value);
  const dispatch = useDispatch();

  // const logout = () => {
  //   AuthApi.signout();
  //   dispatch(setUser(null));
  // };
  // const userProfile = () => {
  //   return (
  //     <div className="profile">
  //       <p
  //         style={{
  //           fontSize: "13px",
  //           fontFamily: "Sans-serif",
  //           color: "red",
  //         }}
  //       >
  //         Welcome, {user.email}
  //       </p>

  //       <Link to="#" onClick={logout}>
  //         Logout
  //       </Link>
  //     </div>
  //   );
  // };

    // return (
    //   <div className="profile">
    //     <p
    //       style={{
    //         fontSize: "13px",
    //         fontFamily: "Sans-serif",
    //         color: "red",
    //       }}
    //     >
    //       Welcome, {user.email}
    //     </p>
    //   </div>
    // );
  

 
}

export default LoggedIn;
