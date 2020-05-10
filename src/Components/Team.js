import React, {useState} from 'react'
import {List, ListItem} from '@rmwc/list';
import  '@rmwc/list/styles';
import '../App.css'

function Team({id, shortName}) {

    return (
        <List>
            <ListItem>Team: {id} {shortName}</ListItem>
        </List>
    )
}

export default Team