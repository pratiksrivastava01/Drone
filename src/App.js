import {init} from "./utils/initDroneLayer.js"
import {useEffect} from "react";

function App() {

  // useEffect(() => {
  //   init()
  // }, [])


  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">BEE Drones Bots</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto quibusdam neque impedit repellendus, consequuntur voluptates culpa voluptate at possimus vero illo, quo atque dolorum quasi saepe quis est libero rem asperiores ratione odio officia! Quidem error, commodi animi aut alias ad debitis doloribus reprehenderit voluptatem voluptatum, iusto sunt repudiandae?</p>
        <p>
          <button className="btn">English</button>
          <button className="btn">Hindi</button>
        </p>
      </div>

      <div className="pricing">
        <h1>Our Pricing</h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">Basic</p>
            <p className="info">It has not only survivied not only past centuries, but also the leep into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">Standard</p>
            <p className="info">It has not only survivied not only past centuries, but also the leep into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">Premium</p>
            <p className="info">It has not only survivied not only past centuries, but also the leep into electronic typesetting, remaining essentially unchanged.</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
