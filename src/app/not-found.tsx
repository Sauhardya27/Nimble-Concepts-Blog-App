import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[60vh]">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link href="/" className="underline">Return Home</Link>
    </div>
  );
};

export default NotFound