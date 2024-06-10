// Library Imports
import { createLazyFileRoute } from '@tanstack/react-router'

// Components
import Hero from '../components/page-specific/home/Hero'

// CSS
import '../css/page-specific/home.scss'

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  return (
    <div className="home-page">
      <Hero />
    </div>
  )
}
