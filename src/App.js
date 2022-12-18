import Logo from "./components/Logo";
import JobForm from "./components/JobForm";

function App() {
  return (
    <div className="hero">
      <Logo />
      <JobForm onAddData={addDataHandler} />
    </div>
  );
}

export default App;
