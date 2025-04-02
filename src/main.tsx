import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './Classworks/19-03'
// import App from './Home works/31-03'
import WeatherApp from './Classworks/01-04'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App></App> */}
    {/* <App></App> */}
    <WeatherApp></WeatherApp>
  </StrictMode>,
)
