import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Text from './Exersice'
// import ToDoList from './Exersice'
// import Counter from './Exersice'
// import ColorSwitcher from './Exersice'
import App from './Homework'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Text /> */}
    {/* <ToDoList /> */}
    {/* <Counter /> */}
    {/* <ColorSwitcher /> */}
    <App/>
  </StrictMode>,
)
