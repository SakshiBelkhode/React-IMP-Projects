import { useState, useEffect } from "react";

const Player = ({
  song,
  isPlaying,
  handlePlayPause,
  handleNext,
  handlePrev,
  audioRef,
}) => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState("0:00 / 0:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const audio = audioRef.current;

      if (audio.duration) {
        const progressPercent =
          (audio.currentTime / audio.duration) * 100;

        setProgress(progressPercent);

        const formatTime = (t) =>
          `${Math.floor(t / 60)}:${("0" + Math.floor(t % 60)).slice(-2)}`;

        setTime(
          `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`
        );
      }
    }, 500);

    return () => clearInterval(interval);
  }, [audioRef]);

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
  };

  const handleVolume = (e) => {
    const value = e.target.value;
    setVolume(value);
    audioRef.current.volume = value;
  };

  return (
    <div className="player">
      <h2>{song.title}</h2>
      <p>{song.artist}</p>

      <div className="controls">
        <button onClick={handlePrev}>⏮</button>

        <button onClick={handlePlayPause}>
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </button>

        <button onClick={handleNext}>⏭</button>
      </div>

      <p>{time}</p>

      {/* Progress Bar */}
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
      />

      {/* Volume Control */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
      />
    </div>
  );
};

export default Player;