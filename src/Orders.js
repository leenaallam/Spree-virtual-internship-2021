import { useHistory } from "react-router";

export default function Orders() {
  const history = useHistory();
  const orderpage = () => {
    history.push("/orders");
  };
  return (
    <div className="orders">
      <div className="ordersicon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.00008 13.3001H3.71013L3.50511 13.5051L1.36675 15.6435V2.33342C1.36675 1.80335 1.80335 1.36675 2.33342 1.36675H15.6668C16.1968 1.36675 16.6334 1.80335 16.6334 2.33342V12.3334C16.6334 12.8635 16.1968 13.3001 15.6668 13.3001H4.00008Z"
            stroke="#C2CFE0"
            stroke-width="1.4"
          />
        </svg>
      </div>

      <div className="ordersname">
        <h1 onClick={() => history.push("/orders")}>Orders</h1>
      </div>
    </div>
  );
}
