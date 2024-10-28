import { Add } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPuppyForm from "./AddPuppyForm";

const AllPuppies = () => {
  const [puppies, setPuppies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPuppies() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players/"
        );
        const result = await response.json();

        const puppyArray = result.data.players;
        console.log(puppyArray);

        setPuppies(puppyArray);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPuppies();
  }, []);
  if (!puppies) {
    return;
  }
  const filteredPuppies = puppies.filter((puppy) =>
    puppy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredPuppies.map((puppy) => (
          <div key={puppy.id} onClick={() => navigate(`/${puppy.id}`)}>
            {puppy.name}
          </div>
        ))}
      </div>

      <AddPuppyForm />
    </>
  );
};

export default AllPuppies;
