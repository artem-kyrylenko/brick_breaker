import './Wrapper.scss';
import { Racket } from '../Racket';

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <Racket />
      </div>
    </div>
  );
}