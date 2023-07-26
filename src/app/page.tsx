import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
     
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image 
              src='/banner1.webp'
              alt='Resgate'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Resgate
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
          Tyler Rake (Helmsworth) é um mercenário que, no passado, 
          foi um operador das Forças Especiais da Austrália. Agora atuando no mercado clandestino, 
          Rake deve resgatar com vida o filho de um poderoso chefe do tráfico em Bangladesh.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            More Info
          </button>
        </div>
        <div className='flex flex-col space-y-2 md:space-y-4 lg:space-y-8 lg:flex-row lg:space-x-8'></div>
      </main>
    </div>
  );
}
