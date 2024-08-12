import './style.css';
import images from "./img/img.jpg";

export function App() {
  return (
    <>
      <img className='img' src={images} alt="" />

      <h1>
        Transformando <span className="bold">espaço</span>, criando <span className="bold">história</span>
      </h1>

      <p>Lorem ipsum dolor sit, amet <b>consectetur</b> adipisicing elit. <span className="bold">Nulla modi soluta consectetur</span> culpa dolepe illum ipsum ipsa molestias reprehenderit ad?</p>
      <p className='pp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quaerat repellat, <b>voluptatum</b> orro <span className="bold">perspicilaboriosam veritatis fugit</span> doloribus dolore ab ipsam voluptas provident corporis?</p>

      <div className='icon'>
        <div className='icon-I'>
          <a href="#">Instagram</a>
        </div>
        <div>
          <a href="#">Fale conosco</a>
        </div>
      </div>
    </>
  );
}
