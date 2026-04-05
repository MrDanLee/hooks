import { useEffect, useState } from 'react';
const useFetchCharacters = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setData(null)

    async function fetchCharacter() {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
        console.log(data)
      } catch (err) {
        console.error(`Fetch Error: ${err}`)
        setError(err.message || "Ha ocurrido algo inesperado")
      } finally {
        setLoading(false)
      }
    }
    if(url) {
      fetchCharacter()
    } 
  }, [url])

  return {data, error, loading}
}

export default useFetchCharacters;