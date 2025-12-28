import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isDancing, setIsDancing] = useState(false)

  const toggleDance = () => {
    setIsDancing(!isDancing)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isDancing ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      <button onClick={toggleDance} className="dance-button">
        {isDancing ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  )
}

export default DancingCat
