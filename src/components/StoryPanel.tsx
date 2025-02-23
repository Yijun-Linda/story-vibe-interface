
import { useEffect, useState } from 'react';
import { Mic, VolumeX, Volume2, ZoomIn, Check, X } from 'lucide-react';

export const StoryPanel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex">
        {/* Left Panel - Story Illustration */}
        <div className="w-1/3 border-r border-story-border p-4 bg-story-panel animate-fade-in">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/fd6f955d-5db3-4df6-8cac-947e520b1910.png"
              alt="Story Illustration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Panel - Story Text */}
        <div className="w-2/3 bg-story-panel p-6 relative animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src="/lovable-uploads/dbab2c62-292e-4efc-a68f-f5af200341ef.png"
                alt="Narrator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-story-text">故事朗读</h3>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ZoomIn className="w-5 h-5 text-story-text" />
            </button>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p className="text-story-text text-lg leading-relaxed">
              一天，大灰狼来了，它用力吹稻草房，稻草房很快就倒塌了。

              然后，大灰狼用拳头敲打木头房，用了一会儿，木头房也彻底倒塌了。

              两只小猪急忙逃进老三的砖房，求老三保护它们免受大灰狼的袭击。
            </p>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="h-1 bg-gray-200 rounded-full mb-4">
              <div className="h-full w-1/3 bg-story-wave rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>0:00</span>
              <span>2:33</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Panel */}
      <div className="h-24 bg-story-control px-6 flex items-center justify-between animate-slide-up">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Mic className="w-6 h-6 text-white" />
          </button>

          {/* Audio Waves */}
          {isPlaying && (
            <div className="flex items-center h-8 space-x-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 h-full bg-story-wave animate-wave"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Check className="w-5 h-5 text-white" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden ml-4">
            <img 
              src="/lovable-uploads/10c1af27-392f-49c3-bf17-b2135bf7502f.png" 
              alt="Listening Child"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
