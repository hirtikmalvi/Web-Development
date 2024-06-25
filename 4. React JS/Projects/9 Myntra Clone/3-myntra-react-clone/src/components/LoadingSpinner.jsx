const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center welcomeMessage spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "6rem", height: "6rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
