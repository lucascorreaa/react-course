import "./App.css"

import Layout from "./components/Layout";
import SuporteLogo from "./assets/images/svg/suporte-logo.jpeg"

function App() {
  return (
    <body>

      <Layout 
        tag="react" 
        title="Curso React - Senai" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat." 
        buttonLeftTitle="Leia mais" 
        buttonRightTitle="Documentação" 
        image={SuporteLogo} 
      />
      
    </body>
  );
}

export default App;


