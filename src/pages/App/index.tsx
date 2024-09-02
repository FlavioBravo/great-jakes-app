import React from 'react';
import Styles from './app.module.scss';
import FirmFactsTemplate from '../../components/templates/Firm-Facts-Template';

function App() {
  return (
    <div className={Styles.app}>
      <FirmFactsTemplate />
    </div>
  );
}

export default App;
