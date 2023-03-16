import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("v");
  return (
    <div className="p-3">
      <iframe
        width="900"
        height="500"
        src={ "https://www.youtube.com/embed/"+vidId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <p className="p-2 text-2xl font-bold">Comments:</p>
        <CommentsContainer/>
      </div>
    </div>
  );
};

export default WatchPage;
