import React from "react";
import Step1Form from "./stepForms/Step1Form";
import Step2Form from "./stepForms/Step2Form";
import Step3Form from "./stepForms/Step3Form";

type FormProps = {
  step: number;
  formData: any;
  updateFormData: (newData: any) => void;
  errors: { [key: string]: string };
};

const Form = ({ step, formData, updateFormData, errors }: FormProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  switch (step) {
    case 1:
      return (
        <Step1Form
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    case 2:
      return (
        <Step2Form
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    case 3:
      return <Step3Form formData={formData} handleChange={handleChange} />;
    default:
      return null;
  }
};

export default Form;
