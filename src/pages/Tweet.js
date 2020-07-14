import React from "react";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import Author from "../components/Author";
import Message from "../components/Message";
import Time from "../components/Time";
import ReplyButton from "../components/ReplyButton";
import RetweetButton from "../components/RetweetButton";
import LikeButton from "../components/LikeButton";
import MoreOptionsButton from "../components/MoreOptionsButton";
export default function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gr}/>
      <div className="content">
        <Author /><Time />
        <Message />
        <div className='buttons'>
            <Link to='/'><ReplyButton /></Link>
            <RetweetButton/>
            <LikeButton />
            <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
 const testTweet = {
     message: "Something about cats.",
     gravatar: "xyz",
     Author: {
         handle: "catperson",
         name: "IAMA Cat Person"
     },
     likes:2,
     retweets:0,
     timestamp:"2020-07-30 21:24:37"
 }
