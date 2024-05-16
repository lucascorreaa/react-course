import "./App.css"

import Banner from "./components/Banner"

import Broadcast from "./assets/images/svg/broadcast-svgrepo-com.svg"
import Card from "./assets/images/svg/card-holder-svgrepo-com.svg"
import Coffee from "./assets/images/svg/coffee-svgrepo-com.svg"
import Collect from "./assets/images/svg/collect-svgrepo-com.svg"
import Earphone from "./assets/images/svg/earphone-svgrepo-com.svg"
import Tips from "./assets/images/svg/tips-svgrepo-com.svg"

function App() {
  return (
    <body>

      <div className="card">
        <h1>React Course</h1>
        <p>Front-End Javascript</p>
      </div>

      <Banner title="titulo" description="descrição" image={Broadcast} />
      <Banner title="titulo" description="descrição" image={Card} />
      <Banner title="titulo" description="descrição" image={Coffee} />
      <Banner title="titulo" description="descrição" image={Collect} />
      <Banner title="titulo" description="descrição" image={Earphone} />
      <Banner title="titulo" description="descrição" image={Tips} />

    </body>
  );
}

export default App;


