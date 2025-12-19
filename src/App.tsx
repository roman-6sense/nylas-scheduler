import { NylasScheduling } from '@nylas/react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <NylasScheduling configurationId="1d208806-40d9-4d40-a5bf-f39a54ed94f6" nylasBranding={false} enableUserFeedback={false} />
    </div>
  )
}

export default App
