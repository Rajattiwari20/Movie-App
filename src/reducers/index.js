import  {Add_Movies} from '../actions'

const initialMoviesState = {
    list: [],
    favourites : []
}
export default function movies (state = initialMoviesState , action){
    if(action.type === Add_Movies){
        return {
            ...state ,
             list : action.movies  
        }
    }
    return state
}

