import React, {useState, useEffect} from 'react'
import Team from './Team'
import '../App.css'

function Teams() {

    const [teams, setTeams] = useState([]); 

    const selectProject = () => {
        return 'a'
    }

    useEffect(() => {
        fetchTeam()
    }, [])

const fetchTeam = async () => {
    const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
    // const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/10/roster`)
    const teams = await data.json()
    setTeams(teams.teams);
    console.log('team', teams.teams)
}
    return (
        <div>
            <h1>All Teams!</h1>
            <div >
                {teams && Object.values(teams).map(({id, shortName}) => {
                    console.log('shortName', shortName)
                    return(
                        <Team 
                        id={id}
                        shortName={shortName}
                        onClick={() => selectProject(id)}
                        style={{ margin: '20px', padding: '10px', border: '1px solid #d4d4d4', borderRadius: '4px' }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Teams