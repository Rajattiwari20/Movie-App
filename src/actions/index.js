
//actions types
export const Add_Movies = "Add_Movies"
export const Add_Favourites = "Add_Favourites"
export const Remove_From_Favourites = "Remove_From_Favourites"
export const Set_Show_Fav = "Set_Show_Fav"

//action creators
export function addMovies (movies) {
    return{
        type : Add_Movies,
        movies 
    }
}

export function addFavourites (movie) {
    return{
        type : Add_Favourites,
        movie 
    }
}

export function removeFromFavourites (movie) {
    return{
        type : Remove_From_Favourites,
        movie 
    }
}

export function setShowFav (value) {
    return{
        type : Set_Show_Fav,
        value 
    }
}