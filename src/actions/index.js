
//actions types
export const Add_Movies = "Add_Movies"

//action creators
export function addMovies (movies) {
    return{
        type : Add_Movies,
        movies 
    }
}