import herobanner from '../assets/static/hero-bannerx.png';

export const Banner = () => {
  return (
    <>
    <section className="section hero" style={{
      background: 'url(' + herobanner + ')',
      backgroundSize: 'cover',
    }}> 
        <div className="container">

          <h2 className="h1 hero-title" style={{ fontSize: '4rem'}}>
             <strong>Ofertas Increibles</strong>
          </h2>

          <p className="hero-text" style={{ fontSize: '1.5rem'}}>
            Aprovecha las increibles ofertas que tenemos para vos desde el 10 de Febrero hasta el 15 de Marzo.
            Comprando por transferencia bancaria tenes un 15% de descuento adicional.
          </p>

          <button className="btn btn-primary">
            <a href='#products'
              style={{
                color: 'white',
                textDecoration: 'none'
              
              }}
            >Comprar ya</a>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>
      </section>
      </>
  )
}