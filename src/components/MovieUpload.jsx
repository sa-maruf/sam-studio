import { useState } from 'react';
import Card from './Card';

const MovieUpload = ({ items, onPost, onDelete }) => {
    const [formData, setFormData] = useState({
        poster: '',
        name: '',
        description: '',
        type: 'movie',
        downloadLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPost({
            id: Date.now(),
            ...formData,
        });
        setFormData({
            poster: '',
            name: '',
            description: '',
            type: 'movie',
            downloadLink: '',
        });
        alert('Item posted successfully!');
    };

    return (
        <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-10">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">Upload New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... form inputs as before ... */}
                <div>
                    <label className="block text-gray-300">Poster URL</label>
                    <input
                        type="text"
                        name="poster"
                        value={formData.poster}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 text-white"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-300">Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 text-white"
                    >
                        <option value="movie">Movie</option>
                        <option value="tv_series">TV Series</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-300">Download Link</label>
                    <input
                        type="url"
                        name="downloadLink"
                        value={formData.downloadLink}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-700 text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 mt-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                    Post Now
                </button>
            </form>

            {/* Show Cards with Delete Button */}
            <div className="mt-10">
                <h3 className="text-2xl font-bold text-white mb-4">Uploaded Items</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <Card key={item.id} item={item} onDelete={onDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieUpload;