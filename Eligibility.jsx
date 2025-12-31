import { useState } from "react";

function Eligibility() {
  const [form, setForm] = useState({
    age: "",
    category: "",
    education: "",
    income: ""
  });

  const [schemes, setSchemes] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function check() {
    const res = await fetch("http://localhost:5000/check-eligibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setSchemes(data);
  }

  return (
    <div>
      <h2>Check Scheme Eligibility</h2>

      <input name="age" onChange={handleChange} />
      <input name="category" onChange={handleChange} />
      <input name="education" onChange={handleChange} />
      <input name="income" onChange={handleChange} />

      <button onClick={check}>Check</button>

      <ul>
        {schemes.map(s => (
          <li key={s._id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Eligibility;
