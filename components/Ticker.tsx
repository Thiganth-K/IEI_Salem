
import React from 'react';
import { MOCK_ANNOUNCEMENTS } from '../constants';

const Ticker: React.FC = () => {
  return (
    <div className="bg-iei-accent text-white py-1.5 overflow-hidden whitespace-nowrap relative flex items-center border-b border-white/20 shadow-sm">
      <div className="px-4 bg-iei-primary font-bold z-10 text-xs py-1 flex items-center h-full absolute left-0">
        LATEST UPDATES
      </div>
      <div className="inline-block animate-marquee pl-[120px] text-sm font-medium uppercase tracking-wider">
        {MOCK_ANNOUNCEMENTS.map((a, i) => (
          <span key={a.id} className="mx-8 flex items-center inline-block">
            {a.isImportant && <span className="w-2 h-2 bg-red-400 rounded-full mr-2 inline-block animate-pulse"></span>}
            {a.text} • <span className="opacity-70 ml-2">{a.date}</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
