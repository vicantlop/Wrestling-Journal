import { styled } from "styled-components"

const Login = () => {
    const LoginCard = styled.div`
        position: absolute;
        left: 50%;
        top: 50%;
        height: 40%;
        width: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border: 3px solid green;
    `

    return (
        <LoginCard className="card text-center">
            <div className="card-header">
                SignUp
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </LoginCard>
    )
}

export default Login