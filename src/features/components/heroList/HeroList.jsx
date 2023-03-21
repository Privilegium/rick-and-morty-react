import { Link } from "react-router-dom";
import HeroCard from "../heroCard/HeroCard";

import './HeroList.scss'

const HeroList = ({heroes}) => {
    return (
        <ul className="hero__list">
            {/* {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>} */}
            {heroes && heroes.map(item => {
                const {id, name, species, image} = item;
                return (
                    <Link style={{textDecoration: 'none'}} key={id} to={`/hero/${id}`}>
                        <HeroCard key={id}
                                  name={name}
                                  species={species}
                                  image={image} />
                    </Link>
            )
            })}
        </ul>
    )
}

export default HeroList;

// 