import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./MessageList.css";

const MessageListItem = ({ message, markAsViewed, viewedMessages }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalWindow = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const timestamp = new Date(message.text.timestamp);
  const hour = timestamp.getHours().toString().padStart(2, '0');
  const minute = timestamp.getMinutes().toString().padStart(2, '0');
  const day = timestamp.getDate();
  const month = timestamp.getMonth() + 1;
  const year = timestamp.getFullYear();
  const time = `${hour}:${minute}`;

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <li
      style={{
        listStyleType: "none",
        marginBottom: "10px",
        borderBottom: "1px solid",
      }}
    >
      {!message.text ? (
        <>
          {message.userName} -
          {day === new Date().getDate() &&
          month === new Date().getMonth() + 1 &&
          year === new Date().getFullYear()
            ? `today at ${time}`
            : day - 1 === new Date().getDate() &&
              month === new Date().getMonth() + 1 &&
              year === new Date().getFullYear()
            ? `yesterday at ${time}`
            : formattedDate}
          <br />
          {message.text.message}
          <br />
        </>
      ) : (
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderColor: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", 
            }}
            onClick={() => {
              openModalWindow();
              markAsViewed(message.id); 
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <span style={{ fontSize: "1.1em", marginRight: "5px" }}>
                {message.userName} -
              </span>
              <span style={{ fontSize: "0.85em", color: "lightgrey" }}>
                {day === new Date().getDate() &&
                month === new Date().getMonth() + 1 &&
                year === new Date().getFullYear()
                  ? ` today at ${time}`
                  : day - 1 === new Date().getDate() &&
                    month === new Date().getMonth() + 1 &&
                    year === new Date().getFullYear()
                  ? `yesterday at ${time}`
                  : formattedDate}
              </span>
            </div>
            <span style={{ marginRight: "70px", fontSize: "1.1em" }}>
              {message.text.message}
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  color: viewedMessages.includes(message.id) ? 'red' : 'green',
                  fontSize: "0.9em",
                  marginRight: "5px",
                }}
              />
              <span style={{ fontSize: "1em" }}>{viewedMessages.includes(message.id) ? 'Old News' : 'New Yeet'}</span>
            </div>
          </button>
          <CustomModal
            isOpen={openModal}
            closeModal={() => {
              closeModal();
              markAsViewed(message.id);
            }}
          />
        </div>
      )}
    </li>
  );
};

const MessageList = ({ messages, style }) => {
  const [viewedMessages, setViewedMessages] = useState([]);

  useEffect(() => {
    const storedViewedMessages = sessionStorage.getItem("viewedMessages");
    if (storedViewedMessages) {
      const parsedViewedMessages = JSON.parse(storedViewedMessages);
      if (parsedViewedMessages.length > 0) {
        setViewedMessages(parsedViewedMessages);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("viewedMessages", JSON.stringify(viewedMessages));
  }, [viewedMessages]);

  const markAsViewed = (messageId) => {
    if (!viewedMessages.includes(messageId)) {
      setViewedMessages((prevViewedMessages) => [
        ...prevViewedMessages,
        messageId,
      ]);
    }
  };

  const sortedMessages = messages.sort((a, b) => {
    const timeStampA = new Date(a.text.timestamp);
    const timeStampB = new Date(b.text.timestamp);
    return timeStampB - timeStampA;
  });

  return (
    <ul style={style}>
      {messages && messages.length > 0 ? (
        sortedMessages.map((message, index) => (
          <MessageListItem
            key={index}
            message={message}
            markAsViewed={markAsViewed}
            viewedMessages={viewedMessages} 
          />
        ))
      ) : (
        <div class="inline-container">
          <div className="move">
            <p className="roll">#</p>
          </div>
          <p className="emptyText">Bit quiet, eh?</p>
        </div>
      )}
    </ul>
  );
};

export default MessageList;
