import React, { useState } from 'react'
import Card from './components/Card';
import Form from './components/Form';
import MatchCard from './components/MatchCard';
import './index.css'

function App() {
	const [rankData, setRankData] = useState("loading")
	const [showCard, setShowCard] = useState(false)
	const [showLoadCard, setLoadShowCard] = useState(false)
  return (
	<div className="h-screen w-full relative bg-background md:bg-[url(./assets/havenn.jpg)] bg-no-repeat bg-auto md:bg-cover md:bg-position-center bg-position-[20%_10] overflow-hidden">
		<div className="absolute inset-0 bg-black/30">
			<div className="p-4 grid grid-cols-1 absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px] place-items-center" >		
				<div className="grid grid-cols-2 items-center transition-all gap-6 md:gap-10 w-full max-w-4xl">
					{(showLoadCard || showCard) ? (
						<div className="h-full w-full col-span-1">
							<Form setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
						</div>
						) : (
						<div className="h-full w-full col-span-1">
							<Form setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
						</div>
						)}
					
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
					{showCard && (
						<div className="h-full w-full col-span-2">
							<MatchCard/>
						</div>	
					)
					}
				</div>
			</div>
		</div>
	</div>
  );
}
export default App;