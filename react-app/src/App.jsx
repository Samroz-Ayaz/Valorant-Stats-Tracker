import React, { useState, useEffect } from 'react'
import Card from './components/Card';
import Form from './components/Form';
import MatchCard from './components/MatchCard';
import Match from './components/Match';
import './index.css'

function App() {
	const [rankData, setRankData] = useState("loading")
	const [matchData, setMatchData] = useState("loading")
	const [oneMatch, setOneMatch] = useState(false)
	const [showCard, setShowCard] = useState(false)
	const [showLoadCard, setLoadShowCard] = useState(false)
	const [showMatch, setShowMatch] = useState(false)

  return (
	<div className="h-screen w-full relative bg-[url(./assets/havenn.jpg)] bg-no-repeat bg-cover md:bg-position-center bg-position-[20%_10] overflow-hidden">
			<div className="p-4 grid grid-cols-1 absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px] place-items-center" >		
				<div className="grid grid-cols-2 items-center justify-center gap-6 md:gap-10 w-full max-w-5xl">
					{showLoadCard ? (
						<div className="animate-fade-in-up h-full w-full col-span-1">
							<Form  setMatchData={setMatchData} setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
						</div>
						): showCard ? (
						<div className="animate-fade-in-down h-full w-full justify-self-center col-span-1">
							<Form setMatchData={setMatchData}  setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
						</div>
						): <div className="h-full w-1/2 justify-self-center col-span-2">
							<Form setMatchData={setMatchData}  setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
						</div>}
					
					{showLoadCard && (
						<div className="h-full w-full col-span-1">
							<Card rank="" peak="" peak_szn="" loading ={true}/>
						</div>	
					)}
					{showCard && (
						<div className="h-full w-full col-span-1">
							<Card rank={rankData.curr_rank} peak={rankData.peak} peak_szn={rankData.peak_szn} loading={false}/>
						</div>
					)}
					{showCard && (!showMatch ?
						
						<div className="h-full w-full col-span-2">
							<MatchCard matchData={matchData} setOneMatch={setOneMatch} setShowMatch={setShowMatch}/>
						</div>	:
						<div className="h-full w-full col-span-2">
							<Match setShowMatch={setShowMatch} oneMatch={oneMatch}/>
						</div>
						
					)
				}
				</div>
			</div>
	</div>
  );
}
export default App;