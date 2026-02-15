
function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="text-3xl">
        <h1>Loading...</h1>   
      </div>
    ):(

      <div className="show flex flex-col text-white max-w-md my-auto shadow-[0_0_80px_1px_#111823] bg-background p-19 rounded-2xl">
        <h1 className="text-2xl">Current Rank:</h1>
        <p className="">{rank}</p>
        <h1 className="text-2xl">Peak:</h1>
        <p className=''>{peak}</p>
        <h1 className="text-2xl">In:</h1>
        <p className="">{peak_szn}</p>
    </div>
    )}
    </>
  )
}
export default Card;