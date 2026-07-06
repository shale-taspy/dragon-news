import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto flex flex-col gap-5 py-10">
      <h2 className=" mx-auto text-4xl text-center text-purple-600">404 Not Found</h2>
      <Link className="btn mx-auto ml-10" href="/">Back to Home</Link>
    </div>
    
  );
};

export default NotFound;<h2>404 Not Found</h2>