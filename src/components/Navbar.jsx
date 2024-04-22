import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShopingCartContext"

function Navbar() {
    const {openCart, closeCart, cartQuantity} = useShoppingCart();

    return (
        <>
        <nav className='shadow-md flex justify-between p-4  sticky'>
            <div className='flex gap-4 font-bold ml-8 align-middle'>
            <NavLink className='flex items-center'  to='/' >Home </NavLink>
            <NavLink className='flex items-center' to='/store'>Store</NavLink>
            <NavLink className='flex items-center' to='/about'>About</NavLink>
            </div>
            
            <button onClick={openCart} className='relative mr-8 bg-yellow-400 py-2 px-4 rounded font-bold hover:bg-yellow-500 hover:drop-shadow-md'>
                {cartQuantity < 1 ? '' : 
                <div className='absolute -bottom-1 -right-3 bg-red-600 text-gray-100 rounded-full px-2 flex items-center'>{cartQuantity}</div>
}
                Cart</button> 
            
        </nav>
       
        </>
    )
}

export default Navbar
