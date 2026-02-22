import React, { useState } from 'react'
function Form( { setMatchData, setRankData, setShowCard, setLoadShowCard }){
    const [name, setName] = useState("roz");
    const [tag, setTag] = useState("frag");
    const [region, setRegion] = useState("na")
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
        const response2 = await fetch(`http://127.0.0.1:8000/match/${name}/${tag}/${region}`);
        if (!response.ok) {
            console.error("Fetch failed");
            setLoadShowCard(false);
            return; 
        }
        if (!response2.ok) {
            console.error("Fetch failed");
            setLoadShowCard(false);
            return; 
        }
        const rankResult = await response.json();
        const matchResult = await response2.json();
        setRankData(rankResult);
        setMatchData(matchResult);
        setLoadShowCard(false);
        setShowCard(true);
	}
    return(
        <div className="text-center border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] text-text font-bold shadow-[0_0_80px_10px_#111823] p-8 rounded-2xl h-full">
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Username</p>
            <input className="text-2xl border-2 text-center border-background text-white rounded-md w-3/4 h-1/12 mb-4" onChange={handleNameChange}/>
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Tag</p>
            <input className="text-2xl border-2 text-center border-background text-white rounded-md w-3/4 h-1/12 mb-4" onChange={handleTagChange}/>
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Region</p>
            <select className="text-2xl border-2 text-center border-background text-white rounded-md w-3/4 h-1/10 mb-8" onChange={handleRegionChange}>
                <option value="" className="bg-slate-700">Select an Option</option>
                <option value="na" className="bg-slate-700">North America</option>
                <option value="eu" className="bg-slate-700">Europe</option>
            </select>
            <br></br>
            <button className="bg-background hover:bg-gray-950 text-white transition-all rounded w-2/3 h-1/10 text-1xl md:text-2xl lg:text-3xl" onClick={handleSubmit}>Get Stats</button>
		</div>
    )
} 
export default Form;