function Match ({ setShowMatch, oneMatch }){
    return(
        <div className="p-5 overflow-hidden w-full h-full animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border  backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <img onClick={() => setShowMatch(false)} src="../../x.webp" alt="X" className="absolute right-5 w-1/56"></img>
            <img src={`../../Agents/${oneMatch.character}_icon.webp`} alt={oneMatch.character} className="w-1/10"></img>
            <h1>{oneMatch.map}</h1>
        </div>
    )
}
export default Match;