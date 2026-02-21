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
	<div className="min-h-screen w-full relative bg-background md:bg-[url(./assets/havenn.jpg)] bg-no-repeat bg-auto md:bg-cover md:bg-position-center bg-position-[20%_10]">
		<div className="min-h-screen absolute inset-0 bg-black/30">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px] my-auto" >		
					<div className="min-h-screen grid items-center justify-center gap-10 my-auto">
						<div className="grid grid-cols-2 items-stretch justify-center transition-all gap-10 md:gap-20 w-full max-w-6xl">
							<div className="">
								<Form setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
							</div>
							{showLoadCard && (
								<div className="w-2/3 md:w-2/5 my-auto">
									<Card rank="" peak="" peak_szn="" loading ={true}/>
								</div>	
							)}
							{showCard && (
								<div className="">
									<Card rank={rankData.curr_rank} peak={rankData.peak} peak_szn={rankData.peak_szn} loading={false}/>
								</div>
							)}
						</div>
					</div>
			</div>
		</div>
	</div>
  );
}
export default App;