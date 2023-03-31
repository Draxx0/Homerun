import { useEffect, useRef, useState } from "react";
import PropertyServices from "../../../../api/services/properties.service";
import house from "../../../assets/icons/house.png";
import apartment from "../../../assets/icons/apartment.png";
import office from "../../../assets/icons/office.png";
import villa from "../../../assets/icons/villa.png";
import { IPropertyCreate } from "../../../../api/utils/property";

const StepOne = (props: {
  formData: IPropertyCreate;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  nextStep: () => void;
  setFormData: (formData: IPropertyCreate) => void;
}) => {
  const { handleChange, nextStep, setFormData, formData } = props;
  const [formDataDiscord, setFormDataDiscord] = useState<any>({
    name: "test",
    location: "azeaze",
    address: "azeaze",
    category: "Maison",
    type: "rent",
    propertySize: "azeaze",
    cover: "azeaze",
    price: 13,
    description: "azeaze",
    images: [],
    availableAt: "azeaze",
  });
  const [roomNumber, setRoomNumber] = useState<number>(0);
  const [bedRoomNumber, setBedRoomNumber] = useState<number>(0);
  const [terraceNumber, setTerraceNumber] = useState<number>(0);
  const [balconyNumber, setBalconyNumber] = useState<number>(0);

  const sendDiscord = async () => {
    try {
      await PropertyServices.create(formDataDiscord);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formData) {
      setFormData({
        ...formData,
        propertyStuff: {
          ...formData.propertyStuff,
          totalRooms: roomNumber + bedRoomNumber,
          totalBedrooms: bedRoomNumber,
          totalTerraces: terraceNumber,
          totalBalconies: balconyNumber,
        },
      });
    }
  }, [roomNumber, bedRoomNumber, terraceNumber, balconyNumber]);

  const handleChangeRoomsData = (
    e: React.MouseEvent<HTMLElement>,
    method: string
  ) => {
    const target = e.target as HTMLButtonElement;
    console.log("TARGET", target.name);
    if (target.name === "roomNumber") {
      setRoomNumber(method === "increment" ? roomNumber + 1 : roomNumber - 1);
    }

    if (target.name === "bedRoomNumber") {
      setBedRoomNumber(
        method === "increment" ? bedRoomNumber + 1 : bedRoomNumber - 1
      );
    }

    if (target.name === "terraceNumber") {
      setTerraceNumber(
        method === "increment" ? terraceNumber + 1 : terraceNumber - 1
      );
    }

    if (target.name === "balconyNumber") {
      setBalconyNumber(
        method === "increment" ? balconyNumber + 1 : balconyNumber - 1
      );
    }
  };

  return (
    <>
      <div className="step">
        <div className="form-group column gap-1">
          <label htmlFor="propertySize" className="step__title">
            Souhaitez-vous louer ou vendre votre bien ?
          </label>

          <div className="input-wrapper">
            <div className="select-type">
              <input
                type="radio"
                name="type"
                id=""
                value="sell"
                onChange={handleChange}
              />
              <div className="column alignCenter">
                <label htmlFor="">Vendre</label>
              </div>
            </div>
            <div className="select-type">
              <div className="column alignCenter">
                <label htmlFor="">Louer</label>
              </div>
              <input
                type="radio"
                name="type"
                id=""
                value="rent"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="category" className="step__title">
            Quel type de bien souhaitez-vous déposer ?
          </label>
          <div className="input-wrapper">
            <div className="select-category">
              <input
                type="radio"
                name="category"
                id=""
                value="appartement"
                onChange={handleChange}
              />
              <div className="column alignCenter">
                <label htmlFor="">Appartement</label>
                <img src={apartment} alt="" />
              </div>
            </div>
            <div className="select-category">
              <div className="column alignCenter">
                <label htmlFor="">Maison</label>
                <img src={house} alt="" />
              </div>
              <input
                type="radio"
                name="category"
                id=""
                value="maison"
                onChange={handleChange}
              />
            </div>
            <div className="select-category">
              <div className="column alignCenter">
                <label htmlFor="">Bureaux</label>
                <img src={office} alt="" />
              </div>
              <input
                type="radio"
                name="category"
                id=""
                value="bureaux"
                onChange={handleChange}
              />
            </div>
            <div className="select-category">
              <div className="column alignCenter">
                <label htmlFor="">Villa</label>
                <img src={villa} alt="" />
              </div>
              <input
                type="radio"
                name="category"
                id=""
                value="villa"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="propertySize" className="step__title">
            Quelle est la surface de votre bien
          </label>

          <div className="input-wrapper-text property-size">
            <input
              type="tel"
              name="propertySize"
              id="propertySize"
              maxLength={4}
              onChange={handleChange}
            />
            <small className="m²">m²</small>
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="propertySize" className="step__title">
            Combien y a-t-il de pièces et de chambres ?
          </label>

          <div className="column">
            <small className="bold">Combien y'a il de pièces ?</small>

            <div className="styled-input-wrapper">
              <button
                disabled={roomNumber === 0}
                className={
                  roomNumber === 0 ? "less less-disabled" : "less less-active"
                }
                name="roomNumber"
                onClick={(e) => handleChangeRoomsData(e, "decrement")}
              ></button>
              <span>{roomNumber}</span>
              <button
                className="more more-active"
                name="roomNumber"
                onClick={(e) => handleChangeRoomsData(e, "increment")}
              ></button>
            </div>

            <small className="gray">
              La cuisine, la salle de bain et les toilettes ne sont pas à
              prendre en compte.
            </small>
          </div>

          <div className="column">
            <small className="bold">Combien y a-t-il de chambres ?</small>

            <div className="styled-input-wrapper">
              <button
                disabled={bedRoomNumber === 0}
                className={
                  bedRoomNumber === 0
                    ? "less less-disabled"
                    : "less less-active"
                }
                name="bedRoomNumber"
                onClick={(e) => handleChangeRoomsData(e, "decrement")}
              ></button>
              <span>{bedRoomNumber}</span>
              <button
                className="more more-active"
                name="bedRoomNumber"
                onClick={(e) => handleChangeRoomsData(e, "increment")}
              ></button>
            </div>
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="propertySize" className="step__title">
            Votre bien est-il meublé ?
          </label>

          <div className="input-wrapper-text column gap-1">
            <div className="row gap-1">
              <div className="select-furnitured gap-1">
                <div className="wrapper">
                  <input
                    type="radio"
                    name="isFurnitured"
                    id=""
                    value="true"
                    onChange={handleChange}
                  />

                  <label htmlFor="isFurnitured">Oui</label>
                </div>
              </div>

              <div className="select-furnitured gap-1">
                <div className="wrapper">
                  <input
                    type="radio"
                    name="isFurnitured"
                    id=""
                    value="false"
                    onChange={handleChange}
                  />

                  <label htmlFor="isFurnitured">Non</label>
                </div>
              </div>
            </div>
            {formData.type === "rent" && (
              <small className="gray">
                Une location est considérée meublée si un locataire peut y
                vivre, manger et dormir convenablement en n’apportant que ses
                affaires personnelles sans mobilier.
              </small>
            )}
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="propertySize" className="step__title">
            Quels sont les avantages du bien à mettre en avant ?
          </label>

          <div className="column">
            <small className="bold">Terrasse</small>
            <div className="styled-input-wrapper">
              <button
                disabled={terraceNumber === 0}
                className={
                  terraceNumber === 0
                    ? "less less-disabled"
                    : "less less-active"
                }
                name="terraceNumber"
                onClick={(e) => handleChangeRoomsData(e, "decrement")}
              ></button>
              <span>{terraceNumber}</span>
              <button
                className="more more-active"
                name="terraceNumber"
                onClick={(e) => handleChangeRoomsData(e, "increment")}
              ></button>
            </div>
          </div>

          <div className="column">
            <small className="bold">Balcon</small>
            <div className="styled-input-wrapper">
              <button
                disabled={balconyNumber === 0}
                className={
                  balconyNumber === 0
                    ? "less less-disabled"
                    : "less less-active"
                }
                name="balconyNumber"
                onClick={(e) => handleChangeRoomsData(e, "decrement")}
              ></button>
              <span>{balconyNumber}</span>
              <button
                className="more more-active"
                name="balconyNumber"
                onClick={(e) => handleChangeRoomsData(e, "increment")}
              ></button>
            </div>
          </div>
        </div>

        <div className="form-group column gap-1">
          <label htmlFor="price" className="step__title">
            À combien voulez vous louer votre bien ?
          </label>

          <div className="column">
            <label htmlFor="price">
              Indiquer le {formData.type === "rent" ? "loyer" : "prix de vente"}
            </label>
            <div className="input-wrapper-text property-size">
              <input
                type="tel"
                name="price"
                id="price"
                maxLength={formData.type === "rent" && 4 as any}
                onChange={handleChange}
              />
              <small className="m²">
                {formData.type === "rent" ? "€/mois" : "€"}
              </small>
            </div>
          </div>
        </div>

        <div className="row alignCenter">
          <button className="button" onClick={nextStep}>
            Suivant
          </button>
          {/* <button onClick={() => sendDiscord()}>SEND DATA DS</button>
      <input
        type="file"
        name="image"
        id=""
        onChange={(e) => {
          setFormDataDiscord((prevState: any) => ({
            ...prevState,
            images: e.target.files
              ? [...prevState.images, e.target.files[0]]
              : prevState.images,
          }));
        }}
      /> */}
        </div>
      </div>
    </>
  );
};

export default StepOne;
