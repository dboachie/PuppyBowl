import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePuppy = () => {
  const { id } = useParams();
  const [puppy, setPuppy] = useState(null);
  useEffect(() => {
    async function getPuppies() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players/${id}`
        );
        const result = await response.json();

        setPuppy(result.data.player);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPuppies();
  }, []);

  return (
    <>
      <div>
        <h1>Details for puppy ID: {id}</h1>
        {puppy ? (
          <div>
            <h3>{puppy.name}</h3>
            <h3>{puppy.breed}</h3>
            <h3>{puppy.status}</h3>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={() => (window.location.href = "/")}>Back</button>
      </div>
    </>
  );
};

export default SinglePuppy;
