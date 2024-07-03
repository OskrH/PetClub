import './App.css'
import complet from './imagenes/complet.png'
import mascota from './imagenes/mascota.png'
import insta from './imagenes/insta.png'
import face from './imagenes/face.png'
import twt from './imagenes/twt.png'
import tiktok from './imagenes/tiktok.png'
import patitas from './imagenes/patitas.png'

function App() {

  return (
    <>
    <section className='seccion1'>
    <nav>
      <a  href="https://play.google.com/store/apps" > <img src={complet} alt="" /></a>
      </nav>
      <div>
        <img className='imagen2' src={patitas} alt="" />
      </div>
    </section>
    <section className='seccion2'>
    <div className='letras'>
        <img className='imagen3' src="https://s3-alpha-sig.figma.com/img/6499/4dfd/9bfe281fcf5fbb9cce04f6cdf0f2a55e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m5Uvo0QZRakLBRd3rZSrNkIs305SjOAJpzVze75L-jiwXke4y55oDYze3LGwjvku2qFA0OluuI9VaIanVn6Arj1L6NDizRlGMUHmv39M7oFPFaa2NyAiPx-6xF4D4r-0maf2vpb7Tmlvjqn~c~Px-adX7IAM1blww53nUlrqJKYfAWvN2fsbUnROvdSfSnQLHQMqq8WBRZ2uBSZ3S~-hRQ71z5f-8OZhNfeasTAqVk-GjfvZL8kUjzTMfPr3pCukOrWHd8MxX-NxKpt6PC7SEGe30sgm1pxqOr6sEoNtV8fhG3bDVehqszxH5n4L5qzkEu81mhsbSkUxQeLDV50g~A__" alt="" />
        <p className='parrafo'>
          Un club "petfriendly" para contactar con otros "petlovers", compartir tu amor por los animales, adoptar y descubrir lo mejor para el bienestar de tus mascotas
        </p>
        <img src={mascota} alt="" />
      </div>
    </section>
    <section className='seccion3'>
      <img className='imagen4' src="https://s3-alpha-sig.figma.com/img/aa66/362c/673a188f20b36fb50d867ae862ee0d44?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TYEYqvqiNUbQzzfcO3yliVQvzsqvrENjJLx0v1oZeYl9m17JtdYz~gzIgNRCV2tk-ndlKLK1WACyLl9tJ4V1olJgQUCCA69ow2pOkfwcdDqfHQrgO51waIZKEwWdoLQaUwiWsFjtmg6AVrzmoAjr1xvAKXZ1sAIDr80ucicsLGNYShOtExPNcWnv9xQLdQePPakAAzfR~ldGkHQCljXp9bYTu8Zv5jW7wxwNMdgdU2L0d0cR997YFu7~9oUaCXyWpnni33TD7Fo0uVfH6IlilNeX5o88bSj-NXgdVG1Epww5rHnX7QfynEx74FNH1pwu5eKtRiq314w3MewtMvz49g__" alt="" />
    </section>
    <footer>
      <p className='foot'>
      @Copyright 2024 NovaMatrix SAC. Todos los derechos reservados
      </p>
      <div className='redes'>
        <a href=""><img src={insta} alt="logo" /></a>
        <a href=""><img src={face} alt="logo" /></a>
        <a href=""><img src={twt} alt="logo" /></a>
        <a href=""><img src={tiktok} alt="logo" /></a>
      </div>
    </footer>
    </>
  )
}

export default App
