import { OneKSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Player from "../../Player";

import styles from './WatchPage.module.scss';

const ws = new WebSocket("ws://95.163.235.66:80/api/room/");

ws.onopen = () => {
  console.log('Connection with websocket is Success!')
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // console.log(data); 

  // on room creating 
  if (data.method == "create") {
    console.log(data.message);
    // progress = data.progress; 
    // isPauseClient = data.isPause; 
    // if (isPauseClient) { 
    //   player.api("pause"); 
    // } 
    // if (!isPauseClient) { 
    //   player.api("play", url + "[seek:" + progress + "]"); 
    // } 

    // userType.innerHTML += "owner"; 
  }

  if (data.method == "connection") {
    console.log(data.message);
    // progress = data.progress; 
    // isPauseClient = data.isPause; 
    // if (isPauseClient) { 
    //   player.api("pause"); 
    // } 
    // if (!isPauseClient) { 
    //   player.api("play", url + "[seek:" + progress + "]"); 
    // } 

    // userType.innerHTML += "user"; 
  }

  if (data.method == "watch") {
    // console.log(data.operation); 

    switch (data.operation) {
      case "start":
        console.log(data.operation, " ", data.progress);
        // progress = data.progress; 
        // isPauseClient = false; 
        // player.api("play", url + "[seek:" + progress + "]"); 
        break;
      case "stop":
        console.log(data.operation, " ", data.progress);
        // progress = data.progress; 
        // isPauseClient = true; 
        // // player.api('play', url+"[seek:"+progress+"]") 
        // player.api("pause"); 
        break;
      case "seek":
        console.log(data.operation, " ", data.progress);
        // progress = data.progress; 
        // player.api("seek", progress); 
        break;
      case "sync":
        console.log(data.operation, " ", data.progress);
        // progress = data.progress; 
        // isPauseClient = data.isPause; 
        // player.api("play", url + "[seek:" + progress + "]"); 
        break;
      case "changeVideo":
        console.log(data.operation, " ", data.progress);
      // player.api("file", data.videoSrc); 
      // progress = data.progress; 
      // player.api("seek", progress); 
      // break; 
    }
  }
  // progressSpan.innerHTML = data.progress; 
};

export default function WatchPage() {
  useScript("./playerjs.js");

  const roomIdFromURL = useParams().id;

  const roomObject = {};

  function isOwner(roomId) {
    if (!JSON.parse(localStorage.getItem('room'))) return false;

    if (JSON.parse(localStorage.getItem('room'))?.roomId === roomId) return true;

    else {
      return false;
    }
  }

  var wsSend = function (data) {
    if (!ws.readyState) {
      setTimeout(function () {
        wsSend(data);
      }, 100);
    } else {
      ws.send(data);
    }
  };


  async function createRoom() {
    try {
      // const roomObject = JSON.parse(localStorage.getItem('room'));
      // roomObject.method = 'create';
      // roomObject.isPause = true;
      // roomObject.progress = 0;

      const roomObject = {
        userId: JSON.parse(localStorage.getItem('userId')),
        username: 'Artem--Admin',
        roomId: roomIdFromURL,
        isPause: true,
        progress: 0,
        movieId: "100",
        method: 'create'
      }

      console.log(roomObject);


      wsSend(JSON.stringify(roomObject));

    } catch (error) {
      console.log('Error', error.message);
    }
  }

  function joinRoom() {
    try {
      const roomObject = {
        userId: JSON.parse(localStorage.getItem('userId')),
        username: JSON.parse(localStorage.getItem('username')) || "User" + (Math.random() * 100).toFixed().toString(),
        roomId: roomIdFromURL,
        isPause: true,
        progress: 0,
        method: 'connection',
      }

      wsSend(JSON.stringify(roomObject));

    }

    catch (error) {
      console.log(error.message);
    }
  }

    let clgIs = isOwner(roomIdFromURL);

  useEffect(() => {
    { clgIs ? createRoom() : joinRoom() }

    console.log(clgIs);
  }, [])




  return (
    <div className={styles.player}>

      <div className={styles.video}>
        <div id="player"></div>
        <Player id="player" file="https://youtu.be/WYHzQExWGGc" />
      </div>

      <div className={styles.controls}>
        <Button onClick={startPlayer} variant="contained">Начать</Button>
        <Button onClick={stopPlayer} variant="contained">Остановить</Button>
        <Button variant="contained">Синхронизировать</Button>
        <Button onClick={PlayNewVideo} variant="contained">Начать новое видео</Button>
        {
          JSON.parse(localStorage.getItem("room"))?.userId == localStorage.getItem("userId")
            ?
            <div>Вы админ</div>
            :
            <div>Всмысле</div>
        }

      </div>

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

function PlayerjsEvents(event, id, info) {
  if (event == "play") {
    alert(event);
  }
  if (event == "time") {
    console.log(event, id, info);
  }
}

function PlayNewVideo() {
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play", "https://youtu.be/WYHzQExWGGc");
  }
}

function startPlayer() {
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play");
  }
}


function stopPlayer() {
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("stop");
  }
}










{/* <iframe src="https://3.annacdn.cc/X9oh7OoQLGxr?kp_id=4374" width="1500" height="600" frameBorder="0" allowFullScreen></iframe>

<iframe src="https://3.annacdn.cc/X9oh7OoQLGxr/tv-series/4135?autoplay=1&episode=3&season=1&start_time=15&poster=https://i.pinimg.com/474x/77/8a/b1/778ab1e2fdfd430ec484edc66f6f4e2f.jpg" width="640" height="480" frameborder="0" allowfullscreen></iframe> */}