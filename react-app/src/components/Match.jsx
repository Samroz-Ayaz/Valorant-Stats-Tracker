function Match ({ setShowMatch, oneMatch }){
    return(
        <div className="p-5 overflow-hidden w-full h-full animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border  backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <img onClick={() => setShowMatch(false)} src="../../x.webp" alt="X" className="absolute right-5 w-1/56"></img>
            
            <div className="flex items-center">
                <img src={`../../Agents/${oneMatch.character}_icon.webp`} alt={oneMatch.character} className="w-1/11 ml-1 mr-5"></img>
                <h1>{oneMatch.mode}</h1>
                <div className="absolute right-1/5">
                    <h1>Kills: {oneMatch.stats.kills}</h1>
                    <h1>Deaths: {oneMatch.stats.deaths}</h1>
                    <h1>Assists: {oneMatch.stats.assists}</h1>
                </div>
            </div>
            <div className="flex justify-between">
                {oneMatch.round_wins.map((data , x) =>(
                    <div className="flex-col justify-center">
                        <h1 className="flex justify-center">Round: {x}</h1>
                        <h1 className="flex justify-center"> {data == oneMatch.team ? "win" : "loss"}</h1>
                    </div>
                    ))}
            </div>
            

                    
            
        </div>
    )
}
export default Match;