import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  return (
    <div>
      <h3>Home content coming soon {authInfo.name} </h3>
    </div>
  );
};

export default Home;
