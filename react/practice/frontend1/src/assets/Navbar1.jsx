const Navbar1 = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#0072f4ff",
        color: "white",
      }}
    >
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
    </nav>
  );
};

export default Navbar1;