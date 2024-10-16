import React from "react";

type Step3FormProps = {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Step3Form = ({ formData, handleChange }: Step3FormProps) => {
  return (
    <>
      <h2>Je suis à l'étape 3</h2>
      <p>Veuillez entrer vos informations supplémentaires :</p>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Âge"
          />
        </label>
      </div>
      <div>
        <label>
          Area of interest:
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            placeholder="Centre d'intérêt"
          />
        </label>
      </div>
      <div>
        <label>
          Bio/Description:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Parlez de vous..."
          />
        </label>
      </div>
    </>
  );
};

export default Step3Form;
