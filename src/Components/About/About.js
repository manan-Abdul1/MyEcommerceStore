import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-6 my-auto about-description ">
          <p className='text-muted'>At MyEcommerce, we are passionate about bringing <br/> high-quality products to our customers at affordable prices.</p>
          <p className='text-muted'>Our team of experts carefully selects each item in our store, ensuring that it meets our high standards for quality and style. We believe that everyone deserves to have access to beautiful, functional, and affordable products that enhance their lives.</p>
          <p className='text-muted'>Thank you for choosing MyEcommerce for your shopping needs. We are dedicated to providing you with the best possible experience and look forward to serving you for years to come.</p>
        </div>
        <div className="col-6">
          <img className='w-100' style={{height:'450px'}} src='https://wallpaper.dog/large/984598.jpg' />
        </div>
       </div>
    </div>
  );
}
