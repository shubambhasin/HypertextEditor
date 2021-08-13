import { TextEditor } from "./components/Editor/TextEditor";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="h3 t-center">HyperText Editor</h1>
      <TextEditor />
    </div>
  );
}
