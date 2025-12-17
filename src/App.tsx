import { NylasScheduling } from '@nylas/react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Nylas Scheduler</h1>
      <NylasScheduling configurationId="1d208806-40d9-4d40-a5bf-f39a54ed94f6" />
    </div>
  )
}

export default App
