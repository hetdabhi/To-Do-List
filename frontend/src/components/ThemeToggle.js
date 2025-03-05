import React from "react";

const ThemeToggle = ({ setTheme }) => {
  return (
    <>
      {/* Profile Section on the Left */}
      <div style={styles.profileContainer}>
        <a href="https://github.com/hetdabhi" target="_blank" rel="noopener noreferrer" style={styles.profileLink}>
          <img
            src="https://github.com/hetdabhi.png"
            alt="Het Dabhi"
            style={styles.profileImage}
          />
          <span style={styles.profileText}>Het Dabhi</span>
        </a>
      </div>

      {/* Theme Toggle on the Right */}
      <div style={styles.themeSwitcher}>
        <button onClick={() => setTheme("light-mode")} style={{ ...styles.dot, backgroundColor: "#f0f0f0" }}></button>
        <button onClick={() => setTheme("dark-mode")} style={{ ...styles.dot, backgroundColor: "#333" }}></button>
        <button onClick={() => setTheme("threeD-mode")} style={{ ...styles.dot, background: "linear-gradient(145deg, #ff758c, #ff4a6e)" }}></button>
      </div>
    </>
  );
};

const styles = {
  profileContainer: {
    position: "absolute",
    top: "10px",
    left: "20px",
    display: "flex",
    alignItems: "center",
  },
  profileLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
  profileImage: {
    width: "50px",  // Increased size
    height: "50px",
    borderRadius: "50%",
    border: "2px solid white",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  profileText: {
    marginLeft: "12px",
    fontSize: "18px",  // Increased text size
    fontWeight: "bold",
  },
  themeSwitcher: {
    position: "absolute",
    top: "10px",
    right: "20px",
    display: "flex",
    gap: "10px",
  },
  dot: {
    width: "25px",  // Increased size of theme dots
    height: "25px",
    borderRadius: "50%",
    border: "2px solid white",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.2s ease",
  },
};

export default ThemeToggle;
