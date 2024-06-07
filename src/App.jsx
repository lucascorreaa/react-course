import "./App.css"
import DropdownMenu from "./hooks/components/DropdownMenu";


function App() {

      const pages = [
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
      ]

  return (
    <body>
      <DropdownMenu pages={pages} />
    </body>
  );
}

export default App;


