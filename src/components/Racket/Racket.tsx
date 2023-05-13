import { FC, useEffect, useState} from 'react';
import './Racket.scss';

export const Racket: FC = () => {
  const [elementPosition, setElementPosition] = useState(260);

  const LEFT_BORDER = 0;
  const RIGHT_BORDER = 550;

  

  useEffect(() => {
    const keyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft': {
          if (elementPosition <= LEFT_BORDER) {
            setElementPosition(elementPosition - 0);
          } else {
            setElementPosition(elementPosition - 10);
          }
          break;
        }
        case 'ArrowRight': {
          if (elementPosition >= RIGHT_BORDER) {
            setElementPosition(elementPosition + 0)
          } else {
            setElementPosition(elementPosition + 10);
          }
          break;
        }
        default:
          return;
      }
    }

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