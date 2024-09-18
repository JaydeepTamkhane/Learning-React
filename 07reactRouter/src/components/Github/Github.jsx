import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState({}); // use an empty object as the initial state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/JaydeepTamkhane');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 m-4 text-3xl text-center text-white bg-gray-600 ">
      Github Followers: {data.followers }
      <img src={data.avatar_url} alt="git_picture"  width={300}/>
    </div>
  );
}

export default Github;
