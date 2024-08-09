import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    Technology: false,
    Health: false,
    Travel: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedInterests = Object.keys(interests).filter(
      (interest) => interests[interest]
    );

    const interestsText = selectedInterests.length > 0 ? selectedInterests.join(", ") : "No interests selected";

    setSubmittedData({
      name,
      email,
      interests: interestsText,
    });
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form id="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="checkbox"
            id="interest1"
            name="Technology"
            checked={interests.Technology}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="interest1">Technology</label>
          <input
            type="checkbox"
            id="interest2"
            name="Health"
            checked={interests.Health}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="interest2">Health</label>
          <input
            type="checkbox"
            id="interest3"
            name="Travel"
            checked={interests.Travel}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="interest3">Travel</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div id="message">
          <pre>
            Name: {submittedData.name}
            {"\n"}
            Email: {submittedData.email}
            {"\n"}
            Interests: {submittedData.interests}
          </pre>
        </div>
      )}
    </main>
  );
}

export default App;
