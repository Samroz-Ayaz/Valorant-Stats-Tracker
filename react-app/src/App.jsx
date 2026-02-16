import React, { useState } from 'react'
import Card from './components/Card';
import Form from './components/Form';
import './index.css'

function App() {
	const [rankData, setRankData] = useState("loading")
	const [showCard, setShowCard] = useState(false)
	const [showLoadCard, setLoadShowCard] = useState(false)
  return (
	<div className="min-h-full md:min-h-screen w-full relative bg-background md:bg-[url(./assets/havenn.jpg)] bg-no-repeat bg-auto md:bg-cover md:bg-position-center bg-position-[20%_10]">
		<div className="min-h-full md:min-h-screen absolute inset-0 bg-black/40">
			<div className="min-h-full md:min-h-screen absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px]" >
				<div className="min-h-full md:min-h-screen flex flex-col sm:flex-row h-full text-center items-stretch justify-center transition-all gap-20">
					<div className="h-5/11 sm:mx-auto md:mx-0 md:my-auto w-2/3 md:w-1/5">
						<Form setRankData={setRankData} setShowCard={setShowCard} setLoadShowCard={setLoadShowCard}/>
					</div>
					{showLoadCard && (
						<div className="animate-zoom backdrop-blur-[3px] rounded-2xl w-1/4">
							<Card rank="" peak="" peak_szn="" loading ={true}/>
						</div>
					)}
					{showCard && (
						<div className="h-5/11 sm:mx-auto md:mx-0 md:my-auto w-2/3 md:w-1/5 animate-fade-in-up backdrop-blur-[3px] rounded-2xl">
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