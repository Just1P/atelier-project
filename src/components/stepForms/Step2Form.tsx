import React from "react";

type Step2FormProps = {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
};

const Step2Form = ({ formData, handleChange, errors }: Step2FormProps) => {
  return (
    <>
      <h2>Je suis à l'étape 2</h2>
      <p>Veuillez entrer vos informations personnelles :</p>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom complet"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </label>
      </div>
    </>
  );
};

export default Step2Form;
