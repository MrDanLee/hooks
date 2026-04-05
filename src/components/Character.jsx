import Loading from "./Loading";
const Character = ({ character, loading, error, name, img }) =>  {
  return (
  <>
      {loading && <Loading/>}
      {error && <p>{error}</p>}
      {character && 
          <>
            <div>{name}</div>
            <div><img src={img} alt={name} /></div>
          </>
      }
  </>
  )
}

export default Character;