import React from 'react';
import Styles from './app.module.scss';
import FirmFacts from '../../components/Firm-Facts';

function App() {
  return (
    <div className={Styles.app}>
      <FirmFacts />
    </div>
  );
}

export default App;
