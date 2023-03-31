import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const ProfileView = () => {
  const { user } = useContext(UserContext);
  const [isEmailUpdatable, setIsEmailUpdatable] = useState<boolean>(false);

  return (
    <section className="section-profile-view">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={user?.firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={user?.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Addresse email</label>
          <div className="row">
            <input
              type="email"
              name="email"
              id="email"
              className={!isEmailUpdatable ? "input-disabled" : ""}
              value={user?.email}
              disabled={isEmailUpdatable ? false : true}
            />
            <button
              type="button"
              className="button"
              onClick={() => setIsEmailUpdatable(!isEmailUpdatable)}
            >
              {isEmailUpdatable ? "Annuler" : "Modifier"}
            </button>
          </div>

          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </section>
  );
};

export default ProfileView;
