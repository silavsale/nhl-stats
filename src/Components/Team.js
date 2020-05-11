import React from "react";
import { Link } from "react-router-dom";
import { List, SimpleListItem } from "@rmwc/list";
import "@rmwc/list/styles";
import "../App.css";
import "./List.scss";

// {/* {id} {shortName}</SimpleListItem> */}
function Team({ id, shortName, conference, teamName, division }) {
  const sityNam = `${shortName} ${teamName}`;
  return (
    <List twoLine>
      <Link to={`/roster/${id}`}>
        <SimpleListItem
          className="teamItem"
          text={sityNam}
          secondaryText={division}
          meta={conference}
        />
      </Link>
    </List>
  );
}

export default Team;
