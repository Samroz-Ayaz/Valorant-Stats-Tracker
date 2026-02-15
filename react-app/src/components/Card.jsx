

function Card({rank, peak, peak_szn, loading}) {
  return(
    <>
    {loading ? (
      <div className="text-3xl flex flex-col text-white max-w-md my-auto shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] p-10 rounded-2xl">
        <h1 className="animate-pulse">Loading...</h1>   
      </div>
    ):(

      <div className="flex flex-col text-white max-w-md my-auto shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] p-5 rounded-2xl">
        <h1 className="text-4xl text-text mb-3">Current Rank:</h1>
        <div className="flex justify-center">
          <img src={`../../public/ranks/${rank}.png`} className="w-1/3 my-auto mx-auto"></img>
          <h1 className="my-auto mx-auto text-3xl">{rank}</h1>
        </div>
        <h1 className="text-4xl text-text mb-3">Peak:</h1>
        <div className="flex justify-center">
          <img src={`../../public/ranks/${rank}.png`} className="w-1/3 my-auto mx-auto"></img>
          <h1 className="my-auto mx-auto text-3xl">{peak}</h1>
        </div>
        <h1 className="text-4xl text-text mb-3">In:</h1>
        <h1 className="">{peak_szn}</h1>
    </div>
    )}
    </>
  )
}
export default Card;