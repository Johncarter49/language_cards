import './App.css';
//import Header from './components/Header/Header';
import Card from './components/cards/Card';
import { infos } from "./helpers/data";
import reactSvg from "./assets/react.svg";


const App = () => {
  return (
    <>
      <img src={reactSvg} className="top-img" alt="reactjs" />
      <section className="menu-container">
        <div className="bars"></div>
        <section className="top">Languages</section>

        <section className="bottom">
          {infos.map((info, id) => {
            return <Card key={id} info={info} />;

          })}
        </section>
      </section>
    </>
  );
}

export default App;
