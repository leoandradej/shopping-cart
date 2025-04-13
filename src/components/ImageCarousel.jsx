import { useState } from "react"
import styles from "./home.module.css"

const ImageCarousel = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevSlide() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    function shownNextSlide() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div className={styles.hero}>
            <div className={styles.carousel}>
                {images.map(image => (
                    <img 
                        key={image.id}
                        src={image.imgUrl} 
                        alt={image.name}
                        className={styles.slide}
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button onClick={showPrevSlide} className={`${styles.carouselBtn} ${styles.previous}`}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={shownNextSlide} className={`${styles.carouselBtn} ${styles.next}`}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    index === imageIndex ? (
                        <button 
                            key={index} 
                            onClick={() => setImageIndex(index)}
                            className={`${styles.indicatorBtn} ${styles.active}`}
                        >
                        </button>
                    ) : (
                        <button 
                            key={index} 
                            onClick={() => setImageIndex(index)}
                            className={styles.indicatorBtn}
                        >
                        </button>
                    )
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel