import './app.scss'
import Navbar from './components/navbar/navbar'
import {  useInView } from "framer-motion";
const App = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return <div>
    <section><Navbar ref={ref}/></section>
    <section>portfolio</section>
    <section>packages</section>
    <section>teams</section>
    <section>informations</section>
  </div>
};

export default App;
