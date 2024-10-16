import React from "react";

type Step1FormProps = {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
};

const Step1Form = ({ formData, handleChange, errors }: Step1FormProps) => {
  return (
    <>
      <h2>Je suis à l'étape 1</h2>
      <p>Veuillez choisir un type de compte :</p>
      <div>
        <label>
          <input
            type="radio"
            name="accountType"
            value="Personal Account"
            checked={formData.accountType === "Personal Account"}
            onChange={handleChange}
          />
          Personal Account
        </label>
        <label>
          <input
            type="radio"
            name="accountType"
            value="Business Account"
            checked={formData.accountType === "Business Account"}
            onChange={handleChange}
          />
          Business Account
        </label>
      </div>
      {errors.accountType && (
        <p style={{ color: "red" }}>{errors.accountType}</p>
      )}
    </>
  );
};

export default Step1Form;
