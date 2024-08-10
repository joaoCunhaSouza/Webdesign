import './style.css';
import images from "./img/img.jpg";

export function App() {
  return (
    <>

    <img className='img' src={images} alt="" />



      <h1>
        Transformando <span>espaço</span>, criando <span>história</span>
      </h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span>Nulla modi soluta consectetur</span> culpa dolepe illum ipsum ipsa molestias reprehenderit ad?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quaerat repellat, voluptatum orro <span>perspicilaboriosam veritatis fugit</span> doloribus dolore ab ipsam voluptas provident corporis?</p>


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
