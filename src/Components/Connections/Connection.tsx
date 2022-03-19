interface ConnectionProps {
  fromVector: [number, number];
  toVector: [number, number];
}

export const Connection = ({ fromVector, toVector }: ConnectionProps) => {
  return (
    <line
      x1={fromVector[0]}
      x2={toVector[0]}
      y1={fromVector[1]}
      y2={toVector[1]}
      stroke="black"
    ></line>
  );
};
