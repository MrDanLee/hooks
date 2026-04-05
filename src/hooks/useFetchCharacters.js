import { useEffect, useState } from 'react';
const useFetchCharacters = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCharacter()
  }, [url])

  return data
}

export default useFetchCharacters;