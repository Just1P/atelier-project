import "../global-css/components-css/Header.css";

type HeaderProps = {
  step: number;
  totalSteps: number;
};

const Header = ({ step, totalSteps }: HeaderProps) => {
  const renderStepIndicator = () => {
    const indicators = [];
    for (let i = 1; i <= totalSteps; i++) {
      indicators.push(
        <div key={i} className="step-container">
          <div className={`step-indicator ${i <= step ? "active-step" : ""}`}>
            <span
              className={`step-text ${i <= step ? "active-step-text" : ""}`}
            >
              {i}
            </span>
          </div>
          {i < totalSteps && (
            <div className={`line ${i < step ? "active-line" : ""}`} />
          )}
        </div>
      );
    }
    return <div className="indicator-container">{indicators}</div>;
  };

  return (
    <header>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      {renderStepIndicator()}
    </header>
  );
};

export default Header;
