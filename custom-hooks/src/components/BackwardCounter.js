import useCounterWithFn from '../hooks/useCounterWithFn';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounterWithFn(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
