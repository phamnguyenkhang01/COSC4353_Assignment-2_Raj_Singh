import "./SignupDetail.css";

function SignupDetail() {
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="innerDiv_">
        <div>
          <h2>Profile</h2>
        </div>
        <div className="row">
          <form className="col-6">
            <div className="row">
              <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Adam Jhonson"
                  maxLength={50}
                  required
                />
              </div>
              <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Address"
                  maxLength={100}
                  required
                />
              </div>
              <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Address"
                  maxLength={100}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="exampleFormControlInput1" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="New York"
                  maxLength={100}
                  required
                />
              </div>
              <div className="col-6">
                <label for="exampleFormControlInput1" class="form-label">
                  State
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select State</option>
                  <option value="CL">California</option>
                  <option value="TX">Texas</option>
                  <option value="WS">Washington</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label">
                  Zipcode
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10001"
                  maxLength={9}
                  minLength={5}
                  required
                />
              </div>
            </div>
          </form>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img src="./cherry-669.png" alt="profileImage"></img>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" class="btn_ btn btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupDetail;
