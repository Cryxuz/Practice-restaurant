import home from '/images/hom1.jpg'

function Intro () {
  return (
    <div  className="w-screen h-screen overflow-hidden bg-cover bg-no-repeat bg-center lg:grid lg:grid-cols-3 p-[15%] items-center" style={{ backgroundImage: `url(${home})` }}>
      <div className='pt-[50%] md:pt-[5%] text-center text-white'>
      <h1 className='cursive text-5xl md:text-9xl mb-[5%]'>Ember</h1>
      <p className='cursive text-2xl md:text-5xl'>Where Culinary Artistry Meets Timeless Flavours</p>
      </div>
    </div>
  )
}
export default Intro