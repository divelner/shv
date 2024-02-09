import { useEffect } from 'react';

import Grid from './components/grid/Grid';
import Scheduler from './components/scheduler/Scheduler';

import './App.css'

function App() {
  useEffect(() => {
    setTimeout(() => {
      const table = document.querySelector('#root > table.grid-table');

      if (table) {
        if (table.getBoundingClientRect().top !== 0) {
          window.scrollTo(0, table.getBoundingClientRect().top);
        }
      }
    }, 2500);
  }, []);

  return (
    <>
      <Scheduler></Scheduler>
      <Grid></Grid>
    </>
  )
}

export default App
