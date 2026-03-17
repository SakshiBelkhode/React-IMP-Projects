const Playlist = ({
  songs,
  currentSongIndex,
  handleSongChange,
}) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>

      {songs.map((song, index) => (
        <div
          key={song.id}
          className={`song ${
            index === currentSongIndex ? "active" : ""
          }`}
          onClick={() => handleSongChange(index)}
        >
          {song.title} - {song.artist}
        </div>
      ))}
    </div>
  );
};

export default Playlist;