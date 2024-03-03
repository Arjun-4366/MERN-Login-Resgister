
import { useLocation } from 'react-router-dom'

function Home() {
const location = useLocation()
const {name} = location.state
  return (
    <div>
      <h1>Welcome Home {name}</h1>
    </div>
  )
}
export default Home
