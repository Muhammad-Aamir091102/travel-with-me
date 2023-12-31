import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const { photo, title, desc, price, reviews, city, address, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  useEffect(() => {
    // Fetch bookings based on the booking name (replace 'bookingName' with the actual property)
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings?bookingName=${tour.bookingName}`, {
          method: 'get',
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
        });

        const result = await res.json();
        if (!res.ok) {
          alert(result.message);
        } else {
          setBookings(result.data);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchBookings();
  }, [tour]);

  
};
