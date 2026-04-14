import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-extrabold text-primary">404</h1>

      <h2 className="text-2xl font-bold mt-4">Oops! Page Not Found 😢</h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-6">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
