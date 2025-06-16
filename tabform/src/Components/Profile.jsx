const Profile = () => {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const labelStyle = {
    display: "inline-block",
    width: "60px", // Make all labels same width
    textAlign: "right",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <div style={rowStyle}>
        <span style={labelStyle}>Name:</span>
        <input type="text" />
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Email:</span>
        <input type="text" />
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Age:</span>
        <input type="number" />
      </div>
    </div>
  );
};

export default Profile;
