import React, { useState, useRef, useEffect } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPoints, reducePoints } from '../actions/actions';
import Audio from "./assets/well-done.mp3"
const formatTime = (timeInSeconds) => {
  if (timeInSeconds === null) {
    return '--:--:--';
  }
  const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function Timer() {
  const [time, setTime] = useState(localStorage.getItem('remainingTime') ? localStorage.getItem('remainingTime') : 0);
  const [overTime, setOverTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [duration, setDuration] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef(null);
  const overTimeRef = useRef(null);
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('remainingTime', time);
    return () => {
      if (running) {
        localStorage.setItem('remainingTime', time);
      } else {
        localStorage.removeItem('remainingTime');
      }
    }
  }, [time])
  useEffect(() => {
    let start = localStorage.getItem('start')
    if (localStorage.getItem('remainingTime')) {
      if (start === "true") {
        handleStart()
      }
    }
    return () => { clearInterval(intervalRef.current); }
  }, [])
  useEffect(() => {
    if (time < 0) {
      clearInterval(intervalRef.current);
      dispatch(addPoints(1));
      setTime(0);
      setOpenCompleteModal(true);
      audioRef.current.play();
    }
  }, [time])
  const handleStart = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        if (time > 0) {
          setTime(prevTime => prevTime - 1);
        }
      }, 1000);
    }
    localStorage.setItem('start', true);
  };

  const handleStop = () => {
    setRunning(false);
    localStorage.setItem('start', false);
    clearInterval(intervalRef.current);
    if (time < 0) {
      setTime(0);
    }
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleDurationChange = (event) => {
    const { name, value } = event.target;
    setDuration(prevDuration => ({ ...prevDuration, [name]: value }));
  };

  const handleOpenModal = () => {
    setRunning(false)
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSetDuration = () => {
    const { hours, minutes, seconds } = duration;
    setTime(parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds));
    setOpenModal(false);
  };
  const handleCloseCompleteModal = () => {
    setOverTime(0);
    setOpenCompleteModal(false);
    clearInterval(overTimeRef.current);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

  }

  const handleOverTime = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    overTimeRef.current = setInterval(() => {
      setOverTime(prevTime => prevTime + 1);
    }, 1000);
  }
  return (
    <div >
      <div>
        <Typography variant="h4" component="div" sx={{ textAlign: 'right' }}>
          {formatTime(time)}
        </Typography>
      </div>
      <div style={{ textAlign: "center", border: "2px solid pink" }}>
        <Button variant="contained" onClick={handleOpenModal} sx={{ margin: "10px" }} >Enter time to start</Button>
        {/* <Checkbox checked={openModal} onChange={handleOpenModal} color="primary" />enter time */}
        <Typography sx={{ margin: "10px" }}>Set Timer Duration</Typography>
        <Dialog open={openModal} onClose={handleCloseModal} sx={{ height: "70vh" }} >
          <DialogTitle sx={{ m: 0, p: 2 }}>Set Timer Duration</DialogTitle>
          <DialogContent sx={{ padding: "20px", margin: "20px" }}>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <TextField label="Hours" name="hours" type="number" value={duration.hours} onChange={handleDurationChange} color="secondary" focused sx={{ m: 0, padding: "-30px" }} />
              <TextField label="Minutes" name="minutes" type="number" value={duration.minutes} onChange={handleDurationChange} color="secondary" focused sx={{ m: 0, padding: "-30px" }} />
              <TextField label="Seconds" name="seconds" type="number" value={duration.seconds} onChange={handleDurationChange} color="secondary" focused sx={{ m: 0, padding: "-30px" }} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button onClick={handleSetDuration}>Set Duration</Button>
          </DialogActions>
        </Dialog>
        <audio ref={audioRef} src={Audio} />
        <Dialog open={openCompleteModal} onClose={handleCloseCompleteModal} sx={{ height: "70vh" }} >
          <DialogTitle sx={{ m: 0, p: 2 }}>Work Time Completed!</DialogTitle>
          <DialogContent sx={{ padding: "20px", margin: "20px" }}>
            <Typography variant="h5" component="div" style={{ display: "flex", paddingTop: "20px" }}>
              Wanna Continue?
            </Typography>
            <Typography variant="h4" component="div" sx={{ textAlign: 'center', color: "red" }}>
              {formatTime(overTime)}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCompleteModal}>Cancel</Button>
            <Button onClick={handleOverTime} disabled={overTime > 0}>continue</Button>
          </DialogActions>
        </Dialog>
        <Button variant="contained" onClick={handleStart} disabled={!time} sx={{ margin: "10px" }}>Start</Button>
        <Button variant="contained" onClick={handleStop} disabled={!time} sx={{ margin: "10px" }} >Stop</Button>
        <Button variant="contained" onClick={handleReset} disabled={!time} sx={{ margin: "10px" }} >Reset</Button>
      </div>
    </div>
  );
}

export default Timer;
