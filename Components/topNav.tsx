import Link from "next/link";
import { MouseEventHandler } from "react";
import button from "./button";

type TopNavProps = {
  activeButton: 'exercises' | 'set_reps';
};

const TopNav = ({ activeButton }: TopNavProps) => {
  return (
    <div style={{ fontWeight: 600, fontSize:32, fontStretch: '70%', font:' Anton'   }}  
    className="    uxBackground fixed  text-left justify-center 
     w-screen top-0  flex space-x-4 mx-0">
      <Link href={"/exercises"}>
        <button 
          style={{ 
            color:
              activeButton === "exercises"
                ? "rgba(90, 90, 90, 1)"
                : "rgba(169, 169, 169, 1)",
          }}
          className="flex justify-center mt-12 relative"
        >
          ÖVNINGAR
          {activeButton === "exercises" && (
            <div className="uxRedMark absolute bottom-0 left-0"></div>
          )}
        </button>
      </Link>
      <Link href={"/set_reps"}>
        <button
          style={{ 
            
            color:
              activeButton === "set_reps"
                ? "rgba(90, 90, 90, 1)"
                : "rgba(169, 169, 169, 1)",
          }}
          className="flex justify-center mt-12 relative"
        >
          MITT PASS
          {activeButton === "set_reps" && (
            <div className="uxRedMark absolute -bottom-1/2 transform -translate-x-1/2 translate-y-1/2 ml-0"></div>
          )}
        </button>
      </Link>
    </div>
  );
};

export default TopNav;
