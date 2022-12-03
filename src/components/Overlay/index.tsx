import React, { useRef, useState } from 'react'
import { WINDOWLABEL_OVERLAY } from '../../contants'
import { WebviewWindow } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api/tauri'
interface Coords {
  x: number
  y: number
}

interface Dimensions {
  height: number
  width: number
}

interface CanvasControls {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
}

export default function Overlay (): JSX.Element {
  const canvasRef = useRef(null)

  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState<Dimensions>({ height: 0, width: 0 })

  function getCanvasControls (): CanvasControls {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    return {
      canvas,
      context
    }
  }

  function eraseCanvas (): void {
    const { canvas, context } = getCanvasControls()
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  function drawSelection (x: number, y: number, width: number, height: number): void {
    eraseCanvas()

    const { context } = getCanvasControls()

    context.beginPath()
    context.setLineDash([6])
    context.rect(coords.x, coords.y, width, height)
    context.stroke()
  }

  function handleMouseDown (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void {
    console.log(e.clientX, e.clientY)
    setCoords({ x: e.clientX, y: e.clientY })
  }

  function handleMouseUp (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void {
    eraseCanvas()

    invoke('screenshot', {
      x: coords.x,
      y: coords.y,
      width: dimensions.width,
      height: dimensions.height
    })
      .then(() => {
        const webview = new WebviewWindow(WINDOWLABEL_OVERLAY)

        webview.close()
          .then(() => console.log('overlay closed'))
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleMouseMove (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void {
    const x = e.clientX
    const y = e.clientY
    const width = x - coords.x
    const height = y - coords.y

    if (e.buttons === 1 && Math.abs(width) >= 5 && Math.abs(height) >= 5) {
      drawSelection(x, y, width, height)
      setDimensions({ height, width })
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  )
}
