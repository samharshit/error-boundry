import "./styles.css";
import { ErrorBoundry } from "./Error";
import { Job } from "./job";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <h3>Hello there</h3>
        <Job name="man" />
        <Job name="women" />
        <Job name="other" />
      </ErrorBoundry>
    </div>
  );
}
