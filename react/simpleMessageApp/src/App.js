import React, { useState, useEffect } from "react";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import SetName from "./components/SetName";
import PhotoEditor from "./components/PhotoEditor";
import io from "socket.io-client";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ImageWithIcons from "./components/ImageWithIcons";

let socket = "";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState(
    sessionStorage.getItem("userName") || ""
  );
  const [users, setUsers] = useState([]);
  const [rightDrawerOpen, seIsRightDrawerOpen] = React.useState(false);
  const [leftDrawerIsOpen, setLeftDrawerIsOpen] = React.useState(false);
  const [room, setRoom] = useState("room1");
  const [roomName, setRoomName] = useState(
    sessionStorage.getItem("roomName" || room)
  );
  const [editRoomName, setEditRoomName] = useState(true);
  const [currentRoomName, setCurrentRoomName] = useState("room1");
  const [newRoomName, setNewRoomName] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [availableRoomsNames, setAvailableRoomsNames] = useState([]);
  const [reOpenModalId, setReOpenModalId] = useState();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [admins, setAdmins] = useState();

  useEffect(() => {
    socket = io("http://localhost:3001", {
      query: { room, username: userName },
    });

    socket.emit("joinRoom", room, userName);

    // Listen for messages from the server
    socket.on("messages", (receivedMessages) => {
      setMessages(receivedMessages);
    });

    // Listen for the list of users from the server
    socket.on("users", (usersList) => {
      setUsers(usersList);
    });
    if (room !== "room1") {
      socket.on("admins", (adminlist) => {
        console.log(adminlist);
        setAdmins(adminlist);
      });
    }
    return () => {
      socket.disconnect();
    };
  }, [room, userName]);

  useEffect(() => {
    socket.emit("getRooms", userName);
  });

  const handleCreateRoom = () => {
    if (newRoomName.trim() !== "") {
      // Emit the new room name to the server
      socket.emit("createRoom", newRoomName, userName);
      setNewRoomName("");
    }
  };

  const toggleRightDrawer = () => {
    seIsRightDrawerOpen((prevState) => !prevState);
  };

  const toggleSettings = () => {
    setSettingsOpen((prev) => !prev);
  };
  const toggleLeftDrawer = () => {
    setLeftDrawerIsOpen((prevState) => !prevState);
  };

  const handleRoomChange = (newRoom, roomName) => {
    setRoom(newRoom);
    setCurrentRoomName(roomName);
  };

  useEffect(() => {
    const storedLocalRoomNames = sessionStorage.getItem("localRoomNames");
    const localRoomNames = JSON.parse(storedLocalRoomNames || "{}");
    const roomNameValue = localRoomNames.room;
    console.log("Room Name Value:", roomNameValue);
    setRoomName(roomNameValue);
  }, [room]);

  const handleSendName = (name) => {
    const previousName = userName;
    setUserName(name);
    sessionStorage.setItem("userName", name);
    // Send name to the server
    socket.emit("setName", previousName, name);
  };

  const kickPerson = (user) => {
    socket.emit("onRemovePeopleFromServer", room, user);
  };

  useEffect(() => {
    socket.emit("rooms", userName);
    socket.on("availableRooms", (roomList, filteredRoomNames) => {
      setAvailableRooms(roomList);
      setAvailableRoomsNames(filteredRoomNames);
    });
    return () => {
      socket.off("availableRooms");
    };
  }, []);

  const handleReOpenModal = () => {
    let id;
    while (true) {
      id = Math.random();
      if (reOpenModalId !== id) {
        setReOpenModalId(id);
        break;
      }
    }
  };

  const [usersToAdd, setUsersToAdd] = useState("");

  const handleAddUsers = () => {
    if (usersToAdd) {
      socket.emit("addUserToRoom", room, usersToAdd);
      setUsersToAdd("");
    }
  };

  useEffect(() => {
    socket.on("permissionDenied", (message) => {
      console.log(message);
    });
    return () => {
      socket.off("permissionDenied");
    };
  });

  return (
    <div className="container-wrapper">
      <div className="app-info">
        <p className="app-name">Header</p>
        <div className="centered-app-header">
          {!settingsOpen ? (
            <>{currentRoomName}</>
          ) : (
            <p>Settings</p>
          )}
        </div>
      </div>
      {!settingsOpen ? (
        <>
          <Drawer
            open={leftDrawerIsOpen}
            onClose={toggleLeftDrawer}
            direction="left"
            className="user-drawer"
            duration={400}
          >
            <div>
              <input
                type="text"
                placeholder="Enter new room name"
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
              />
              <button onClick={handleCreateRoom}>Create Room</button>
            </div>
          </Drawer>

          <Drawer
            open={rightDrawerOpen}
            onClose={toggleRightDrawer}
            direction="right"
            className="user-drawer"
            duration={400}
          >
            <div>
              <input
                type="text"
                placeholder="Enter name"
                value={usersToAdd}
                onChange={(e) => setUsersToAdd(e.target.value)}
              />
              <button onClick={handleAddUsers}>add user</button>
            </div>
          </Drawer>
          <MessageList
            messages={messages}
          />
          <ImageWithIcons
            deleteImage={handleDeleteImage}
            reOpenModal={handleReOpenModal}
          />
          <div className="server-list">
            <div className="all-icons">
              {availableRooms.map((availableRoom, index) => (
                <div>
                  <button
                    className="server-icon-container"
                    onClick={() =>
                      handleRoomChange(
                        availableRoom,
                        availableRoomsNames[index]
                      )
                    }
                    key={availableRoom}
                    value={availableRoom}
                  >
                    <FontAwesomeIcon
                      className="server-icon"
                      icon={faSquare}
                    ></FontAwesomeIcon>
                    <span className="server-icons">
                      {availableRoomsNames[index]}
                    </span>
                  </button>
                </div>
              ))}
              <button
                className="server-icon-container"
                onClick={toggleLeftDrawer}
              >
                <FontAwesomeIcon className="server-icon" icon={faSquare} />
                <FontAwesomeIcon
                  className="add-server-icon"
                  style={{ color: "white" }}
                  icon={faPlus}
                >
                  {" "}
                </FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "black",
            }}
          >
            <div className="user-info">
              <div>
                {Object.entries(admins).map(([name, permission]) => (
                  <div>
                    {permission ? (
                      <div>
                        <h3>Users</h3>
                        <p>{name}</p>
                        <button onClick={() => kickPerson(name)}>
                          {name === userName ? "leave" : "remove"}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <h3>----------------------------</h3>
                        <p>{name}</p>
                        <button onClick={() => kickPerson(name)}>
                          {name === userName ? "leave" : "remove"}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <button onClick={toggleRightDrawer}>add users to room</button>
              </div>
            </div>
            <div>
              <div className="bottomContainer">
                <div>
                  <button onClick={toggleSettings}>
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </div>
                <p>ID: {socket.id}</p>
                <p>User Name: {userName}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <SetName onSendName={handleSendName} />
          <button onClick={toggleSettings}>X</button>
        </div>
      )}
    </div>
  );
};

export default App;
