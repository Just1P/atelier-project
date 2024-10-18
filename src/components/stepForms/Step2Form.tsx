import "../component-css/Form2-css/Form2.css";

type Step2FormProps = {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
};

const Step2Form = ({ formData, handleChange, errors }: Step2FormProps) => {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="form-input"
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="johndoe@mail.com"
          className="form-input"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
          className="form-input"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>
    </div>
  );
};

export default Step2Form;
