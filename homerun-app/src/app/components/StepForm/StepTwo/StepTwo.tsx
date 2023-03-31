import Dropzone from "react-dropzone";
import { IPropertyCreate } from "../../../../api/utils/property";

const StepTwo = (props: {
  formData: IPropertyCreate;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const { formData, handleChange, prevStep, nextStep } = props;

  return (
    <>
      <Dropzone />
      <div className="row alignCenter spaceBtwn">
        <button className="button" onClick={prevStep}>
          Précédent
        </button>
        <button className="button" onClick={nextStep}>
          Suivant
        </button>
      </div>
    </>
  );
};

export default StepTwo;
