function Footer() {
  var containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333741",
    color: "#ccc",
    padding: "1rem",
  };

  var innerContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <div>
        <h3>Made by Shubham Tiwari</h3>
      </div>
      <div style={innerContainer}>
        <h6>Contact&nbsp;</h6>
        <h6>7906258880&nbsp;</h6>
        <h6>st8896464352@gmail.com&nbsp;</h6>
      </div>
    </div>
  );
}

export default Footer;
