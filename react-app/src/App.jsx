import React, { useState } from 'react'
import Card from './Card';
import './index.css';
//https://youtu.be/CgkZ7MvWUAA?si=UMZnTqOjwH3nrT6K&t=7757
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
		setShowCard(false)
		setLoadShowCard(true)
		const response = await fetch(`http://127.0.0.1:8000/rank/${name}/${tag}/${region}`);
		if(!response.ok){
			throw new Error("Couldnt fetch the data")
		}
		setData(await response.json());
		setLoadShowCard(false)
		setShowCard(true)
	}
  return (
	<>
		<div className="bg-background grid text-text font-bold justify-items-center .rounded-lg.shadow-md.p-6.bg-white">
			<p className="">Username</p>
			<input className="border rounded-xl" onChange={handleNameChange}/>
			<p className="">Tag</p>
			<input className="border rounded-xl" onChange={handleTagChange}/>
			<p className="">Region</p>
			<select className="" onChange={handleRegionChange}>
				<option value="">Select an Option</option>
				<option value="na">North America</option>
				<option value="eu">Europe</option>
			</select>
			<br></br>
			<button className="bg-slate-700 px-10" onClick={handleSubmit}>Get Rank</button>
		</div>
		<br></br>
		{showLoadCard ? (
			<Card rank="" peak="" peak_szn="" loading ={true}/>
		): <></>}
		{showCard ? (
			<Card rank={data.curr_rank} peak={data.peak} peak_szn={data.peak_szn} loading={false}/>
		): <></>}
    </>
  );
}
export default App;