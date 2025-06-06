/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from "@xyflow/react";
import { Mail } from "lucide-react";


export const ColdEmailNode = ({ data }: any) => {


    
  return (
    <div
      className="relative flex items-center w-80 p-4 border border-gray-300 rounded-xl bg-white shadow-sm hover:border-purple-400 transition-all"
    
    >


      <div className="flex items-center justify-center w-16 h-12 rounded-lg bg-purple-50 border border-purple-400 mr-4">
        <Mail className="h-8 w-8 text-purple-500" />
      </div>


      <div>
        <h3 className="text-gray-800 font-bold text-lg">Email</h3>
        <p className="text-gray-600 mt-1">
          Subject:{" "}
          <span className="text-purple-600 font-semibold">
            {data.subject}
          </span>
        </p>
        <p className="text-gray-600 mt-1">
          Body:{" "}
          <span className="text-purple-600 font-semibold">
            {data.body}
          </span>
        </p>
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};
