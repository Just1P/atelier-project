import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";
import "./main-css/main.css";

const App = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    accountType: "",
    name: "",
    email: "",
    password: "",
    age: "",
    interest: "",
    bio: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      setIsSubmitted(true);
    }
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const validateStep = (currentStep: number) => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.accountType) {
        newErrors.accountType = "You must select an account type";
      }
    }

    if (currentStep === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      {isSubmitted ? (
        <ConfirmationPage name={formData.name} email={formData.email} />
      ) : (
        <div className="app-container">
          <Header step={step} totalSteps={totalSteps} />
          <Form
            step={step}
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
          <Footer
            step={step}
            totalSteps={totalSteps}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default App;
