import { Button } from "@mui/material";
import { React, useState, useEffect } from "react";
import Player from "../../Player";

export default function WatchPage() {

  useScript("./playerjs.js");

  return (
    <div>
      <div id="player"></div>
      <Player id="player" file="https://plrjs.com/sample.mp4" />
      <Button onClick={PlayNewVideo}>Начать новое видео</Button>
    </div>
  )
}

function useScript(url) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}

function PlayNewVideo() {
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play", "https://youtu.be/WYHzQExWGGc");
  }
}