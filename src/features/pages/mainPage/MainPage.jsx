import HeroList from '../../components/heroList/HeroList'
import { useState, useEffect, useCallback } from 'react'
import useHeroesService from '../../services/HeroesService'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import './MainPage.scss'
import logo from '../../assets/main-image.png'
import searchLogo from '../../assets/Vector.png'

const MainPage = () => {
    const [filter, setFilter] = useState('');
    const [heroes, setHeroes] = useState([]);
    const {getAllHeroes, error} = useHeroesService();
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        const savedInputValue = localStorage.getItem('inputValue');
        if (savedInputValue) {
            setFilter(savedInputValue)
        }

        const savedHeroesList = JSON.parse(localStorage.getItem('heroesList'));
        if (savedHeroesList) {
            setHeroes(savedHeroesList)
        }
        
        const loadHeroes = async () => {
            await getAllHeroes().then(data => setHeroes(data))
        }
        loadHeroes()
    }, [])

    useEffect(() => {
        localStorage.setItem('inputValue', filter);
        localStorage.setItem('heroesList', JSON.stringify(heroes));

    }, [filter, heroes])

    useEffect(() => {
        if (error) {
            if (heroes.length !== 0) {
                setHeroes([])
            }
        }
        
        if (filter.trim() !== '') {
            getAllHeroes(filter).then(data => setHeroes(data))
            
        }  else if (filter.trim() === '') {
            getAllHeroes().then(data => setHeroes(data))
        }

    }, [filter])

    const onUpload = useCallback(async (e) => {
        e.preventDefault()
        await getAllHeroes(filter, pageCount + 1)
            .then(data => {
                const filteredData = data.filter(newHero => !heroes.some(hero => hero.name === newHero.name))
                setHeroes(prev => [...prev, ...filteredData])
                setPageCount(prev => prev + 1)
            })
    }, [filter, heroes, pageCount])

    return (
        <div className="main">
            <img className='main__logo' src={logo} alt="Rick and Morty logo" />
            <div className="main__input-container">
                <img className='input__logo' src={searchLogo} alt="search logo" />
                <input value={filter} 
                        onChange={e => setFilter(e.target.value)} 
                        className='main__input' 
                        type="text" 
                        placeholder='Filter by name...'/>
            </div>  
            {error ? <ErrorMessage/> : <HeroList heroes={heroes}/>}
            {!error && heroes.length >= 19 && <button className='load-more-btn' onClick={onUpload}>Load More</button>}
        </div>
    )
}

export default MainPage;