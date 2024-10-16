import "./component-css/Header.css";

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
          <div className={`line`} />
          <div className={`step-indicator ${i === step ? "active-step" : ""}`}>
            <span
              className={`step-text ${i === step ? "active-step-text" : ""}`}
            >
              {i}
            </span>
          </div>
          <div className={`line`} />
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
