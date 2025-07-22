import { withAuthRequired } from "../../hoc/withAuthRequired";

function DefaultState() {
  return (
    <div>
      <h1>Welcome to the Competition Screen</h1>
    </div>
  );
}

export default DefaultState;
export const ProtectedDefaultStatePage = withAuthRequired(DefaultState);
