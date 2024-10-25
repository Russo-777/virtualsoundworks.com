import React, { useState } from 'react';
import { 
  Play, Pause, Mic, Music, Upload, Save, 
  Settings, Plus, Download, Radio, AudioLines 
} from 'lucide-react';

export default function MusicPlatform() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  
  // Sample projects data
  const projects = [
    { id: 1, name: "Summer Vibes", duration: "3:45", status: "In Progress", genre: "Pop" },
    { id: 2, name: "Night Drive", duration: "4:12", status: "Complete", genre: "Electronic" }
  ];

  return (
    <div className="bg-gray-900 p-8 min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center mb-8 bg-gray-800 p-4 rounded-lg">
        <AudioLines className="w-8 h-8 text-purple-500" />
        <span className="ml-2 text-xl font-bold">SoundTune AI</span>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Studio */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Studio</h3>
          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            {/* Waveform Visualization */}
            <div className="flex space-x-1 justify-center">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-purple-500"
                  style={{
                    height: `${Math.sin(i * 0.5) * 30 + 40}px`,
                    transition: 'height 0.2s ease'
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              className="p-3 rounded-full bg-purple-600 hover:bg-purple-700"
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-purple-600 hover:bg-purple-700">
              {currentTrack ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* AI Tools */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">AI Tools</h3>
          <div className="space-y-4">
            <button className="w-full p-4 bg-purple-900 rounded-lg flex items-center space-x-3 hover:bg-purple-800">
              <Music className="w-6 h-6" />
              <span>Auto-Tune</span>
            </button>
            <button className="w-full p-4 bg-purple-900 rounded-lg flex items-center space-x-3 hover:bg-purple-800">
              <AudioLines className="w-6 h-6" />
              <span>Beat Generation</span>
            </button>
          </div>
        </div>
        {/* Projects */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="p-3 bg-gray-900 rounded-lg border border-purple-800 hover:border-purple-600 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span>{project.name}</span>
                  <span className="text-xs bg-purple-900 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}