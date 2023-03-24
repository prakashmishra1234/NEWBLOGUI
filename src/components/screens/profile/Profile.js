import React, { useEffect, useState } from "react";
import instance from "../../../api/Interceptor";

const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    instance
      .get("me")
      .then((res) => {
        setUserData(res?.user ?? {});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>{userData.name ?? "N/A"}</h1>
    </div>
  );
};

export default Profile;
