import { useEffect } from "react";
import React from "react";

function Vegan() {
  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const api = await fetch(
        "https://api.spoonacular.com/recipes/random!apiKey=${process.env.REACT_APP_API_KEY}&number=5",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Recipe 1'
        })
        
    )
  }
  return <div>Vegan</div>;
}

export default Vegan;
