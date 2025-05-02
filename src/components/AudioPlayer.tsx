import { useEffect, useRef } from "react";
import music from "./music.mp3";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Soft volume
      audio.loop = true;
      audio.play().catch(() => {
        // Auto-play might be blocked; let user click to start
        console.log("Autoplay blocked");
      });
    }
  }, []);

  return <audio ref={audioRef} src={music} />;
};

export default AudioPlayer;
