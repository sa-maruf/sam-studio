import Card from './Card';

const Hero = ({ items, onDelete }) => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.length > 0 ? (
                items.map((item) => (
                    // এখানে onDelete প্রপসটি বাদ দিন
                    <Card key={item.id} item={item} />
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500 text-xl">
                    No items found.
                </p>
            )}
        </div>
    );
};

export default Hero;