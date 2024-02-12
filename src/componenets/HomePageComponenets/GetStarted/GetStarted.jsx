import { Container } from '../../ui/Container'
import NpmInstallCardBox from './NpmInstallCardBox'
import { techCards } from '../../../data/data'
import SupportedLibrariesCard from './SupportedLibrariesCard'
import EditorBox from './EditorBox'

const GetStarted = () => {
  return (
    <Container>
      <div className='p-4'>
        <div className="text-center mt-20">
          <h2>Get started in <br className='block md:hidden' />  minutes  </h2>
          <p className="my-6 md:mb-10">
            Simple API to set or get the state of game room. The state is <br className='hidden md:block' /> automatically synced between all players and screens.        </p>
        </div>
        <NpmInstallCardBox />
        <div className='mt-2 grid grid-cols-3 gap-3 p-4 md:flex md:justify-between  lg:w-[70%] lg:mx-auto '>
          {techCards.map((card, index) => (
            <SupportedLibrariesCard key={index} title={card.title} icon={card.icon} />
          ))}

        </div>
      <EditorBox/>
      </div>
    </Container>

  )
}

export default GetStarted