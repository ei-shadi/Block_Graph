import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Block = ({ block, onMove, onAddChild }) => {
  const draggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 5;

  const [isDraggingVisual, setIsDraggingVisual] = useState(false); // for cursor feedback

  const handleMouseDown = (e) => {
    // Ignore clicks on the button
    if (e.target.tagName === "BUTTON" || e.target.closest("button")) return;

    startPosRef.current = { x: e.clientX, y: e.clientY };
    offsetRef.current = { x: e.clientX - block.x, y: e.clientY - block.y };

    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - startPosRef.current.x;
      const dy = moveEvent.clientY - startPosRef.current.y;

      if (!draggingRef.current && Math.sqrt(dx * dx + dy * dy) > DRAG_THRESHOLD) {
        draggingRef.current = true;
        setIsDraggingVisual(true); // change cursor
      }

      if (draggingRef.current) {
        onMove(
          block.id,
          moveEvent.clientX - offsetRef.current.x,
          moveEvent.clientY - offsetRef.current.y
        );
      }
    };

    const handleMouseUp = () => {
      draggingRef.current = false;
      setIsDraggingVisual(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={`absolute bg-orange-500 text-white p-4 rounded shadow-md select-none ${
        isDraggingVisual ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ left: block.x, top: block.y, width: 120, height: 120 }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="text-xl font-bold">{block.id}</h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddChild(block.id);
          }}
          className="bg-white text-black rounded py-2 px-6 mt-2 hover:bg-black hover:text-white transition"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Block;
