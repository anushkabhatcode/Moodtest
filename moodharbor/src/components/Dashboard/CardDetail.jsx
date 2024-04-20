import React, { useState } from 'react';

const sendLike = (name, category) => {
  const token = localStorage.getItem('token');

  fetch('http://localhost:4000/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({name, category}),
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
};


const CardDetail = ({ title, detail, author, imageUrl, year }) => {
  const [isActive, setIsActive] = useState(false);
  // const [data, setData] = useState({ 
  //   name: title, 
  //   category: author 
  // });

  // const handleLikeClick = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');
  //   try {
  //     const response = await fetch('http://localhost:4000/save', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       body: JSON.stringify({ 
  //         name: data.title, 
  //         category: data.author
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const { message } = await response.json();
  //     console.log(message);
  //     // console.log(response.data);
  //     console.log('You clicked the like button');

  //     sendLike(title, author);
  //     setIsActive(true);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }



  const handleLikeClick = () => {
    sendLike(title, title);
    setIsActive(true);  
    
  };

  

  return (

          
            <div className="col-lg-3 col-md-6 col-sm-6 custom-card-spacing" onClick={handleLikeClick}>
              <div className="card custom-card-width">
                <div className="card-header">{title} {year} </div>
                <div className="card-body">
                  <p className="card-title">{author}</p>
                  <p className="card-text">{detail}</p>
                  
                  <img src={imageUrl} />
                    {/* <button className={`button-small ${isActive ? 'disabled' : ''}`} onClick={handleLikeClick} >
                      <span>Try</span>
                    </button> */}

                </div>
              </div>
            </div>
          
      
  );
};

export default CardDetail;
