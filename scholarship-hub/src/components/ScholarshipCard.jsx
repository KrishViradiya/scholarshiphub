
const ScholarshipCard = ({ title, description,image,alt }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
      <h2 className="text-xl font-bold ml-2 mb-2">{title}</h2>
      <img className="h-1/2 w-1/2 mt-6 ml-2" src={image} alt={alt} />
      <p className="text-gray-600 ml-2">{description}</p>
      <button className="mt-4 ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Apply Now
      </button>
    </div>
  );
}

export default ScholarshipCard;
