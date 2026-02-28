function Match ({ setShowMatch, oneMatch }){
    return(
        <div className="p-3 overflow-hidden w-full h-full animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border  backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <h1 onClick={() => setShowMatch(false)} className="absolute right-3">X</h1>
            <h1>{oneMatch.map}</h1>
        </div>
    )
}
export default Match;