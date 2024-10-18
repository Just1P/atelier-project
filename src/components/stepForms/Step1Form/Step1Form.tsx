import voidCard from "../../assets/images/card-void.jpg";
import completedCard from "../../assets/images/card-completed.jpg";
import "../Step1Form/Form1.css";

type Step1FormProps = {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
};

const Step1Form = ({ formData, handleChange, errors }: Step1FormProps) => {
  const isPersonalSelected = formData.accountType === "personal";
  const isBusinessSelected = formData.accountType === "business";

  const toggleSelection = (accountType: string) => {
    if (formData.accountType === accountType) {
      // Si l'utilisateur clique à nouveau sur une option déjà sélectionnée, désélectionner
      handleChange({
        target: { name: "accountType", value: "" },
      } as any);
    } else {
      handleChange({
        target: { name: "accountType", value: accountType },
      } as any);
    }
  };

  return (
    <div className="account-selection-container">
      <p className="form-title">Choose your account type</p>
      <div
        className={`account-option ${isPersonalSelected ? "selected" : ""}`}
        onClick={() => toggleSelection("personal")}
      >
        <img
          src={isPersonalSelected ? completedCard : voidCard}
          alt="Personal Account"
          className="account-image"
        />
        <div className="account-details">
          <h3>Personal Account</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>

      <div
        className={`account-option ${isBusinessSelected ? "selected" : ""}`}
        onClick={() => toggleSelection("business")}
      >
        <img
          src={isBusinessSelected ? completedCard : voidCard}
          alt="Business Account"
          className="account-image"
        />
        <div className="account-details">
          <h3>Business Account</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>

      {errors.accountType && <p className="error-text">{errors.accountType}</p>}
    </div>
  );
};

export default Step1Form;
