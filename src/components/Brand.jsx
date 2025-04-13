import Navbar from "./Navbar"

const Brand = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Brand</h1>
        <img 
          src="/shopping-cart/images/hero.jpg"
          alt="main image"
          style={{ 
            width: "100%",
            height: "clamp(10rem, 2.8571rem + 35.7143vw, 35rem)",
            objectFit: "cover"
           }}
        />
        <p>
          Built to Last, Designed to Inspire. At Furnist, we believe in the enduring value of quality craftsmanship. We meticulously create furniture using durable materials and thoughtful designs, ensuring pieces that will enhance your home for years to come.
        </p>
      </main>
    </>
  )
}

export default Brand