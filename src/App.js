import Logo from "./components/Logo";
import JobForm from "./components/JobForm";

/**
 * App - the main component
 * @returns {JSX}
 */
const App = () => {
  /**
   * Handles entered user data when the Submit button is clicked
   * Sends the data to Firebase
   * @param {object} data
   */
  async function addDataHandler(data) {
    console.log(data);
    const response = await fetch(
      "https://job-form-fe329-default-rtdb.firebaseio.com/job-form-data.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const dataRes = await response.json();
    console.log(dataRes);
  }

  return (
    <div className="hero">
      <Logo />
      <JobForm onAddData={addDataHandler} />
    </div>
  );
};

export default App;
