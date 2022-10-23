import { Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
// import { useState } from 'react'
// import { invoke } from '@tauri-apps/api/tauri'

// import { WebviewWindow } from '@tauri-apps/api/window'

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

  // function newWindow () {
  //   const webview = new WebviewWindow('theUniqueLabel', {
  //     url: '/test',
  //     alwaysOnTop: true,
  //     transparent: true,
  //     maximized: true,
  //     decorations: false,
  //     resizable: false
  //   })

  //   webview.once('tauri://created', () => {
  //     console.log('It worked')
  //   })

  //   webview.once('tauri://error', (e) => {
  //     console.error(e)
  //   })
  // }

  return (
    <Center h="100%">
      {/* <Button size="lg" onClick={() => alert('WIP')}>Take Screenshot</Button> */}
      <Link to={'/panel'}>
        <Button size="lg">Go to Panel</Button>
      </Link>
    </Center>
  )
}

export default App
