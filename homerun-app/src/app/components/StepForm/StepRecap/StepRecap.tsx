import { IPropertyCreate } from "../../../../api/utils/property";

const StepRecap = ({ formData }: { formData: IPropertyCreate }) => {
  return (
    <div className="step-recap">
      <span className="bold">Récapitulatif en temps réel</span>

      <div className="step-recap__content">
        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title colored bold">
            {formData.type
              ? formData.type === "sell"
                ? "Vente de mon bien"
                : "Location de mon bien"
              : "Sélectionnez une option"}
          </p>
        </div>

        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title">
            Type de bien :{" "}
            <span className="colored bold capitalize">{formData.category}</span>
          </p>
        </div>

        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title">
            Surface :{" "}
            <span className="colored bold">
              {formData.propertySize} {formData.propertySize && "m²"}
            </span>
          </p>
        </div>

        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title">
            Nombre de pièces :{" "}
            <span className="colored bold">
              {formData.propertyStuff && formData.propertyStuff.totalRooms}
            </span>
          </p>
        </div>

        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title">
            {formData.isFurnitured && (
              <span className="colored bold">
                {formData.isFurnitured === true ? "Meublé" : "Non meublé"}
              </span>
            )}
          </p>
        </div>

        <div className="step-recap__content__item">
          <p className="step-recap__content__item__title">
            {formData.propertyStuff &&
              formData.propertyStuff.totalTerraces !== 0 && (
                <span className="colored bold">
                  {formData.propertyStuff.totalTerraces + " " + "Terrasse(s)"},{" "}
                </span>
              )}{" "}
            {formData.propertyStuff &&
              formData.propertyStuff.totalBalconies !== 0 && (
                <span className="colored bold">
                  {formData.propertyStuff.totalBalconies + " " + "Balcon(s)"}
                </span>
              )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepRecap;
