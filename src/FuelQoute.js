import "./FuelQoute.css";

function FuelQoute() {
  return (
    <div className="d-flex justify-content-center fuelQouteMain">
      <div className="fuelQouteinner">
        <div className="row">
          <h2 className="qouteHeading">Fuel Qoute</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center row qouteRow">
          <div className="col-6">
            <form>
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    <strong>Fuel (Gallons)</strong>
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="5"
                    min={1}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    <strong>Delivery Date</strong>
                  </label>
                  <input type="date" class="form-control" required />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    <strong>Delivery Address</strong>
                  </label>
                  <div>
                    <span>6644 Tavares Route Suite 807</span>
                  </div>
                  <div>
                    <span>North Wernerborough</span>
                  </div>
                  <div>
                    <span>Bilzen</span>
                  </div>
                  <div>
                    <span>80109-1222</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="mt-4">Price Per Gallon</h5>
                  <h3>$2.56</h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="mt-4">Total Amount Due</h5>
                  <h1>$22.71</h1>
                </div>
              </div>
            </form>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <img
                className="fuelimg"
                src="./spot-black-gold.png"
                alt="fuelImage"
              ></img>
            </div>
          </div>
          <div className="row orderbutton">
            <button type="button" class="btn btn-primary">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelQoute;
