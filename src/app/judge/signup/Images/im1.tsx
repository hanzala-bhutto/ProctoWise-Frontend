import React from "react";
import Image from "next/image";
export default function(){
    return(
        <div style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Image
          src="/event-planner.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    )
}