type ConfirmationPageProps = {
  name: string;
  email: string;
};

const ConfirmationPage = ({ name, email }: ConfirmationPageProps) => {
  return (
    <div>
      <h2>Congrats {name}!</h2>
      <p>Registration Successful</p>
      <p>Email confirmation sent to {email}</p>
    </div>
  );
};

export default ConfirmationPage;
