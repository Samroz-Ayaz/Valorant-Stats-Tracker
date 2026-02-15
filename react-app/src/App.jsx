import React, { useState } from 'react'
import Card from './components/Card';
import Form from './components/Form';
import './index.css'

function App() {
	const [rankData, setRankData] = useState("loading")
	const [showCard, setShowCard] = useState(false)
	const [showLoadCard, setLoadShowCard] = useState(false)
  return (
	<div className="min-h-screen w-full relative bg-[url(./assets/havenn.jpg)] bg-no-repeat bg-cover bg-position-center bg-position-[20%_10]">
		<div className="absolute inset-0 bg-black/40">
			<div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px]" >
				<div className="flex text-center justify-center min-h-screen transition-all gap-20">
					<Form  setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
					{showLoadCard && (
						<div className="animate-zoom backdrop-blur-[3px]">
							<Card rank="" peak="" peak_szn="" loading ={true}/>
						</div>
					)}
					{showCard && (
						<div className="animate-fade-in-up backdrop-blur-[3px]">
							<Card rank={rankData.curr_rank} peak={rankData.peak} peak_szn={rankData.peak_szn} loading={false}/>
						</div>
					)}
				</div>
			</div>
		</div>
	</div>
  );
}
export default App;