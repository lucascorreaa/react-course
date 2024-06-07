import "./App.css";
import DropdownMenu from "./hooks/components/DropdownMenu";
import Navbar from "./hooks/components/Navbar";

function App() {
  const pages = [
    {
      title: "Page one",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      title: "Page one",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      title: "Page one",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      title: "Page one",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
  ];

  return (
    <body>
      <Navbar />
      {/* <DropdownMenu pages={pages} /> */}
    </body>
  );
}

export default App;
