const Card = ({ item, onDelete }) => {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={item.poster} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                    <a href={item.downloadLink} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                        Download
                    </a>
                    {onDelete && (
                        <button
                            onClick={() => onDelete(item.id)}
                            className="bg-red-700 text-white px-3 py-1 rounded-md hover:bg-red-800 transition-colors duration-300"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;