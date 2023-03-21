import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useHeroesService from '../../services/HeroesService';
import arrowBack from '../../assets/arrow_back.png'

import './HeroPage.scss'

const HeroPage = () => {
    const {heroId} = useParams();
    const [hero, setHero] = useState({});
    const {getSingleHero, loading} = useHeroesService();
    const navigate = useNavigate();

    useEffect(() => {
        getSingleHero(heroId).then(data => setHero(data))
    }, [heroId])

    const goBack = () => {
        navigate('/')
    }

    const {name, gender, status, species, origin, type, image} = hero;

    return (
            <>
            {hero && hero.name && (
                <>
                    <button className="go-back-button" onClick={goBack}>
                        <img src={arrowBack} alt='go back button'/>
                            Go Back
                        </button>
                    <div className="hero-page">
                        <img className='hero-page__image' src={image} alt={name} />
                        <div className="hero-page__title">{name}</div>
                        <div className="hero-page__subtitle">Informations</div>
                        <div className="hero-page__info">
                            <HeroInfo title='Gender' info={gender}></HeroInfo>
                            <HeroInfo title='Status' info={status}></HeroInfo>
                            <HeroInfo title='Specie' info={species}></HeroInfo>
                            <HeroInfo title='Origin' info={origin.name}></HeroInfo>
                            <HeroInfo title='Type' info={type}></HeroInfo>
                        </div>
                    </div>
                    </>
            )}
        
            </>
    )
}

const HeroInfo = ({title, info}) => {

    return (
        <div className='info-card'>
            <div className="info-card__title">{title}</div>
            <div className="info-card__info">{info === '' ? 'No data' : info}</div>
        </div>
    )
}

export default HeroPage;