import React from 'react';

interface TldrawProps {
  onClose: () => void;
}

const Tldraw: React.FC<TldrawProps> = ({ onClose }) => {
  return (
    <div className="h-full w-full bg-white">
      <iframe
        src="https://www.tldraw.com/"
        className="w-full h-full border-0"
        allow="clipboard-read; clipboard-write"
        title="tldraw"
      />
    </div>
  );
};

export default Tldraw;
