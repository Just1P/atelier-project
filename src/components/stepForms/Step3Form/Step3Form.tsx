import "../Step3Form/Form3.css";

type Step3FormProps = {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Step3Form = ({ formData, handleChange }: Step3FormProps) => {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="John Doe"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="interest">Area of interest</label>
        <input
          type="text"
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          placeholder="Frontend"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio / Description</label>
        <input
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Lorem ipsum"
          className="form-textarea"
        ></input>
      </div>
    </div>
  );
};

export default Step3Form;
