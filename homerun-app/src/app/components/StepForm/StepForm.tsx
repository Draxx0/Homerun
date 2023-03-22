import { useState } from "react";
import Dropzone from "../Dropzone/Dropzone";
interface FormValues {
  location: string;
  address: string;
  category: string;
  type: string;
}

function FormStepOne(props: {
  formData: FormValues;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  nextStep: () => void;
}) {
  const { formData, handleChange, nextStep } = props;

  return (
    <>
      <div className="step">
        <div className="form-group column gap-1">
          <label htmlFor="category">Type de propriété</label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={formData.category ? formData.category : "default"}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Sélectionner ici
            </option>
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
            <option value="villa">Villa</option>
            <option value="bureaux">Bureaux</option>
          </select>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="type">Est-ce une location ou une vente ?</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            value={formData.type ? formData.type : "default"}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Sélectionner ici
            </option>
            <option value="rent">Location</option>
            <option value="sell">Vente</option>
          </select>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="location">
            Dans quel ville se situe votre propriété ?
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ex: Paris"
            required
          />
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="address">
            Renseigner l'addresse de votre propriété
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Ex: 12 rue de la paix"
            required
          />
        </div>
      </div>
      <div className="row alignCenter">
        {/* <button onClick={prevStep}>Précédent</button> */}
        <button className="button" onClick={nextStep}>
          Suivant
        </button>
      </div>
    </>
  );
}

function FormStepTwo(props: {
  formData: FormValues;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  prevStep: () => void;
  nextStep: () => void;
}) {
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
}

function FormStepThree(props: {
  formData: FormValues;
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
  const [formData, setFormData] = useState<FormValues>({
    location: "",
    address: "",
    category: "",
    type: "",
  });
  const [step, setStep] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
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
      {step === 1 && (
        <FormStepOne
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <FormStepTwo
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
    </>
  );
};

export default StepForm;
