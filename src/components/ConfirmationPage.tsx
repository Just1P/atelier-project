import "./component-css/Confirmation-Page-css/Confirmation-Page.css";
import successIcon from "../assets/images/succes-icon.png"; // Remplace par le chemin de ton icône de validation

type ConfirmationPageProps = {
  name: string;
  email: string;
};

const ConfirmationPage = ({ name, email }: ConfirmationPageProps) => {
  return (
    <div className="confirmation-container no-background">
      <div className="background-circles"></div>
      <div className="confirmation-content">
        <img src={successIcon} alt="Success" className="success-icon" />
        <h2>Congrats {name}</h2>
        <p>Registration Successful</p>
        <p>Email confirmation sent to {email}</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
