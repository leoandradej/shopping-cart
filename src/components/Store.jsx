import storeItems from "../data/items.json"
import Navbar from "./Navbar"
import StoreItem from "./StoreItem"

const Store = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Store</h1>
        <div className="grid">
          {storeItems.map(item => (
              <StoreItem key={item.id}{...item}/>
          ))}
        </div>
      </main>
    </>
  )
}

export default Store