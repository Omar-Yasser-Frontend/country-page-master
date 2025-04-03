"use client";

import Image from "next/image";
import { useCountries } from "../_context/CountriesContext";

function Status() {
  const { handleStatus } = useCountries();
  return (
    <div>
      <h2 className="mb-2">Status</h2>
      <div className="mb-1">
        <label htmlFor="member" className="flex items-center">
          <input
            type="checkbox"
            id="member"
            className="w-0 h-0"
            onChange={() => handleStatus("member")}
          />
          <span className="inline-block w-5 h-5 border-1 border-white mr-2 relative rounded-sm">
            {" "}
            <Image
              className="absolute top-1/2 left-1/2 -translate-1/2 hidden"
              width={16}
              height={16}
              src="/Done_round.svg"
              alt="checked icon for check box"
            />
          </span>
          Member of the United Nation
        </label>
      </div>
      <div>
        <label htmlFor="independent" className="flex items-center">
          <input
            type="checkbox"
            id="independent"
            className="w-0 h-0"
            onChange={() => handleStatus("independent")}
          />
          <span className="inline-block w-5 h-5 border-1 border-white mr-2 relative rounded-sm">
            {" "}
            <Image
              className="absolute top-1/2 left-1/2 -translate-1/2 hidden"
              width={16}
              height={16}
              src="/Done_round.svg"
              alt="checked icon for check box"
            />
          </span>
          Independent
        </label>
      </div>
    </div>
  );
}

export default Status;
