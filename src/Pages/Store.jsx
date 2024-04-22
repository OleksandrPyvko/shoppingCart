import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

function Store() {
    return (
        <>
           <h1>Store</h1> 
        <div className='w-5/6 m-auto p-3 gap-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 place-items-center '>
           {storeItems.map((item) => <StoreItem key={item.id} {...item}/>  )}
        </div>
        </>
    )
}

export default Store
