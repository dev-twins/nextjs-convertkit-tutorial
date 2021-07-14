import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    alert('submitted!');
  };
  return (
    <div className='hero'>
      <div className='hero--content'>
        <div>
          <h1>Do you like electric bikes?</h1>
          <p>Subscribe to our newsletter!</p>
          <form onSubmit={handleSubmit}>
            <input type='email' onChange={(e) => setEmail(e.target.value)} />
            <input type='submit' value='Submit' value={email} />
          </form>
        </div>
        <div>
          <img src='https://cdn.shopify.com/s/files/1/2171/2821/products/BobberXT-Black-Frame-Black-Accessoires_71d2686d-08fe-4736-b52d-7da2a0569c82_2048x.png?v=1612545152' />
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            font-family: sans-serif;
          }
          .hero--content {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
