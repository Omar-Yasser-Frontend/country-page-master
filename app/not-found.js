import Link from "next/link";

function notFound() {
  return (
    <div>
      <p className="text-center">Country is not found</p>
      <Link href={"/"} className="text-center">
        Back to home page
      </Link>
    </div>
  );
}

export default notFound;
