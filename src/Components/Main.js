import React from 'react'
import './Main.css'
import AddIcon from "@mui/icons-material/Add";

function Main() {
    return (
      <div className="main_div">
        <div className="center_div">
          <div className="button">
            <button>Add</button>
            <AddIcon />
          </div>
        </div>
      </div>
    );
}

export default Main
