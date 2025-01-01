const Card = ({ title, description, icon, arabicTitle, arabicDescription }) => {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-amber-400/20">
        <div className="text-3xl text-amber-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-amber-300">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <h4 className="text-xl font-semibold mb-2 text-right text-amber-300">{arabicTitle}</h4>
        <p className="text-gray-300 text-right">{arabicDescription}</p>
      </div>
    );
  };
  