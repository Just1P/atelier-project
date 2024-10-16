import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

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

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Submitting all form data:", formData);
    alert("Form Submitted!");
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = (currentStep: number) => {
    let newErrors: { [key: string]: string } = {};

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

  return (
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
  );
};

export default App;
