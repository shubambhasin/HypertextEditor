import { TextEditor } from "./components/Editor/TextEditor";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="h1 t-center">
        HyperText Editor{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <hr />
      <TextEditor />
    </div>
  );
}
