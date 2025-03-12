// src/App.jsx

// ------------------------------------------------------------------------ Imports

import './App.css';
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx";

// ------------------------------------------------------------------------ Constants

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

// ------------------------------------------------------------------------ App

const App = () => {
  console.log('made it to here');
  return (
    <>
      <h1>Weather App</h1>
      <section>
        {weatherForecasts.map((forecast, index) => (
          < WeatherForecast key={index} { ...forecast } />
        ))}
      </section>
    </>
  );
};

export default App;

// ------------------------------------------------------------------------ Code Graveyard

// key={index}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
