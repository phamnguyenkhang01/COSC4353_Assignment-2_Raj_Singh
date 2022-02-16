import "./Login.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center main_container">
      <div className="innerContainer row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src="./login_illust.png" alt="LoginImage"></img>
          </div>
          <div className="link">
            <a className="link_" href="#">
              Create an account
            </a>
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1>Login</h1>
            <form>
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="********"
                minLength={8}
                required
              />
              <div className="checkBox">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </form>
            <div className="otherLoginsDiv">
              <span>Or login with</span>
              <a href="#">
                <img
                  className="icons firstIcon"
                  src="./google.png"
                  alt="google"
                />
              </a>
              <a href="#">
                <img className="icons" src="./facebook.png" alt="google" />
              </a>
              <a href="#">
                <img className="icons" src="./microsoft.png" alt="google" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
