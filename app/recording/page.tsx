// app/recording/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

export default function RecordingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [timer, setTimer] = useState('00:00');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout>();

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setIsRecording(false);
        
        // Stop alle tracks in de stream
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);

      // Start timer
      const startTime = Date.now();
      timerIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        setTimer(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Error accessing microphone. Please ensure microphone permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      setTimer('00:00');
    }
  };

  const downloadRecording = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = 'soundrank-recording.wav';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Audio Recording Studio</h1>
          <p className="text-gray-400">Professional quality audio recording interface</p>
        </div>

        {/* Recording Interface */}
        <div className="bg-gray-800/50 rounded-xl p-8 shadow-xl">
          {/* Timer */}
          <div className="text-center mb-8">
            <div className="text-4xl font-mono">
              {isRecording && (
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"/>
              )}
              {timer}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={startRecording}
              disabled={isRecording}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2
                ${isRecording 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6" fill="currentColor"/>
              </svg>
              Start Recording
            </button>

            <button
              onClick={stopRecording}
              disabled={!isRecording}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2
                ${!isRecording 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="14" height="14" x="5" y="5" strokeWidth="2"/>
              </svg>
              Stop Recording
            </button>

            <button
              onClick={downloadRecording}
              disabled={!audioUrl}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2
                ${!audioUrl 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download Recording
            </button>
          </div>

          {/* Enhanced Audio Player */}
          {audioUrl && (
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 text-center">Playback</h3>
              <div className="audio-player-wrapper">
                <audio 
                  controls 
                  src={audioUrl}
                  className="w-full custom-audio-player"
                />
              </div>
              <style jsx global>{`
                .custom-audio-player {
                  --primary-color: #3B82F6;
                  --secondary-color: #1E40AF;
                }

                audio {
                  width: 100%;
                  height: 40px;
                }

                audio::-webkit-media-controls-panel {
                  background-color: #1F2937;
                }

                audio::-webkit-media-controls-timeline {
                  background-color: #374151;
                  border-radius: 25px;
                  margin: 0 15px;
                }

                audio::-webkit-media-controls-current-time-display,
                audio::-webkit-media-controls-time-remaining-display {
                  color: white;
                }

                audio::-webkit-media-controls-play-button,
                audio::-webkit-media-controls-mute-button {
                  background-color: var(--primary-color);
                  border-radius: 50%;
                  color: white;
                }

                audio::-webkit-media-controls-volume-slider {
                  background-color: #374151;
                  border-radius: 25px;
                  padding-left: 8px;
                  padding-right: 8px;
                }

                @-moz-document url-prefix() {
                  audio {
                    background-color: #1F2937;
                    border-radius: 8px;
                  }
                }
              `}</style>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-800/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Recording Instructions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Ensure your microphone is properly connected</li>
            <li>Click "Start Recording" to begin</li>
            <li>Monitor the timer to track your recording duration</li>
            <li>Click "Stop Recording" when finished</li>
            <li>Preview your recording using the audio player</li>
            <li>Download your recording if satisfied</li>
          </ul>
        </div>
      </div>
    </div>
  );
}