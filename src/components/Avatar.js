import React from "react";
import avatar from "../images/avatar.jpg";
export default function Avatar({hash}) {
  const url = `avatar ${hash}`
  return <img src={url} className="avatar" alt="avatar" />;
}
