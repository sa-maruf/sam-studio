import Card from './Card';

const Hero = ({ items }) => {
    return (
        <>
            <section className='max-w-screen-2xl px-5 mx-auto'>
                <div className="carousel w-full md:h-[400px] mt-12 md:mt-16 lg:mt-16">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co.com/Kp4WCHkR/1-0x-OQMdd-XZn723-ZU-p4uskg.jpg"
                            className="w-full " />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co.com/Kj0B7R4r/justiceleague-photo.jpg"
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co.com/twVHjRQp/mission-impossible-ii-1024x536.webp"
                            className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co.com/q8DmRZy/Avengers-Endgame-Header-Image.jpg"
                            className="w-full" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </section>
            {/* Card  */}
            <section className='min-h-screen'>
                <div className="container mx-auto p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-xl">
                            No items found.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default Hero;