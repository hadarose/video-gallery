import Title from "./components/Title";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Title />
      <Upload />
      <Gallery />
    </div>
  );
}

export default App;
