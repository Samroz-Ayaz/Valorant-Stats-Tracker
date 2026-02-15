import React, { useState } from 'react'
import Card from './Card';
import './index.css'
function App() {
	const [name, setName] = useState("roz");
	const [tag, setTag] = useState("frag");
	const [region, setRegion] = useState("na")
	const [data, setData] = useState("loading")
	const [showCard, setShowCard] = useState(false)
	const [showLoadCard, setLoadShowCard] = useState(false)
	const handleNameChange = (event) =>{
        setName(event.target.value);
    }
	const handleTagChange = (event) =>{
        setTag(event.target.value);
    }
	const handleRegionChange = (event) =>{
        setRegion(event.target.value);
    }
	const handleSubmit = async() => {
		setShowCard(false);
		setLoadShowCard(true);
        const response = await fetch(`http://localhost:8000/rank/${name}/${tag}/${region}`);
        
        if (!response.ok) {
            // Instead of just throwing, handle the UI state here
            console.error("Fetch failed");
            setLoadShowCard(false);
            return; 
        }

        const result = await response.json();
        setData(result);
        
        // 2. Data is ready, swap loading for the result card
        setLoadShowCard(false);
        setShowCard(true);
	}
  return (
	<div className="flex text-center justify-center min-h-screen transition-all gap-0">
		<div className="flex-col w-1/5 bg-background text-text font-bold text-xl p-8 my-auto shadow-[0_0_80px_1px_#111823] rounded-xl">
			<p className="text-4xl mb-1">Username</p>
			<input className="text-2xl border-2 border-white rounded-md" onChange={handleNameChange}/>
			<p className="text-4xl mb-1 mt-2">Tag</p>
			<input className="text-2xl border-2 border-white rounded-md" onChange={handleTagChange}/>
			<p className="text-4xl mt-2 mb-2">Region</p>
			<select className="text-2xl border-2 border-white rounded-md" onChange={handleRegionChange}>
				<option value="">Select an Option</option>
				<option value="na">North America</option>
				<option value="eu">Europe</option>
			</select>
			<br></br>
			<button className="bg-slate-700 px-10 hover:bg-slate-800 transition-all rounded mt-4" onClick={handleSubmit}>Get Rank</button>
		</div>
		<div className="my-auto w-1/5">
				{showLoadCard && (
				<Card rank="" peak="" peak_szn="" loading ={true} className=""/>
				)}
				{showCard && (
					<Card rank={data.curr_rank} peak={data.peak} peak_szn={data.peak_szn} loading={false} className=""/>
				)}
			</div>
    </div>
  );
}
export default App;