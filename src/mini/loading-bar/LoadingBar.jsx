import React, { useState, useEffect } from 'react';
import "./loading-bar.css";
import axios from 'axios';

export default function LoadingBar() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] =useState(false)
    const [food,setFood] =useState("biryani")

    const FetchingData = async () => {
        try {
            setLoading(true);
            console.log("loading........");

            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
            const Data = response.data;

            setData(Data.meals);
        } catch (error) {
            console.log("Error fetching data: " + error);
            setError(true)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchingData();
    }, []);

    return (
        <>

        <div className={loading?"loading-bar-start":"loading-bar"}></div>
            <div className="loading-bar_body">
                <input onChange={(e)=>{setFood(e.target.value);}} type="text" placeholder="Search Your Favourite Food For Recipe" />
                <button onClick={FetchingData}> Find</button>
{
    error && <h1>Errror</h1>
}
<div className="grid">

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="card">
                        {data && data.length > 0 ? (
                            data.map((meal, index) => (
                                <div key={index}>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    <p>{meal.strMeal}</p>
                                </div>
                            ))
                        ) : (
                            <div>No meals found</div>
                        )}
                    </div>
                )}
                </div>
            </div>
        </>
    );
}
