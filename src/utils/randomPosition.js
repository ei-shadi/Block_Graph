

const randomPosition = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 120)); // 120px block width buffer
  const y = Math.floor(Math.random() * (window.innerHeight - 120));
  return { x, y };
};

export default randomPosition;
