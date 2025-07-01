import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-8">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all animate-spin" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold">Tauri + Vite + React + Tailwind + shadcn/ui</h1>
          <p className="text-muted-foreground">
            A production-ready starter template with the latest stable versions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Counter Demo</CardTitle>
              <CardDescription>
                Test the reactivity and state management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">{count}</div>
                <Button 
                  onClick={() => setCount((count) => count + 1)}
                  size="lg"
                >
                  Increment Count
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                onClick={() => setCount(0)}
                className="w-full"
              >
                Reset
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Latest stable versions integrated
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tauri</span>
                  <span className="text-muted-foreground">v2.0+</span>
                </div>
                <div className="flex justify-between">
                  <span>Vite</span>
                  <span className="text-muted-foreground">v7.0+</span>
                </div>
                <div className="flex justify-between">
                  <span>React</span>
                  <span className="text-muted-foreground">v19.1+</span>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS</span>
                  <span className="text-muted-foreground">v4.1+</span>
                </div>
                <div className="flex justify-between">
                  <span>shadcn/ui</span>
                  <span className="text-muted-foreground">Latest</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Development and build commands
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Development</h4>
                <code className="block bg-muted p-2 rounded text-sm">npm run tauri:dev</code>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Production Build</h4>
                <code className="block bg-muted p-2 rounded text-sm">npm run tauri:build</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
