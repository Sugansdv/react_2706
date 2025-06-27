import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">🛒 No items in cart.</div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <span className="badge bg-primary rounded-pill">₹{item.price}</span>
              </li>
            ))}
          </ul>
          <h4 className="text-end">
            Total: <span className="text-success">₹{total.toFixed(2)}</span>
          </h4>
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
