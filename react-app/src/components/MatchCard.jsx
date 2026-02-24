function MatchCard( { matchData }){
    console.log(matchData.matches.map((game) => game.score));
    return(
        <div className="overflow-hidden animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <div className="flex flex-col pl-4 h-50 overflow-y-auto custom-scrollbar">  
                {matchData.matches.map((game) => 
                <div className="mb-5 mx-auto w-98/100 border-t-2 pr-5">
                    <div className="text-text mt-3 flex justify-between border-b border-white border-dashed">
                        <h1 className="text-2xl">
                            {game.map} -- {game.mode}
                        </h1> 
                        <h2 className={`text-xl ${game.you_won ? `text-green-400` : `text-red-500`}`}>
                            {game.score == "None - None" ? `` : `${game.score}`}
                        </h2>
                    </div>
                    <div className="pl-5 text-white">
                    <div className="mt-4 flex justify-between">
                        <h1 className="text-xl">KD: {(game.stats.kills / game.stats.deaths).toFixed(2)}</h1> 
                        <h1>Score: {(game.stats.score)}</h1>
                    </div>
                    <h1 className="text-xl">Kills: {game.stats.kills}</h1>
                    <h1 className="text-xl">Deaths: {game.stats.deaths}</h1>
                    <h1 className="text-xl">Assists: {game.stats.assists}</h1>
                    {game.stats.hs_percent != 0 ? <h1 className="text-xl">Headshot Percent: {game.stats.hs_percent}%</h1> : <></>}  
                    </div>
                        
                    
                </div>)} 
            </div>
        </div>
    )
}
export default MatchCard;