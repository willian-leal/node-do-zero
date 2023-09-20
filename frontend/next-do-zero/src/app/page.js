'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://node-do-zero-ds6u.onrender.com/videos')
      .then((response) => {
        setData(response.data)
        console.log('Conexão bem sucessida')
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do backend:', error)
      })
  }, [])
  return (
    <>
      <h1>Dados do backend</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.duration}</li>
          </div>
        ))}
      </ul>
    </>
  )
}
