import "./FuelQuoteHistory.css";

function FuelQuoteHistory() {
  return (
    <div className="d-flex justify-content-center align-items-center historyMain">
      <div className="table__ d-flex justify-content-center align-items-center flex-column">
        <div className="fuelhistoryheading">
          <h2>Quote History</h2>
        </div>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Gallons</th>
              <th scope="col">Rate</th>
              <th scope="col">Delivery Address</th>
              <th scope="col">Delivery Date</th>
              <th scope="col">Quote Date</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>55</td>
              <td>$3.42</td>
              <td>446 Creekside St. Battle Ground, WA 98604</td>
              <td>01-02-2022</td>
              <td>25-01-2022</td>
              <td className="total">$188.1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>10</td>
              <td>$1.55</td>
              <td>9862 North Sulphur Springs Road East Haven, CT 06512</td>
              <td>03-02-2022</td>
              <td>27-01-2022</td>
              <td className="total">$15.5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>589</td>
              <td>$10.56</td>
              <td>17 Mountainview Ave. Rolla, MO 65401</td>
              <td>09-02-2022</td>
              <td>01-02-2022</td>
              <td className="total">$1566.74</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>348</td>
              <td>$2.66</td>
              <td>383 Applegate Dr. Greenfield, IN 46140</td>
              <td>07-02-2022</td>
              <td>27-01-2022</td>
              <td className="total">$925.68</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>123</td>
              <td>$11</td>
              <td>31 East Aspen St. Davison, MI 48423</td>
              <td>10-02-2022</td>
              <td>05-02-2022</td>
              <td className="total">$1353</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FuelQuoteHistory;
