import { useState } from "react";
import Die from "./Die";
import './Rolldice.css';

const Rolldice = () => {

  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [isRolling, setIsRolling] = useState(false)

  const dieOptions = ["one", "two", "three", "four", "five", "six"]

  const roll = () => {
    const newDie1 = dieOptions[Math.floor(Math.random() * dieOptions.length)]
    const newDie2 = dieOptions[Math.floor(Math.random() * dieOptions.length)]

    setDie1(newDie1);
    setDie2(newDie2);
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false)
    }, 1000)
  }
 
  return (
    <div className="Rolldice">
      <div className="RolldiceWrapper">
        <Die face={ die1 } rolling={isRolling}/>
        <Die face={ die2 } rolling={isRolling}/>
      </div>
      <button onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice!"}
      </button>
    </div>
    )
}

export default Rolldice;