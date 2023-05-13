import { FC, useMemo } from 'react';
import '../Brick/Brick.scss';
import '../BrickList/BrickList.scss';
import { Brick } from '../Brick/Brick';

export const BrickList: FC = () => {
  const divs = useMemo(() => {
    const divs: JSX.Element[] = [];
    for (let i = 1; i <= 80; i++) {
      divs.push(<Brick />);
    }
    return divs;
  }, []);

  const rows: JSX.Element[][] = [];
  for (let i = 0; i < 10; i++) {
    rows.push(divs.slice(i * 10, (i + 1) * 10));
  }

  return (
    <div className='brick__list'>
      {rows.map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {row}
        </div>
      ))}
    </div>
  );
}