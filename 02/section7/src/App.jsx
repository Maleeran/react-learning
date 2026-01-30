import useSWR from "swr";
import useTime from "useTIme";

function App() {
  const adviceURL = "https://api.adviceslip.com/advice";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher);

  const currentTime = useTime();

  // const [advice, setAdvice] = useState('');
  // const [isLoading, setIsLoading] = useState(false)

  // async function getAdvice() {
  //   setIsLoading(true)

  //   const response = await fetch(adviceURL);
  //   const data= await response.json();

  //   setIsLoading(false)
  //   setAdvice(data.slip.advice)
  // }

  // useEffect(()=>{
  //   getAdvice();
  // },[])

  return (
    <main>
      <h1>Advice App</h1>
      <span>{currentTime}</span>
      <p>{isLoading ? "Loading..." : data.slip?.advice || "Loading..."}</p>
      <button disabled={isLoading} onClick={getAdvice}>
        Get Advice
      </button>
    </main>
  );
}
export default App;
