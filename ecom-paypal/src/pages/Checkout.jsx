import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Paste your sandbox client ID here
const PAYPAL_CLIENT_ID = "ASUgvYSe4Flofx3_CVZEKbYnwfUvXH7r5Ghih968aPP4Q6nDiceKMtb_5e6HrBFwaLF3X3sSFZGeaL9e";

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Checkout</h2>

            <ul className="list-group mb-3">
              {cart.map((item, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name}
                  <span className="badge bg-secondary">${item.price}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-end">Total: <span className="text-success">${total.toFixed(2)}</span></h4>

            <hr className="my-4" />

            <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
              <PayPalButtons
                style={{ layout: "vertical", label: "pay" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(`✅ Payment successful by ${details.payer.name.given_name}`);
                    localStorage.removeItem("cart");
                    window.location.href = "/success";
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
