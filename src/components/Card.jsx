const Card = ({ item, onDelete }) => {
    return (
        <div className="bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={item.poster} alt={item.name} className="w-full h-34 sm:h-48 md:h-56 lg:h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-sm md:text-xl font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{item.description}</p>
                <div className="flex justify-between items-center gap-2">
                    <a href={item.downloadLink} target="_blank" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 w-full text-center text-xs md:text-sm">
                        Download
                    </a>
                    {onDelete && (
                        <button
                            onClick={() => onDelete(item.id)}
                            className="bg-red-700 text-white px-3 py-2 rounded-md hover:bg-red-800 transition-colors duration-300 text-xs md:text-sm"
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