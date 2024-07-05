import { Link } from 'react-router-dom'
import Container from '../../container/Container'
import { AiOutlineUserDelete } from "react-icons/ai";


const Navbar = () => {
  return (
    <Container>
      <nav className='flex justify-between h-[80px] items-center'>
        <Link to='/' className='text-2xl font-semibold'>Xodimlar</Link>
        <Link to='/dismissal' className='text-xl flex gap-2'>
          <AiOutlineUserDelete className="text-[crimson] cursor-pointer text-2xl items-center" />
          Ishdan bo'shatilganlar
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
