import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonSquare, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cumque quam fugit asperiores corporis quos illo repudiandae impedit maiores accusamus, consequuntur inventore dolor esse tempora nihil nesciunt dicta blanditiis iste, vero veniam mollitia amet maxime? Recusandae minima magni itaque aperiam sint, at beatae voluptatum ex quas amet, tempora obcaecati atque.
          </p>
        </div>

      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis maxime eum consectetur, autem deleniti accusantium. Exercitationem possimus est at assumenda sit, illo praesentium officia voluptatum saepe esse quia voluptate deleniti distinctio. Nostrum quae itaque rerum iusto amet vero aliquid in minima fuga placeat debitis, repellat officiis doloribus? Quaerat, dolore consequatur perspiciatis itaque veniam asperiores doloremque et cupiditate, accusantium ipsum cumque temporibus, ut eaque. Repellendus rerum iusto atque ipsam neque facilis aliquam dolor fugiat cupiditate est fugit eligendi animi modi officia ratione nobis, quis excepturi quaerat dolore soluta perferendis consequatur. Commodi debitis earum autem error ipsum quisquam perspiciatis eaque at! Expedita, ad aspernatur. Ipsum impedit neque blanditiis, aliquam voluptas iusto. Corrupti quam ducimus, illum quae tempore eius. Amet repellat praesentium architecto unde neque repellendus fugit iusto? Soluta mollitia debitis non dolorum sed cupiditate itaque recusandae. Itaque sed consequatur ab asperiores adipisci ipsa sequi debitis cupiditate ex? Expedita porro sequi sed corrupti.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonSquare />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div >
      </div >
    </>
  )
}

export default Home