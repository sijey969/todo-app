import React from 'react';

const Functions = ({ markAllComplete, deleteAll, markAllIncomplete, deleteAllCompleted }) => {
    return(
        <div>
            <button className="button-complete-all" onClick={markAllComplete}>Complete All</button>
            <button className="button-delete-all" onClick={deleteAll}>Delete All</button>
            <button className="button-incomplete-all" onClick={markAllIncomplete}>Incomplete All</button>
            <button className="button-delete-all-completed" onClick={deleteAllCompleted}>Delete All Completed</button>
        </div>
    )
}

export default Functions;
