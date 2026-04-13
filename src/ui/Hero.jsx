import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="space-y-10">
      {/* Hero Content */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Friends to keep close in your life
        </h2>

        <p className="text-gray-500 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-primary gap-2 mt-4">
          <FaPlus /> Add Friend
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body items-center text-center">
            <h4 className="text-2xl font-bold">10</h4>
            <p>Total Friend</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body items-center text-center">
            <h4 className="text-2xl font-bold text-success">3</h4>
            <p>On Track</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body items-center text-center">
            <h4 className="text-2xl font-bold text-warning">6</h4>
            <p>Need Attention</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body items-center text-center">
            <h4 className="text-2xl font-bold text-primary">12</h4>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
