import { useState } from "react";

export default function AddPuppyForm() {
  const [puppyName, setPuppyName] = useState("");
  const [breed, setBreed] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(puppyName, breed);
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: puppyName,
            breed: breed,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Puppy Name:
          <input onChange={(e) => setPuppyName(e.target.value)} />
        </label>

        <label>
          Breed:
          <input onChange={(e) => setBreed(e.target.value)} />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
