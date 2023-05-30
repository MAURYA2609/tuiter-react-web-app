import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TemplateLiterals from "./template-literals ";
import TernaryOperator from "./ternary-operator";
import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variables-types";
import WorkingWithArrays from "./working-with-arrays";
import WorkingWithFunctions from "./working-with-functions";
import House from "./house";
import Spread from "./spread"
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>   
         <TemplateLiterals/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}
export default JavaScript