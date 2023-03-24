import React, { useContext, useEffect, useState } from "react";
import instance from "../../../api/Interceptor";
import { AuthContext } from "../../../store/store";

const Profile = () => {
  const context = useContext(AuthContext);
  return (
    <div>
      <h1>{context.userData.name ?? "N/A"}</h1>
    </div>
  );
};

export default Profile;
