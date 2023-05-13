import { FC, useState, useEffect } from 'react';

export const Ball: FC = () => {
  const [ballPosition, setBallPosition] = useState({ x: 320, y: 735 });
  const [ballVelocity, setBallVelocity] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      const x = ballPosition.x + ballVelocity.x;

      
    }, 50)
  }, []);

  return (
    <div
        style={{
          position: 'absolute',
          top: ballPosition.y + 'px',
          left: ballPosition.x + 'px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      ></div>
  );
}