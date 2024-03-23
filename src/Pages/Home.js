import React from 'react';
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
      <img className="home-image" src={require("../images/intro-page.png")} />
      <div className="home-page-content">
        <h1>
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="vans" className="find-your-van-button">Find your van</Link>
      </div>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </div>
  )
}