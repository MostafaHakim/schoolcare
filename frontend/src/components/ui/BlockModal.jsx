import { KeyIcon, KeyRound, Trash2, TriangleAlert } from "lucide-react";
import React from "react";

const BlockModal = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-44 p-2 shadow-md rounded-[12px] space-y-2 ">
      <button className="w-full flex flex-row items-center justify-start space-x-2 border border-gray-100 p-2 rounded-[10px]">
        <span className="p-2 rounded-md border border-gray-100 text-orange-400">
          <KeyRound size={12} />
        </span>
        <span className="text-[17px]">Block</span>
      </button>
      <button className="w-full flex flex-row items-center justify-start space-x-2 border border-gray-100 p-2 rounded-[10px]">
        <span className="p-2 rounded-md border border-gray-100 text-gray-700">
          <TriangleAlert size={12} />
        </span>
        <span className="text-[17px]">Restricted</span>
      </button>
      <button className="w-full flex flex-row items-center justify-start space-x-2 border border-gray-100 p-2 rounded-[10px]">
        <span className="p-2 rounded-md border border-gray-100 text-red-500">
          <Trash2 size={12} />
        </span>
        <span className="text-[17px]">Delete</span>
      </button>
    </div>
  );
};

export default BlockModal;
