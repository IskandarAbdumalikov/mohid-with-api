import "./main.scss";
import Products from "../products/Products";
import Hero from "../hero/Hero";
import PersonCard from "../personCards/PersonCard";

const Main = () => {

  return (
    <main>
      <Hero/>
      <Products/>
      <PersonCard/>
    </main>
  );
};

export default Main;
