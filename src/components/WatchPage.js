import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("v");
  return (
    <div className="p-3 w-full">
    <div className="flex w-full">
    <div>
      <iframe
        width="900"
        height="500"
        src={ "https://www.youtube.com/embed/"+vidId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <LiveChatContainer />
      </div>
      <div>
        <p className="p-2 text-2xl font-bold">Comments:</p>
        <CommentsContainer/>
      </div>
    </div>
  );
};

export default WatchPage;
