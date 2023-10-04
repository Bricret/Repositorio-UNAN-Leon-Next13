import { exa_tesis } from '../../data/tesis';

export const getArtByTitle = ( title = '' ) => {

    if ( title === '' ) return [];

    return exa_tesis.filter( tesis => tesis.title.toLocaleLowerCase().includes( title.toLowerCase() ) );
}
