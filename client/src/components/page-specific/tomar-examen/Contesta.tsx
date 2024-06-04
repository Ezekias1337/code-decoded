// Library Imports
import { Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import { SwitchInput } from "../../form/dependents/components/input-fields/SwitchInput";

const Contesta = ({
  stateName,
  setStateHook,
  setErrorHook,
}: {
  stateName: string;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
}) => {
  return (
    <Fragment>
      <SwitchInput
        name={stateName}
        label="No"
        secondaryLabel="Sí"
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
        required
      />
    </Fragment>
  );
};

export default Contesta;
