import { Button } from "@mui/material";
import { React, useState, useEffect } from "react";

import Player from "../../Player";

import styles from './WatchPage.module.scss';

// const ws = new WebSocket("ws://95.163.235.66:80/api/room/");

// ws.onopen = () => {
//   console.log('hello world')
// };

// ws.onmessage = (event) => {
// }


export default function WatchPage() {

  useScript("./playerjs.js");

  return (
    <div className={styles.player}>
      
      <div className={styles.video}>
        <div id="player"></div>
        <Player id="player" file="https://plrjs.com/sample.mp4" />
      </div>
      
      <div className={styles.controls}>
        <Button onClick={startPlayer} variant="contained">Начать</Button>
        <Button onClick={stopPlayer} variant="contained">Остановить</Button>
        <Button onClick={syncPlayer} variant="contained">Синхронизировать</Button>
        <Button onClick={PlayNewVideo} variant="contained">Начать новое видео</Button>
      </div>
    </div>
  )
}

function startPlayer(){
  alert('Start')
}

function stopPlayer(){
  alert('Stop')
}

function syncPlayer(){
  alert('Sync')
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