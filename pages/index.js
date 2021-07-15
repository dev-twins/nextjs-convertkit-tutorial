import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`/api/subscribe/${email}`);
    console.log(res);
  };
  return (
    <div className='hero'>
      <div className='hero--content'>
        <div>
          <div>
            <h1>Do you like electric bikes?</h1>
            <p>
              Subscribe to our newsletter to recieve the latest news and the
              best deals in the e-bike universe!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
        <div>
          <img src='https://cdn.shopify.com/s/files/1/2171/2821/products/BobberXT-Black-Frame-Black-Accessoires_71d2686d-08fe-4736-b52d-7da2a0569c82_2048x.png?v=1612545152' />
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            font-family: sans-serif;
            padding: 64px 60px;
          }
          .hero--content {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
          }
          .hero--content > div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hero--content > div > img {
            width: 100%;
          }
          input {
            outline: none;
            padding: 6px;
            min-width: 80px;
            font-size: 16px;
          }
          @media (max-width: 992px) {
            .hero {
              padding: 64px 40px;
            }
            .hero--content {
              flex-direction: column;
            }
          }
          @media (max-width: 480px) {
            .hero {
              padding: 64px 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
