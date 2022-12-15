import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_API;

export const AuthenticateSession = async (user) => {
    try {
        const response = await axios.post(`${baseURL}/auth/access`, {uid: user.uid}, {headers: {authorization: `BEARER ${user.accessToken}`}})
        return response.data
    } catch (error) {
        if(error.response.status === 403) {
            return "Your session has expired!"
        }
    }
}

export const SignIn = async (credentials) => {
    try {
        const response = await axios.post(`${baseURL}/auth`, credentials)
        return response.data
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
}
export const CreateNewUser = async (credentials) => {
    try {
        const response = await axios.post(`${baseURL}/auth/create`, credentials)
        return {message: response.data.message, status: response.status};
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
}
export const FetchMovies = () => axios.get(`${baseURL}/movies`)

export const SaveRating = async (rating) => {
    try {
        const response = await axios.post(`${baseURL}/ratings`, rating)
        return {message: response.data.message, status: response.status};
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
} 
export const SaveReview = async (review) => {
    try {
        const response = await axios.post(`${baseURL}/reviews`, review)
        return {message: response.data.message, status: response.status};
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
} 

export const genres = [ "Action", "Adventure", "Sci-Fi", "Comedy", "Horror", "Animation" ]