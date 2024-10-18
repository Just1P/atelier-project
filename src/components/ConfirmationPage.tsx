import "./component-css/Confirmation-Page-css/Confirmation-Page.css";
import successIcon from "../assets/images/succes-icon.png"; // Remplace par le chemin de ton icône de validation

type ConfirmationPageProps = {
  name: string;
  email: string;
};

const ConfirmationPage = ({ name, email }: ConfirmationPageProps) => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <img src={successIcon} alt="Success" className="success-icon" />
        <h3>Congrats {name}</h3>
        <h3>Registration Successful</h3>
        <h3>Email confirmation sent to {email}</h3>
      </div>
    </div>
  );
};

export default ConfirmationPage;
