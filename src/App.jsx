import { useState, useRef } from "react";
import Block from "./components/Block";
import ConnectionLine from "./components/ConnectionLine";
import randomPosition from "./utils/randomPosition";

const App = () => {
  const [blocks, setBlocks] = useState(() => [
    { id: 0, parentId: null, ...randomPosition() }, // root block
  ]);

  const nextIdRef = useRef(1); // next block ID

  // Move block handler
  const handleMove = (id, x, y) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, x, y } : b))
    );
  };

  // Add child block
  const handleAddChild = (parentId) => {
    const newBlock = {
      id: nextIdRef.current++,
      parentId,
      ...randomPosition(),
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-100">
      {/* SVG lines in the background */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {blocks
          .filter((b) => b.parentId !== null)
          .map((child) => {
            const parent = blocks.find((p) => p.id === child.parentId);
            if (!parent) return null;
            return (
              <ConnectionLine key={child.id} parent={parent} child={child} />
            );
          })}
      </svg>

      {/* Render all blocks */}
      {blocks.map((block) => (
        <Block
          key={block.id}
          block={block}
          onMove={handleMove}
          onAddChild={handleAddChild}
        />
      ))}
    </div>
  );
};

export default App;
