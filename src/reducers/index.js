import  {Add_Movies, Add_Favourites, Remove_From_Favourites, Set_Show_Fav} from '../actions'

const initialMoviesState = {
    list: [],
    favourites : [],
    showFavourites : false
}
export default function movies (state = initialMoviesState , action){

    switch (action.type){
       case Add_Movies :
            return {
                ...state ,
                 list : action.movies  
            }

        case Add_Favourites :
            return {
                ...state ,
                favourites : [action.movie, ...state.favourites]  
            }

        case Remove_From_Favourites :

            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state ,
                favourites : filteredArray  
            }

        case Set_Show_Fav :
            return {
                ...state ,
                showFavourites : action.value  
            }
        default : 
            return state;
    }
    
    return state
}

