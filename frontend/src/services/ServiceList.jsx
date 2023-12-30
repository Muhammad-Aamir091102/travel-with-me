import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `We employ cutting-edge weather forecasting technology, 
      ensuring our travelers receive accurate and real-time weather updates for a well-informed and smooth travel experience.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `We take pride in providing the best tour guides, offering a knowledgeable and enriching experience to ensure our travelers make the most of their journey with us.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `We understand that every traveler is unique. Our company provides a personalized touch to your journey by offering customization options, tailoring each experience to meet your specific preferences and ensuring a travel adventure designed just for you..`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList