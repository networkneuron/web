import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data';
import { ArrowLeft, User, MessageSquare, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import PortfolioCard from './PortfolioCard';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '0', 10);
  const item = portfolioItems.find(p => p.id === projectId);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [lastVolume, setLastVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!video.paused);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if(videoRef.current) {
        videoRef.current.volume = newVolume;
        videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (newMutedState) {
        setLastVolume(volume > 0 ? volume : 0.5);
        setVolume(0);
      } else {
        const newVolume = lastVolume > 0 ? lastVolume : 0.5;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
        const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressRef.current) {
      const { width } = progressRef.current.getBoundingClientRect();
      const clickX = e.nativeEvent.offsetX;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
    }
  };
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  
  useEffect(() => {
    const video = videoRef.current;
    if(video){
        // Mute video on mount for autoplay
        video.muted = true;
        setIsMuted(true);
        setVolume(0);
    }
  }, []);


  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <Link to="/" className="text-purple-400 hover:text-purple-300">
                Return to Homepage
            </Link>
        </div>
      </div>
    );
  }
  
  const relatedProjects = portfolioItems
    .filter(p => p.category === item.category && p.id !== item.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold">{item.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mt-2">{item.title}</h1>
        </div>
        
        <div className="mb-12">
          {item.videoUrl ? (
            <div 
              className="relative group max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-purple-900/20 overflow-hidden"
              onMouseEnter={() => setIsControlsVisible(true)}
              onMouseLeave={() => setIsControlsVisible(false)}
            >
              <video
                  ref={videoRef}
                  src={item.videoUrl}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full"
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
              />
              <div 
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${!isPlaying || isControlsVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                  <button onClick={togglePlay} className="text-white focus:outline-none">
                      {isPlaying ? <Pause size={64} className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" /> : <Play size={64} className="drop-shadow-lg" />}
                  </button>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isControlsVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 text-white">
                  <button onClick={togglePlay} className="focus:outline-none">
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>

                  <div ref={progressRef} onClick={handleSeek} className="w-full h-2 bg-white/20 rounded-full cursor-pointer flex items-center">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>

                  <div className="text-xs font-mono">
                    {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={toggleMute} className="focus:outline-none">
                      {isMuted || volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 accent-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-purple-900/20" 
            />
          )}
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-4">About the Project</h2>
                <p className="text-gray-400 leading-relaxed">{item.detailedDescription}</p>
            </div>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2"><User className="w-5 h-5 text-purple-400"/>Client</h3>
                    <p className="text-gray-400">{item.client}</p>
                </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2"><MessageSquare className="w-5 h-5 text-purple-400"/>Testimonial</h3>
                    <blockquote className="text-gray-400 italic border-l-2 border-purple-500 pl-4">
                        "{item.testimonial.quote}"
                        <cite className="block not-italic mt-2 font-semibold text-gray-300">- {item.testimonial.author}</cite>
                    </blockquote>
                </div>
            </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gray-800">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Related Work</h2>
              <p className="text-lg text-gray-400 mt-2">Explore more projects in the {item.category} category.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((relatedItem) => (
                <PortfolioCard key={relatedItem.id} item={relatedItem} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default PortfolioDetail;