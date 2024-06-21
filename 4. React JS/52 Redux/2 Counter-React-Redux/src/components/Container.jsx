const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "60%" }}>
      {children}
    </div>
  );
};

export default Container;
