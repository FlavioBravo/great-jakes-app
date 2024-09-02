import React from 'react';
import Styles from './app.module.scss';
import FirmFactsTemplate from '../../components/templates/Firm-Facts-Template';

function App() {
  return (
    <main className={Styles.app}>
      <FirmFactsTemplate />
    </main>
  );
}

export default App;
