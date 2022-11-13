import { Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
// import { useState } from 'react'
// import { invoke } from '@tauri-apps/api/tauri'

import { WINDOWLABEL_OVERLAY } from './contants'
import { WebviewWindow } from '@tauri-apps/api/window'

function App (): JSX.Element {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')

  // const [x, setX] = useState(0)
  // const [y, setY] = useState(0)
  // const [width, setWidth] = useState(100)
  // const [height, setHeight] = useState(100)

  // async function greet () {
  //   setGreetMsg(await invoke('greet', { name }))
  // }

  // async function screenshot () {
  //   await invoke('screenshot', { x, y, width, height })
  // }

  function newWindow (): void {
    const webview = new WebviewWindow(WINDOWLABEL_OVERLAY, {
      url: '/screenshot-overlay',
      // alwaysOnTop: true,
      transparent: true,
      maximized: true,
      // decorations: false,
      resizable: false
    })

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    webview.once('tauri://created', () => {
      console.log('It worked')
    })

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    webview.once('tauri://error', (e) => {
      console.error(e)
    })
  }

  return (
    <Center h="100%">
      {/* <Button size="lg" onClick={() => alert('WIP')}>Take Screenshot</Button> */}
      <Link to={'/panel'}>
        <Button size="lg">Go to Panel</Button>
      </Link>
      <Button onClick={() => newWindow()}>Start</Button>
    </Center>
  )
}

export default App
