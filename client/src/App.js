import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [storeUserData, setStoreUserData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/633ebf78e804bbeb633491b7")
      .then((res) => {
        console.log(res.data);
        setStoreUserData(res.data);
      });
    return () => {};
  }, []);

  return (
    <div className="App">
      <h2>Hello World</h2>
      {storeUserData?.users ? (
        <h2>{storeUserData.users.username}</h2>
      ) : (
        "Check The UID"
      )}
    </div>
  );
}

export default App;
