import React from "react";
import { FaUser } from "react-icons/fa";

const User = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full border-2 border-orange-400 flex items-center justify-center cursor-pointer">
      <FaUser className="text-orange" size={30} />
    </div>
  );
};

export default User;
