import ArrowFunctions from "./arrow-functions";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import ImpliedReturns from "./implied-returns";
import ES5Functions from "./es5-functions";

function WorkingWithFunctions() {
   console.log('Hello World!');
   return(
      <div>
         <h2>Functions</h2>
         <ES5Functions/>
         <ArrowFunctions/>
         <ImpliedReturns/>
         <FunctionParenthesisAndParameters/>
      </div>
   );
}
export default WorkingWithFunctions