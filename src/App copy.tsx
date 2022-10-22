import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/tauri'
import './App.css'

import { WebviewWindow } from '@tauri-apps/api/window'
import { Link } from 'react-router-dom'

function App () {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  async function greet () {
    setGreetMsg(await invoke('greet', { name }))
  }

  async function screenshot () {
    await invoke('screenshot', { x, y, width, height })
  }

  function newWindow () {
    const webview = new WebviewWindow('theUniqueLabel', {
      url: '/test',
      alwaysOnTop: true,
      transparent: true,
      maximized: true,
      decorations: false,
      resizable: false
    })

    webview.once('tauri://created', () => {
      console.log('It worked')
    })

    webview.once('tauri://error', (e) => {
      console.error(e)
    })
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noreferrer">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>
        Click on the Tauri, Vite, and React logos to learn more about each
        framework.
      </p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={async () => await greet()}>
            Greet
          </button>
        </div>
      </div>
      <div className="row">
        <input type="number" value={x} onChange={(e) => setX(Number(e.currentTarget.value))}/>
        <input type="number" value={y} onChange={(e) => setY(Number(e.currentTarget.value))}/>
      </div>
      <div className="row">
        <input type="number" value={width} onChange={(e) => setWidth(Number(e.currentTarget.value))}/>
        <input type="number" value={height} onChange={(e) => setHeight(Number(e.currentTarget.value))}/>
      </div>
      <div className="row">
        <button type="button" onClick={async () => await screenshot()}>Test</button>
      </div>
      <div className="row">
        <button onClick={() => newWindow()}>New Window</button>
      </div>
      <div className="row">
        <Link to={'/test'}>To Test</Link>
      </div>
      <p>{greetMsg}</p>
    </div>
  )
}

export default App
