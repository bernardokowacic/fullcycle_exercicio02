import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [routes, setRoutes] = useState({data: []})

  const getRoutes = async () => {
    setRoutes(await axios.get("http://localhost:3000/routes"))
  }

  useEffect(() => {
    getRoutes()
  }, [])

  return (
    <ul>
      {routes.data.map((route) => (
        <li>{route.title}: de {route.startPosition.latitude}, {route.startPosition.longitude} até {route.endPosition.latitude}, {route.endPosition.longitude}</li>
      ))}
    </ul>
  );
}

export default App;
