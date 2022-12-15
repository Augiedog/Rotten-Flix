import { useState } from "react"
import "./Login.css"
import { SignIn } from "../../lib"
import { useNavigate, Link } from "react-router-dom"
import Error from "../Error/Error"

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [error, setError] = useState({ display: false, message: "" })
    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await SignIn(credentials)
        response.message ? setError({...error, display: true, message: response.message }) : navigate('/home', { state: {user: response} } )
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                </div>
                <div className="mid">
                    <div className="wrapper">
                        <form onSubmit={handleSignIn}>
                            <h1>Sign In</h1>
                            <input
                                type="text"
                                placeholder="Username"
                                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            />
                            <button type="submit" className="signIn">Sign In</button>
                            <Link to={"/"}>
                                <button type="button" className="signUp">Sign up now</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            {error.display && <Error setError={setError} error={error} />}
        </div>
    )
}

export default Login