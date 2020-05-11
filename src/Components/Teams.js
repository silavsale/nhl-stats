import React, { useState, useEffect } from "react";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/grid/styles";
import Team from "./Team";
import "../App.css";

function Teams() {
  const [teams, setTeams] = useState([]);
  // const [westerConference]

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams`);
    // const data = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/10/roster`)
    const teams = await data.json();
    setTeams(teams.teams);
    console.log("Teams team", teams.teams);
  };
  return (
    <div>
      <h3>NHL Teams</h3>
      <Grid>
        {teams &&
          Object.values(teams).map(
            ({
              id,
              shortName,
              teamName,
              division: { name: division },
              conference: { name: conference },
            }) => {
              return (
                <GridCell span={3}>
                  <Team
                    className="rosterContainer"
                    id={id}
                    teamName={teamName}
                    shortName={shortName}
                    division={division}
                    conference={conference}
                    key={id}
                    // style={{ margin: '20px', padding: '10px', border: '1px solid #d4d4d4', borderRadius: '4px' }}
                  />
                </GridCell>
              );
            }
          )}
      </Grid>
    </div>
  );
}

export default Teams;
