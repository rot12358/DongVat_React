import { useState} from "react";
import "./global.css";
import AnimalShow from "./AnimalShow";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import horse from "./svg/horse.svg"
const App = () => {
    const animalName = [bird,cat,cow,dog,gator,horse];
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, animalName[Math.floor(Math.random() * animalName.length)]]);
        console.log(animals);
    };
    return (
        <>
        <div className="d-flex">
            <button onClick={handleClick}>App Animal</button>
        </div>
        <div className="d-flex">
            {animals.map((item) => (<AnimalShow className="w-24" animal ={item} />))}
        </div>
        
        </>
    );
}

export default App;