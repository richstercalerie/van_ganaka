import React from "react";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="text-2xl font-bold pt-14">
      
      <iframe
        title="forestcoveranalysis"
        width="1260"
        height="1041.25"
        src="https://app.powerbi.com/reportEmbed?reportId=8c001da3-bde2-4e3a-807e-b1850323f572&autoAuth=true&ctid=1c87fdb6-051d-43a4-a73c-ad6de4fac5b2"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Home;
