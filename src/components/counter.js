import useState from "../hooks/useState";

const counter = () => {
  const [count, setCount] = useState(0);
  window.increment = () => setCount(count + 1);
  window.decrement = () => setCount(count - 1);
  window.reset = () => setCount(0);

  return `
    <div>
      <strong> count: ${count} </strong>
      <button onclick="increment()"> + </button>
      <button onclick="reset()"> 초기화 </button>
      <button onclick="decrement()"> - </button>
    </div>
  `;
};
export default counter;
