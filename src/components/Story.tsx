
function Story() {
  return (
    <div className="flex flex-col md:flex-row h-screen px-[10%] py-[5%] gap-[5%] bg-cover" style={{ backgroundImage: 'url("/images/condiments.jpg")' }}>
      <img src="/images/chef-ai.jpg" alt="ai chef" className="w-full md:w-[50%] md:h-auto " />
      <div className='flex items-center m-[5%]'>
      <p className="cursive text-white text-center text-xl md:text-3xl xl:text-6xl ">
        In the heart of our charming town, nestled amid cobblestone streets and historic architecture, our restaurant serves as a culinary haven where timeless traditions and innovative flavors come together to create an unforgettable dining experience.
      </p>
      </div>
    </div>
  );
}

export default Story;