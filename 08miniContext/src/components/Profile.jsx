import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>; /// conditional return statement
  else return <div>Welcome: {user.username}</div>;
}

export default Profile;
