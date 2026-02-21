

function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="animate-zoom text-3xl flex flex-col text-white shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] p-8 rounded-2xl text-center">
        <h1 className="animate-pulse">Loading...</h1>   
      </div>
    ):(

      <div className="animate-fade-in-up flex flex-col text-white shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl font-bold text-center p-8 h-full">
        <h1 className="text-1xl md:text-4xl lg:text-5xl mb-2 text-text">Current Rank:</h1>
        <div className="flex justify-center">
          <img src={`../../ranks/${rank}.png`} className="w-1/6 mx-auto my-auto"></img>
          <h1 className="mx-auto my-auto text-2xl">{rank}</h1>
        </div>
        <h1 className="text-1xl md:text-4xl lg:text-5xl mb-2 mt-4 text-text">Peak:</h1>
        <div className="flex justify-center">
          <img src={`../../ranks/${peak}.png`} className="w-1/6 mx-auto my-auto"></img>
          <h1 className="mx-auto my-auto text-2xl">{peak}</h1>
        </div>
        <h1 className="text-1xl md:text-4xl lg:text-5xl mb-2 mt-4 text-text">In:</h1>
        <h1 className="text-2xl">{peak_szn}</h1>
    </div>
    )}
    </>
  )
}
export default Card;