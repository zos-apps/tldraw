

interface TldrawProps {
  onClose: () => void;
}

const Tldraw: React.FC<TldrawProps> = ({ onClose: _onClose }) => {
  return (
    <div className="h-full flex flex-col bg-white text-gray-900">
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
