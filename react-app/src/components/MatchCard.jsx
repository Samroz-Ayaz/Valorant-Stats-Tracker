function MatchCard( { matchData }){
    console.log(matchData.matches.map((game) => game.score));
    return(
        <div className="overflow-hidden animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <div className="flex flex-col pl-4 h-50 overflow-y-auto custom-scrollbar">  
                {matchData.matches.map((game) => 
                <div className="mt-4 mx-auto w-98/100 py-10 border-t-2 pr-5">
                    <div className="flex justify-between">
                        <h1 className="text-xl">
                            {game.map} -- {game.mode}
                        </h1> 
                        <h2 className={`${game.you_won ? `text-green-400` : `text-red-500`}`}>
                            {game.score == "None - None" ? `` : `${game.score}`}
                        </h2>
                    </div>
                    <h1>KDA: {game.stats.kills}/{game.stats.deaths}/{game.stats.assists}</h1>
                    {game.stats.hs_percent != 0 ? <h1>Headshot Percent: {game.stats.hs_percent}%</h1> : <></>}
                </div>)} 
            </div>
        </div>
    )
}
export default MatchCard;