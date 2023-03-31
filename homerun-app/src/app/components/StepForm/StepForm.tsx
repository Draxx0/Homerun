import { useEffect, useState } from "react";
import { IPropertyCreate } from "../../../api/utils/property";
import StepOne from "./StepOne/StepOne";
import StepRecap from "./StepRecap/StepRecap";
import StepTwo from "./StepTwo/StepTwo";

function FormStepThree(props: {
  formData: IPropertyCreate;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  submit: () => void;
}) {
  const { formData, handleChange, prevStep, submit } = props;

  return (
    <div className="step">
      <input type="password" name="password" onChange={handleChange} />
      <button onClick={prevStep}>Précédent</button>
      <button onClick={submit}>Soumettre</button>
    </div>
  );
}

const StepForm = () => {
  const [formData, setFormData] = useState<IPropertyCreate>(
    {} as IPropertyCreate
  );
  const [step, setStep] = useState<number>(1);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submit = () => {
    if (
      formData.location &&
      formData.address &&
      formData.type &&
      formData.category
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (formData.isFurnitured) {
      setFormData({
        ...formData,
        isFurnitured: JSON.parse(formData.isFurnitured as string),
      });
    }
  }, [formData.isFurnitured]);

  return (
    <>
      <div className="step-advance">
        <div className="step-advance__item">
          <div
            className={
              step === 1 || step === 2
                ? "step-advance__item__number step-advance__item__number-active"
                : "step-advance__item__number"
            }
          >
            1
          </div>
          <div className="step-advance__item__title">Informations</div>
        </div>
        <div
          className={
            step === 2
              ? "step-advance__linkbar step-advance__linkbar-active"
              : "step-advance__linkbar"
          }
        ></div>
        <div className="step-advance__item">
          <div
            className={
              step === 2
                ? "step-advance__item__number step-advance__item__number-active"
                : "step-advance__item__number"
            }
          >
            2
          </div>
          <div className="step-advance__item__title">Photos</div>
        </div>
      </div>

      <div className="row">
        {step === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}
        {step === 3 && (
          <FormStepThree
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            submit={submit}
          />
        )}
        {isValid && <p>Formulaire validé !</p>}

        <StepRecap formData={formData} />
      </div>
    </>
  );
};

export default StepForm;
