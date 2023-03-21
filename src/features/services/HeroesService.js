import useHttp from "../hooks/http.hook";

const useHeroesService = () => {
    const _apiBase = 'https://rickandmortyapi.com/api/character/';
    const {request, loading, error, clearError} = useHttp();

    const getAllHeroes = async (name = 'a', pageCount = 1) => {
        const res = await request(`${_apiBase}?name=${name}&page=${pageCount}`)
                                .then(data => data.results.map(_transformAllHeroes).sort((a, b) => a.name.localeCompare(b.name)))

        res.pop()
        return res;
    }

    const getSingleHero = async (id) => {
        const res = await request(`${_apiBase}${id}`)
        return res;
    }

    const _transformAllHeroes = (hero) => {
        return {
            id: hero.id,
            name: hero.name,
            species: hero.species,
            image: hero.image
        }

    }

    return {getAllHeroes, getSingleHero, loading, error, clearError}
}

export default useHeroesService;