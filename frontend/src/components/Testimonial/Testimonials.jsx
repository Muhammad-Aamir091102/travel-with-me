import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
<<<<<<< HEAD
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
=======
         <p>Booking my travel with Travel-With-Me was an absolute game-changer!
             From start to finish, they crafted an experience that exceeded my expectations.
              The itinerary was a perfect blend of adventure and relaxation, 
              carefully tailored to showcase the best of each destination.
>>>>>>> origin/master
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
<<<<<<< HEAD
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
=======
         <p>Choosing Travel-With-Me for my recent trip was a decision I'll never regret.
            The entire experience was nothing short of magical! From the initial planning stages to the final farewell,
            every aspect was handled with expertise and genuine care.
>>>>>>> origin/master
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Lia Franklin</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
<<<<<<< HEAD
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
=======
         <p>My recent trip with Travel-With-Me was nothing short of a dream come true!
             From the moment I inquired about their services to the last day of my journey, 
             the team at Travel-With-Me demonstrated unparalleled professionalism and dedication.
>>>>>>> origin/master
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
<<<<<<< HEAD
               <h6 className='mb-0 mt-3'>John Doe</h6>
=======
               <h6 className='mb-0 mt-3'>Ali Ahmed</h6>
>>>>>>> origin/master
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
<<<<<<< HEAD
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
=======
         <p>My experience with Travel-With-Me surpassed all expectations! 
            From the initial planning stages to the last day of my trip, 
            every detail was meticulously arranged, allowing me to focus on the joy of exploration.
>>>>>>> origin/master
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
<<<<<<< HEAD
               <h6 className='mb-0 mt-3'>John Doe</h6>
=======
               <h6 className='mb-0 mt-3'>Abed Ameen</h6>
>>>>>>> origin/master
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials