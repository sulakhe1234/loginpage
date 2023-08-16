import React, { useEffect, useState } from "react";

const Home = (props) => {
  let [username, setUsername] = useState("");

  useEffect(() => {
    let data = window.localStorage.getItem("username");
    setUsername(data);
  }, []);

  return (
    <div>
      <h1>Welcome! {username}</h1>
    </div>
  );
};

export default Home;
