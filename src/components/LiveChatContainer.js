import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, generateRandomText } from "../utils/constants";
import LiveMessage from "./LiveMessage";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      //API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(10),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="h-[500px] border border-black p-2 ml-2 mb-1 w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((mes, index) => {
          return (
            <LiveMessage
              key={mes.message}
              name={mes.name}
              message={mes.message}
            />
          );
        })}
      </div>
      <form
        className="w-full flex ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name:"Ashish", message:userMessage}));
          setUserMessage("");
        }}
      >
        <input
          className="p-2 w-11/12 bg-slate-100 border border-gray-500"
          placeholder="Message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="p-2 ml-1 bg-green-200">Send</button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
