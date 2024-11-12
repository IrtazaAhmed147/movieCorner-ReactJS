
const apiKey = process.env.REACT_APP_USEPOPCORN_API;
console.log(apiKey)
export const SearchMovieApi = async (input) => {

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=${apiKey}`)    
        const res = await response.json()
        if (res.Response) {
            return res
        }  else {
            console.log(res.Error)
            return res.Error
        }
        
    } catch (error) {
        console.log(error)
    }

}

export const specificMoveiApi = async (title, year) => {

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${apiKey}`)    
        const res = await response.json()
        return res ? res : {}
    } catch (error) {
        console.log(error)
        // return res.Error
    }

}
