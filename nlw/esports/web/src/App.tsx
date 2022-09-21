import './Styles/main.css';
import logoimg from './assets/logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'

function App() {

  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={logoimg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-clip-text text-transparent bg-nlw-gradiente ">duo</span> está aqui.
      </h1>


      <div className='grid grid-cols-6 gap-6 mt-16'>
        
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 1.png' alt='' />


          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 2.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 3.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>CS: Global offensive</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 4.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 5.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image 6.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bolt text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 mt-8 bg-nlw-gradiente self-stretch rounded-lg '>
        <div className='bg-[#2A2634] px-8 py-6 rounded-b-lg flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white mt-2 rounded flex items-center gap-3'>
            Publicar anúncio
            <MagnifyingGlassPlus size={24} />
            </button>

        </div>
      </div>
    </div>
  )

}

export default App