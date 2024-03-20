import Information from "@/components/Information";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex gap-5 py-5">
      <div className="w-[20%]">
        <Information />
      </div>
      <div className="w-[80%] border border-ctp-text">Repo</div>
    </div>
  );
};

export default HomePage;
