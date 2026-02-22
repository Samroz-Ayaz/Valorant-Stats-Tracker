function MatchCard( { matchData }){
    let matchname = [];
    for(var i = 0; i < 5; i++){
        matchname[i] = matchData.matches[i].map;
    }
    return(
        <div className="py-10 animate-fade-in-up text-white shadow-[0_0_80px_1px_#111823] border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] rounded-2xl">
            {matchname.map((x) => <h1>{x}</h1>)}
        </div>
    )
}
export default MatchCard;