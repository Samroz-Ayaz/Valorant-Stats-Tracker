function Match ({ setShowMatch, oneMatch }){
    return(
        <div className="p-5 overflow-hidden w-full h-full animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border  backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
                <div className="absolute inset-4 flex justify-center">
                    <h1 className={`text-1xl md:text-2xl lg:text-3xl + ${oneMatch.you_won ? "text-green-400" : "text-red-500"}`}>{oneMatch.you_won ? "Victory" : "Loss"}</h1>
                </div>
                <img onClick={() => setShowMatch(false)} src="../../x.webp" alt="X" className="absolute right-5 w-1/56"></img>    

            
            <div className="flex items-center mt-3 pb-4 mb-4 border-b-2 border-text">
                <img src={`../../Agents/${oneMatch.character}_icon.webp`} alt={oneMatch.character} className="w-1/11 ml-1 mr-5"></img>
                <div>
                    <h1 className="text-1xl md:text-2xl lg:text-2xl">{oneMatch.mode}</h1>
                    <h1>KDA: {oneMatch.stats.kills}/{oneMatch.stats.deaths}/{oneMatch.stats.assists}</h1>
                   
                </div>
                {oneMatch.mode != "Deathmatch" ? 
                    <div className="flex-col absolute right-1/10 justify-between text-right items-center">
                        <h1 className="text-1xl right-1">Headshot Percent: {oneMatch.stats.hs_percent}%</h1>
                        <h1 className="text-1xl right-1">Score: {oneMatch.stats.score}</h1>
                    </div> :
                    <></>}
            </div>
            <div className="">
                <div className="flex justify-between px-2">
                {oneMatch.mode != "Deathmatch" ? oneMatch.round_wins.map((data , x) =>(
                    <div className="flex-col justify-center">
                        <h1 className="flex justify-center">Round: {x}</h1>
                        <h1 className="flex justify-center"> {data == oneMatch.team ? "Win" : "Loss"}</h1>
                    </div>
                    )) : <></>}
                </div>
            </div>  
        </div>
    )
}
export default Match;