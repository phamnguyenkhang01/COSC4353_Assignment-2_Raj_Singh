import "./Signup.css";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center main_container">
      <div className="innerContainer row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1>Signup</h1>
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
              <label for="exampleFormControlInput1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="********"
                minLength={8}
                required
              />
              <button type="button" class="btn btn-primary">
                Signup
              </button>
            </form>
          </div>
        </div>

        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src="./flame-1208.png" alt="SignupImage"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
