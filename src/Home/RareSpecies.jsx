import React from 'react'
import './RareSpecies.css'

function RareSpecies() {
  return (
    <div className="species-section">
      <h2 className="section-title">Rare Wonders Found Inside the Deep Sea</h2>
      <p className="intro-text">
        Beneath the sunlit surface of the ocean lies a mysterious realm teeming with life forms that defy imagination. 
        The deep sea, one of the least explored areas on Earth, hides some of the rarest and most extraordinary creatures ever discovered.
      </p>

      {/* First Row */}
      <div className="species-row">
        <div className="species-card anim-left delay-0">
          <img 
            src="https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/f87d94d8-83d6-4b12-af14-bd8757520e51/19753193116_414ff0a291_o.jpg?auto=compress%2Cformat&w=1440" 
            alt="Dumbo Octopus" 
          />
          <h3>Dumbo Octopus</h3>
          <p>This deep-sea octopus uses its ear-like fins to swim and lives at depths up to 13,000 feet, making it one of the deepest-living octopuses.</p>
        </div>

        <div className="species-card anim-right delay-1">
          <img 
            src="https://www.fossilguy.com/gallery/vert/fish-shark/goblin/640px-Mitsukurina_owstoni_Pengo.jpg" 
            alt="Goblin Shark" 
          />
          <h3>Goblin Shark</h3>
          <p>Known as a "living fossil", this elusive deep-sea shark can dramatically extend its jaws to snatch prey in dark depths.</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="species-row">
        <div className="species-card anim-top delay-2">
          <img 
            src="https://ichef.bbci.co.uk/images/ic/480xn/p0hjflft.jpg.webp" 
            alt="Blue Dragon" 
          />
          <h3>Blue Dragon</h3>
          <p>This brilliant blue sea slug stores stinging cells from jellyfish it eats—using them for defense while floating on ocean currents.</p>
        </div>

        <div className="species-card anim-scale delay-3">
          <img 
            src="https://marinesanctuary.org/wp-content/uploads/2020/07/Ghost-Shark_Chimaera_NOAA-OKEANOS-EXPLORER-2013.jpg" 
            alt="Ghost Shark" 
          />
          <h3>Ghost Shark</h3>
          <p>Also known as chimaeras, these mysterious fish have been haunting the deep sea for over 400 million years with their ghostly appearance.</p>
        </div>
      </div>
    </div>
  )
}

export default RareSpecies
