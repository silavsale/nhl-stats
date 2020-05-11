import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, SimpleListItem } from "@rmwc/list";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/data-table/styles";
import "@rmwc/grid/styles";
import "../App.css";

function Roster({ match }) {
  const [roster, setRoster] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // const { id } = props.match.params;
    fetchRoster();
  }, []);

  const fetchRoster = async () => {
    const teamData = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${match.params.id}`
    );
    const data = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${match.params.id}/roster`
    );
    const team = await teamData.json();
    const roster = await data.json();
    setRoster(roster.roster);
    setTeam(team.teams[0]);
    console.log("roster", roster.roster);
    console.log("team", team.teams[0]);
  };

  return (
    <div>
      <h3>Roster of {team.name}</h3>
      <Grid>
        {roster &&
          Object.values(roster).map(
            ({
              person: { fullName },
              jerseyNumber,
              position: { name },
              person: { id },
            }) => {
              return (
                <GridCell span={3}>
                  <List className="rosterContainer" twoLine>
                    <Link to={`/player/${id}`}>
                      <SimpleListItem
                        className="roster"
                        text={fullName}
                        secondaryText={jerseyNumber}
                        meta={name}
                      />
                    </Link>
                  </List>
                </GridCell>
              );
            }
          )}
      </Grid>
    </div>
  );
}

export default Roster;
