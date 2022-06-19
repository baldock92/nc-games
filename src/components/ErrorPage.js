import "../styles/ErrorPage.css";

const ErrorPage = ({ errorMessage }) => {
  return (
    <div>
      <h2 className="ErrorPage__header">Error! {errorMessage.status} - {errorMessage.data.msg}</h2>
      <img
        src="https://miro.medium.com/max/640/0*HZKw9Nx20i4bZdOF.jpg"
        alt="error meme"
      />
    </div>
  );
};

export default ErrorPage;
