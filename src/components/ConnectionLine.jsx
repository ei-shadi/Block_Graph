const ConnectionLine = ({ parent, child, blockWidth = 120, blockHeight = 120 }) => {
  const x1 = parent.x + blockWidth / 2;
  const y1 = parent.y + blockHeight / 2;

  const x2 = child.x + blockWidth / 2;
  const y2 = child.y + blockHeight / 2;

  // Middle point for the L shape
  const midX = x1;
  const midY = y2;

  const path = `M${x1},${y1} L${midX},${midY} L${x2},${y2}`;

  return (
    <path
      d={path}
      stroke="#000"
      strokeWidth="2"
      strokeDasharray="5,5"
      fill="transparent"
    />
  );
};

export default ConnectionLine;
