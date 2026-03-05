function MatchCard( { matchData, setOneMatch, setShowMatch }){
    return(
        <div className="overflow-hidden animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border  backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            <div className="py-5 flex flex-col pl-4 h-70 overflow-y-auto custom-scrollbar">  
                {matchData.matches.map((game, x) =>
                <li key={x} onClick={() => setOneMatch(game) + setShowMatch(true) } className="hover:cursor-pointer list-none p-3 mb-5 mx-auto w-98/100 border shadow-[0_0_80px_1px_#111823] border-background bg-black/30 hover:bg-black/60 transition-all duration-300 pr-5 rounded-xl">
                    <div className="text-white mt-3 flex justify-between border-b-2 border-text">
                        <h1 className="text-2xl">
                            {game.map} -- {game.mode}
                        </h1> 
                        <h2 className={`text-xl ${game.you_won ? `text-green-400` : `text-red-500`}`}>
                            {game.score == "None - None" ? game.you_won ? "Victory" : "Defeat" : `${game.score}`}
                        </h2>
                    </div>
                    <div className="pl-5 text-white">
                    <div className="mt-4 flex justify-between">
                        <h1 className="text-xl">KDA — {game.stats.kills} / {game.stats.deaths} / {game.stats.assists}</h1> 
                        <h1>Score: {(game.stats.score)}</h1>
                    </div> 
                    </div>
                        
                    
                </li>)} 
            </div>
        </div>
    )
}
export default MatchCard;