import React, { useEffect, useState } from 'react';
import "./Indicator.css";
import axios from 'axios';

export default function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
const [errorMasg,seTerrorMsg] =useState(null)

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products?limit=100");
      setData(response.data.products);
    } catch (error) {
      console.error("Error while fetching data: ", error);
      seTerrorMsg(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="scrollBody">
      <nav>
        <center><h1>Custom Scroll Indicator</h1></center>
        <div className="indicator">
          <div className="increaser"></div>
        </div>
      </nav>

      <section className='cards'>
        {loading && (
          <center><h1>Loading... Fetching Data...</h1></center>
        )}
         {errorMasg && (
          <center><h1>Error While Fetching Data <br /> {errorMasg}</h1></center>
        )}
        {
          data.map((item, i) => (
            <div className="card" key={item.id}>
              {/* <h1>{item.title}</h1> */}
              <img src={item.images} alt="" />
              <figcaption style={{fontWeight:"900"}}> <center>{item.title}</center></figcaption>
              {/* <p>{item.description}</p> */}
            </div>
          ))
        }
      </section>
    </div>
  );
}
