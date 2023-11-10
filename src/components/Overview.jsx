import React from "react";
import { Plus } from "lucide-react";
const Overview = () => {
  return (
    <div className="flex justify-center items-center my-[55px] overview">
      <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto w-full gap-5 ">
        <div className="flex flex-col justify-center items-center shadow pb-5  ">
          <span className="flex text-[48px] font-semibold text-[#ff2e63] justify-center items-center ">
            <h1>4</h1>
            <Plus size={48} color="#ff2e63" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-black ">Projects</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow pb-5">
          <span className="flex text-[48px] font-semibold text-[#ff2e63] justify-center items-center">
            <h1>3</h1>
            <Plus size={48} color="#ff2e63" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-black ">Blogs</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow pb-5">
          <span className="flex text-[48px] font-semibold text-[#ff2e63] justify-center items-center">
            <h1>200</h1>
            <Plus size={48} color="#ff2e63" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-black ">Article Views</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
