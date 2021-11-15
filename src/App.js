// 2b. Open the App.js file and add the necessary import line at the top of the file that allows the Exercise component to be used in the App.js file
import Exercise from "./exercise/Exercise";
import Props from "./props/Props";


function App() {
  return (
    <div>
  {/* {2c. Inside the return for the App component, pass in the Exercise component so it will render to the browser (AKA. Display in the browser)} */}
    <Exercise />
  {/* {3a. Below the Exercise component in the App component, pass in another Exercise component with the following props and values:
  1st Prop: Set the name of the prop to "good". Set the value to the following string value "Awesome"
  2nd Prop: Set the name of the prop to "bad". Set the value to the following string value "Terrible"}   */}
    <Props good = "Awesome" />
    <Props bad = "Terrible" />

    </div>
  );
}

export default App;
