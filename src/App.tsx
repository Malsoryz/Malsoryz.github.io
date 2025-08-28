import Clock from './components/clock.tsx'

export default function App() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
      <div className="title text-4xl">ALTERNITY</div>
      <Clock />
    </main>
  )
}
