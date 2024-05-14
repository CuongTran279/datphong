import React from "react";
import FormSearch from "./FormSearch";

const MainContent = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-[1930px] h-[320px] "
        style={{
          backgroundImage:
            'url("https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png")',
        }}
      ></div>
      <div className="w-1124 m-auto h-full border flex justify-center flex-row">
        <FormSearch />
      </div>
    </div>
  );
};

export default MainContent;
