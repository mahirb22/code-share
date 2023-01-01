import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [uniqueId, setUniqueId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setUniqueId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!uniqueId || !userName) {
      toast.error("Room Id and Username are Required");
      return;
    }

    navigate(`/editor/${uniqueId}`, {
      state: {
        userName,
        uniqueId,
      },
    });
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-sync-logo"
        />
        <p className="mainLabel"> Paste Invitation Room Id</p>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room Id"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            onKeyUp={handleEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;{" "}
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <p>Build with 🧡 by Mahir Bhatt </p>
      </footer>
    </div>
  );
};

export default Home;
