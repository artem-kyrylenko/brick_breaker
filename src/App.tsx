import { FC } from 'react';
import './App.scss';
import { Wrapper } from './components/Wrapper';

export const App: FC = () => {
  return (
    <div className="body">
      <Wrapper />
    </div>
  );
}
