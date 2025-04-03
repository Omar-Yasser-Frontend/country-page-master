"use client";

import Link from "next/link";

function error({ error, reset }) {
  return (
    <div>
      <p className="text-center">{error.message}</p>
      <div className="flex justify-center gap-5 items-center">
        <button className="underline cursor-pointer" onClick={() => reset()}>
          Retry
        </button>
        <Link className="underline" href={"/"}>
          Back to Home page
        </Link>
      </div>
    </div>
  );
}

export default error;
