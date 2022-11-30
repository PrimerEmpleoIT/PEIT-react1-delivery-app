import { createContext, useState, useCallback } from 'react';
import { getLikes } from '../services';

const FavsContext = createContext();

const FavsContextWrapper = props => {
    const [favs, setFavs] = useState([]);

    const updateFavs = useCallback(() => {
        getLikes().then((res) => setFavs(res));
    }, [setFavs]);

    return (
        <FavsContext.Provider value={ {favs, updateFavs} }>
            { props.children }
        </FavsContext.Provider>        
    )
}

export { FavsContext, FavsContextWrapper };