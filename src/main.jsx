import React from 'react'
import ReactDOM from 'react-dom/client'
import '@material-design-icons/font'
import './global.scss'
import App from './App'
{/* <span class="material-icons">face</span>          <!-- Filled -->
<span class="material-icons-outlined">face</span> <!-- Outlined -->
<span class="material-icons-round">face</span>    <!-- Round -->
<span class="material-icons-sharp">face</span>    <!-- Sharp -->
<span class="material-icons-two-tone">face</span> <!-- Two Tone --> */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
