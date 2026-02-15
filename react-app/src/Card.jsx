
function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="text-3xl flex flex-col text-white max-w-md my-auto shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] p-19 rounded-2xl">
        <h1>Loading...</h1>   
      </div>
    ):(

      <div className="flex flex-col text-white max-w-md my-auto shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] p-19 rounded-2xl">
        <h1 className="text-4xl text-text">Current Rank:</h1>
        <p className="mb-4">{rank}</p>
        <h1 className="text-4xl text-text">Peak:</h1>
        <p className='mb-4'>{peak}</p>
        <h1 className="text-4xl text-text">In:</h1>
        <p className="">{peak_szn}</p>
    </div>
    )}
    </>
  )
}
export default Card;