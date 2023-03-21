import './HeroCard.scss'

const HeroCard = ({id, name, species, image}) => {

    return (
        <li className="hero-card">
            <div className="hero">
                {/* <div className="hero-image_container"> */}
                    <img src={image} alt="hero" className="hero__image" />
                {/* </div> */}
                <div className="hero__info">
                    <div className="hero__info-name">
                        {name.length > 21 ? name.slice(0, 17).concat('...') : name}
                    </div>
                    <div className="hero__info-type">{species}</div>
                </div>
            </div>
        </li>
    )
}

export default HeroCard;