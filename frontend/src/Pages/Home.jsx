import NavBar from '../Components/NavBar';
import Hero from '../assets/Hero.png';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';


const Home = () => {

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col'>
      <NavBar />
      <div className='flex items-center justify-center mt-4 px-4'>
        <div className='text-center bg-gradient-to-tl from-amber-100 to-zinc-900 w-full max-w-4xl rounded-lg'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
            <h1 className='hidden lg:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:mt-0'>
              Elevate Your Digital Presence with Expert Web Solutions            </h1>
              <img
              src={Hero}
              className='rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md ml-15'
              alt='Hero image'
            />
          </div>
        </div>
      </div>

      <div className='text-center'>
        <h1 className='inline-block p-4 text-3xl text-zinc-900 border-b-2 border-slate-600 font-bold'>
          Products
        </h1>
      </div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;