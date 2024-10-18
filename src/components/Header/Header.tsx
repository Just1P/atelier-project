import "./Header.css";

type HeaderProps = {
  step: number;
  totalSteps: number;
};

const stepDescriptions = [
  "Account Type",
  "Personal Information",
  "Profile Data",
];

const Header = ({ step, totalSteps }: HeaderProps) => {
  const renderStepIndicator = () => {
    const indicators = [];
    for (let i = 1; i <= totalSteps; i++) {
      const descriptionClass = i === 2 ? "two-lines" : "";
      const containerClass = i !== 2 ? "adjusted-step" : "";
      indicators.push(
        <div key={i} className={`step-container ${containerClass}`}>
          <div className={`step-indicator ${i === step ? "active-step" : ""}`}>
            <span
              className={`step-text ${i === step ? "active-step-text" : ""}`}
            >
              {i}
            </span>
          </div>
          <span className={`step-description ${descriptionClass}`}>
            {stepDescriptions[i - 1]}
          </span>
        </div>
      );
    }
    return <div className="indicator-container">{indicators}</div>;
  };

  return (
    <header>
      <div className="header">
        <h1>Registration Form</h1>
        <p>Please fill out this form with the required information</p>
      </div>
      {renderStepIndicator()}
    </header>
  );
};

export default Header;
