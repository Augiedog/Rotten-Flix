import "./Register.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { CreateNewUser } from "../../lib"
import Error from "../Error/Error"

const Register = () => {
    const navigate = useNavigate();
    const [error,setError] = useState({display: false, message: "" })
    const [signUp, setSignUp] = useState(false);
    const [newUser,setNewUser] = useState({ username: "", password: "" })

    const handleNewUser = async () => {
        const response = await CreateNewUser(newUser);
        response.status === 200 ? navigate('/login') : setError({...error, display: true, message: response.message})
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <h1 style={{color: "red"}}>Rotten-Flix</h1>
                    <Link to={"/login"}>
                        <button>Sign In</button>
                    </Link>
                </div>
                <div className="mid">
                    <h1 className=""> Unlimited movies, TV shows, and more.</h1>
                    <h2 className="">Watch anywhere. Cancel anytime.</h2>
                    <p className="">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="input">
                        <input placeholder="Username" onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
                        {signUp ?
                            <>
                                <input type="password" placeholder="Password" onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                                <button onClick={handleNewUser}>Start</button>
                            </>
                            :
                            <button onClick={() => {setSignUp(prev => !prev)}}>Get Started</button>
                        }
                    </div>
                </div>
            </div>
            {error.display && <Error setError={setError} error={error} />}
        </div>
    )
}

export default Register;