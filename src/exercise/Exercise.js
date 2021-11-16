import Bonus from "../bonus/bonus";
// // 1a. Create a function component called Exercise
// function Exercise (){
//   // 2a. Inside the Exercise function component, use the RETURN keyword with parentheses to have the Exercise function component return two h1s with the following text in each. First h1: "Great". Second h1: "Not Great". (HINT: Remember only one parent/top element can be returned from a component)
//   return (
//     <div>
//       <h1>Great</h1>
//       <h1>Not Great</h1>
//     </div>
  
// )
// };
// 3b. Back to the Exercise.js file, use destructuring in the Exercise function component to set each prop (AKA Property) to the name of the property.
// 3d. Set the following preset values for the "good" and "bad" properties/parameters...
// Preset value for good: "Great"
// Preset value for bad: "Not Great"
function Exercise ({good = `Great`, bad = `Not Great`}){
  return (
    <div>
      {/* // 3c. In the Exercise function component, replace the text of "Great" in the first h1 with the "good" property/parameter. Also, replace the text of "Not Great" in the 2nd h1 with the "bad" property/parameter. (HINT: Remember to use brackets {}) (NOTE: If this is done correctly, then "Awesome" & "Terrible" should display in the browser) */
      // (NOTE: If this is done correctly, then "Great" & "Not Great" should display in the browser above "Awesome" & "Terrible")
    }
      <h1>{good}</h1>
      <h1>{bad}</h1>
      <Bonus />
    </div>
)
};


// Important: Remember to stop your React App from running after you complete the exercise. You can do this by opening the terminal session that the React App is running on and pressing (Control + C) or you can click the trash can icon to completely end that terminal session.


// 1b. Add the export line at the bottom of the file
export default Exercise;