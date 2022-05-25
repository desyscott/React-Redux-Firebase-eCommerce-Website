import * as React from "react";
import { Link } from "react-router-dom";
import "./userTable.css";
// import img-1 from "../"


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 11908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 17908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData("Mouth Freshner", 19008424, "2 March 2022", "Approved"),
  createData("Cupcake", 16908421, "2 March 2022", "Delivered"),
  createData("Big Baza Bang ", 13908424, "2 March 2022", "Pending"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
      padding:"5px",
      borderRadius:"8px"
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
      padding:"5px",
      borderRadius:"8px"
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
      padding:"5px",
      borderRadius:"8px"
    }
  }
}

export default function userTable() {
  return (
      <div className="TableContainer">
      <p className="Table-title">Recent Orders</p>
      
      <div className="TableRow">
      <p> Product</p>
      <p>Tracking ID</p>
      <p>Date</p>
      <p>Status</p>
      <p></p>
      </div>
      
      < >
      {rows.map((row) => (
                <div
                  key={row.name}
                  className="TableBody"
                >
         
                  <div >
                    {row.name}
                  </div>
                  <div>{row.trackingId}</div>
                  <div >{row.date}</div>
                  <div >
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </div>
                  <Link  className="Details">Details</Link>
                </div>
              ))}
     
      </>
    
     
      </div>
  );
}
