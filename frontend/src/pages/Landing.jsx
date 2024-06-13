import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Landing = () => {
  const [response, setResponse] = useState(null);
  const [name, setName] = useState(null);

     useEffect(() => {
          axios.get('http://localhost:5174/')
          .then(response => { setResponse(response.data)})
          .catch(error => {
          console.error('Error fetching data:', error);
          });
     }, []);
     
     useEffect(() => {
          axios.post('http://localhost:5174/', { name: "Germany" })
            .then(response => {
               setName(response.data.name);
            })
            .catch(error => {
              console.error('Error posting data:', error);
            });
      }, []);

  return (
    <div>
      {response ? <div>{response}</div> : <div>Loading...</div>}
      {name ? <div>{name}</div> : <div>Still Loading...</div>}
      <Link to={'/login'}>Login</Link>
      <p>&#40; &#41;</p>
    </div>
  );
};

export default Landing;