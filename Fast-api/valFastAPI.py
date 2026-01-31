import requests
from dotenv import load_dotenv
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
app = FastAPI()
api_key = os.getenv("HENRIK_API_KEY")


origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

headers  = {
        "Authorization": api_key,
        "Accept": "*/*"
    }

def get_info(name, tag):
    url = f"https://api.henrikdev.xyz/valorant/v2/account/{name}/{tag}"
    response = requests.get(url, headers=headers)
    code = response.status_code
    match code:
        case 200:
            return response.json()
        case 404:
            return "Player not found"
        case 408:
            return "Timeout"
        case 429:
            return "Rate limit reached"
        case 503:
            return "Api is unable to connect"
        case _:
            return f"Error code: {code}"

def get_rank(puuid, region):
    url = f"https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/{region}/{puuid}"
    response = requests.get(url, headers=headers)
    code = response.status_code
    match code:
        case 200:
            return response.json()
        case 404:
            return "Player not found"
        case 408:
            return "Timeout"
        case 429:
            return "Rate limit reached"
        case 503:
            return "Api is unable to connect"
        case _:
            return f"Error code: {code}"

def get_matches(puuid, region):
    url = f"https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/{region}/{puuid}?size=5"
    response = requests.get(url, headers=headers)
    code = response.status_code
    match code:
        case 200:
            return response.json()
        case 404:
            return "Player not found"
        case 408:
            return "Timeout"
        case 429:
            return "Rate limit reached"
        case 503:
            return "Api is unable to connect"
        case _:
            return f"Error code: {code}"


@app.get("/match/{name}/{tag}/{region}")
def match(name:str, tag:str, region:str):
    puuid = get_info(name, tag)
    if type(puuid) is str:
        return f"Error: Username Not found"
    puuid = puuid['data']['puuid']
    data = get_matches(puuid, region)
    match_list = data.get('data', [])
    return_dict = {
        'puuid': puuid,
        'player_username': name,
        'matches': [],
    }
    for match in match_list:
            meta = match['metadata']
            if meta is None :
                pass
            else:
                if not(match['teams']['red']['has_won']):
                    game_won = True
                else:
                    game_won = False
                for player in match['players']['all_players']:
                    if player['name'].upper() == name.upper():
                        stats = player['stats']
                        total_hits = stats['headshots'] + stats['bodyshots'] + stats['legshots']
                        player['stats']['hs_percent'] = round((stats['headshots'] / total_hits) * 100 ) if total_hits > 0 else 0
                        return_dict['matches'].append({
                            "puuid": puuid,
                            "map" : meta['map'],
                            "mode" : meta['mode'],
                            "you_won": game_won,
                            "score": f"{match['teams']['blue']['rounds_won']} - {match['teams']['blue']['rounds_lost']}",
                            "character":player['character'],
                            "stats": player['stats']
                            })         
                        break   
    return return_dict

@app.get("/rank/{name}/{tag}/{region}")
def rank(name:str, tag:str, region:str):
    puuid = get_info(name, tag)
    if type(puuid) is str:
        return f"Error: Username Not found"
    puuid = puuid['data']['puuid']
    data = get_rank(puuid, region)
    return_dict = {
        "curr_rank":data['data']['current_data']['currenttierpatched'],
        "peak": data['data']['highest_rank']['patched_tier'],
        "peak_szn": data['data']['highest_rank']['season'],
        "puuid": puuid,
    }
    return return_dict