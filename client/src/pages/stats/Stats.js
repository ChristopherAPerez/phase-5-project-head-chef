import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import PieChart from "./PieChart";
import PieChartData from './PieChartData';

import { UserContext } from '../../components/App'

function Stats() {
  const navigate = useNavigate()

  const { stats, setStats } = useContext(UserContext)

  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    fetch("/retrieve_cal_stats").then((r) => {
      if (r.ok) {
        r.json().then((stat) => {
          setStats(stat)
        })
      }
    });
  }, [setStats]);

  function handleMainMenu(){
    navigate("/")
}

  return (
    <div>
      <button className="button" onClick={handleMainMenu}>Main Menu</button>
      <br></br>
      <br></br>
      <PieChart trigger={trigger} setTrigger={setTrigger}/>
      <div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PieChartData trigger={trigger} stats={stats} />
    </div>
  );
}

export default Stats;