import { useState, useRef, useEffect } from "react";
import songs from "./data";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import "./App.css";

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(songs[0].src));

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongChange = (index) => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[index].src);
    audioRef.current.play();

    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const next = (currentSongIndex + 1) % songs.length;
    handleSongChange(next);
  };

  const handlePrev = () => {
    const prev = (currentSongIndex - 1 + songs.length) % songs.length;
    handleSongChange(prev);
  };

  return (
    <div className="app">
      <h1>🎧 Music Player</h1>

      <Player
        song={songs[currentSongIndex]}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleNext={handleNext}
        handlePrev={handlePrev}
        audioRef={audioRef}
      />

      <Playlist
        songs={songs}
        currentSongIndex={currentSongIndex}
        handleSongChange={handleSongChange}
      />
    </div>
  );
};

export default App;