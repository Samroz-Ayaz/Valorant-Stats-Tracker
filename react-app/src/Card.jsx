
function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="text-2xl bg-background p-17 rounded-2xl">
        <h1>Loading...</h1>   
      </div>
    ): (
      <div className="bg-background p-17 rounded-2xl">
        <h1 className="text-2xl">Current Rank:</h1>
        <h2 className="">{rank}</h2>
        <h2 className="text-2xl">Peak:</h2>
        <p className=''>{peak}</p>
        <h2 className="text-2xl">In:</h2>
        <p className="">{peak_szn}</p>
    </div>
    )}
    </>
  )
}
export default Card;