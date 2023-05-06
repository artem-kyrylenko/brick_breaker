import React, {useEffect, useState} from 'react';
import './Racket.scss';

export const Racket = () => {
  const [elementPosition, setElementPosition] = useState(50);

  const keyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft': {
        setElementPosition(elementPosition - 10)
        break
      }
      case 'ArrowRight': {
        setElementPosition(elementPosition + 10)
        break
      }
      default:
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return ()=> {
      document.removeEventListener('keydown', keyPress);
    }
  }, [elementPosition]);

  return (
    <div
      className="racket"
      style={{left: elementPosition + 'px'}}
    >

    </div>
  );
}