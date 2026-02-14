
function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="">
        <h1>Loading...</h1>   
      </div>
    ): (
      <div className="">
        <h1>Current Rank:</h1>
        <h2 className="">{rank}</h2>
        <h2>Peak:</h2>
        <p className=''>{peak}</p>
        <h2>In:</h2>
        <p className="">{peak_szn}</p>
    </div>
    )}
    </>
  )
}
export default Card;