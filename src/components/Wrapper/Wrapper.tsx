import { FC } from 'react';
import './Wrapper.scss';
import { Racket } from '../Racket';
import { BrickList } from '../BrickList';
import { Ball } from '../Ball/Ball';

export const Wrapper: FC = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <BrickList />
        <Ball />
        <Racket />
      </div>
    </div>
  );
}