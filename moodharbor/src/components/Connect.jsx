import React, { useContext, useEffect, useState } from 'react';
import UserContext from './Auth/UserContext';
import Header from './Header';
import Footer from './Footer';


const Connect = () => {
  const { user } = useContext(UserContext);

  const [similarUsers, setSimilarUsers] = useState(null);

  // fetch the similar users
  useEffect(() => {
    const fetchSimilarUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/similarusers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSimilarUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSimilarUsers();
  }, []);

  return (
    <> 
        <Header 
            title="" 
            subtitle="" 
            name={user && `Hi ${user}`} 
            pageTitle="CONNECT"
        />
      
        <div className="section-container"> 
            <p>Connect</p>
        </div>
        
        <Footer/>        
    </> 
  );
};

export default Connect;