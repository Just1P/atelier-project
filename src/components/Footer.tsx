import "../global-css/components-css/Header.css";

type FooterProps = {
  step: number;
  totalSteps: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
};

const Footer = ({
  step,
  totalSteps,
  handleNext,
  handlePrevious,
  handleSubmit,
}: FooterProps) => {
  return (
    <footer>
      <div className="button-container">
        {step > 1 && (
          <button onClick={handlePrevious} className="previous-button">
            Previous
          </button>
        )}
        {step < totalSteps ? (
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="done-button">
            Done
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
