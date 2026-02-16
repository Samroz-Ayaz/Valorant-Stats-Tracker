import React, { useState } from 'react'
function Form( { setRankData, setShowCard, setLoadShowCard }){
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
        if (!response.ok) {
            console.error("Fetch failed");
            setLoadShowCard(false);
            return; 
        }
        const result = await response.json();
        setRankData(result);
        setLoadShowCard(false);
        setShowCard(true);
	}
    return(
        <div className="md:h-full animate-fade-in-down flex-col border-background border bg-black/30 backdrop-brightness-80 backdrop-blur-[3px] text-text font-bold shadow-[0_0_80px_10px_#111823] rounded-xl p-5">
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Username</p>
            <input className="text-2xl border-2 border-white rounded-md w-3/4 h-1/12 mb-4" onChange={handleNameChange}/>
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Tag</p>
            <input className="text-2xl border-2 border-white rounded-md w-3/4 h-1/12 mb-4" onChange={handleTagChange}/>
            <p className="text-1xl md:text-4xl lg:text-5xl mb-2">Region</p>
            <select className="text-2xl border-2 border-white rounded-md w-3/4 h-1/12 mb-8" onChange={handleRegionChange}>
                <option value="">Select an Option</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
            </select>
            <br></br>
            <button className="bg-slate-700 hover:bg-slate-800 transition-all rounded w-2/3 h-1/10 text-1xl md:text-2xl lg:text-3xl" onClick={handleSubmit}>Get Stats</button>
		</div>
    )
} 
export default Form;