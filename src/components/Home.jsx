import storeItems from "../data/items.json"
import styles from "./home.module.css"
import ImageCarousel from "./ImageCarousel"

const Home = () => {
    return (
        <main>
            <ImageCarousel images={storeItems} />
            <section className={styles.itemsDisplay}>
                {storeItems.map((item, index) => (
                    index % 2 === 0 ? (
                        <div key={item.id} className={styles.itemWrapper}>
                            <img src={item.imgUrl} alt={item.name} className={styles.itemImg}/>
                            <div className={styles.description}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={item.id} className={styles.itemWrapper}>
                            <div className={styles.description}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                            <img src={item.imgUrl} alt={item.name} className={styles.itemImg}/>
                        </div>
                    )
                ))}
            </section>
        </main>
    )
}

export default Home