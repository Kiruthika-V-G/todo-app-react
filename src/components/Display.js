import React from "react";
import './displayitem.css';

function Display({items,ondelete,onedit}){
    return(
        <>
            <div className="displayContainer">
                <div className="displayItems">
                    {items}
                </div>
                <button className="deleteButton" onClick={ondelete}>Delete</button>
                <button className="editButton" onClick={onedit}>Edit</button>
            </div>
        </>
    )
}

export default Display;