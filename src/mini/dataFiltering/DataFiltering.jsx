import React, { useEffect, useState } from 'react';
import "./datafiltering.css";
const Content = [
    { id: 1, title: 'My Name is Khan', category: 'movies', image: 'https://i.ytimg.com/vi/nqxgYT3TYzY/maxresdefault.jpg' },
    { id: 2, title: 'Chennai Express', category: 'movies', image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express.jpg' },
    { id: 3, title: 'Happy New Year', category: 'movies', image: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Happy_New_Year_Poster_%282014_film%29.jpg' },
    { id: 4, title: 'Ted Talks India Nayi Soch', category: 'shows', image: 'https://i.ytimg.com/vi/j1HiAWEeb64/maxresdefault.jpg' },
    { id: 5, title: 'Dilwale', category: 'movies', image: 'https://m.media-amazon.com/images/M/MV5BMTYwNDc0NGUtNWZhYy00Y2EzLWIwNzMtZGQ0MWVlNjRlNDEwXkEyXkFqcGdeQXVyMTYyNjAzOTUx._V1_FMjpg_UX1000_.jpg' },
    { id: 6, title: 'Raees', category: 'movies', image: 'https://m.media-amazon.com/images/M/MV5BMTc2NTYwMTE1NV5BMl5BanBnXkFtZTgwODQ5MzAwMTI@._V1_.jpg' },
    { id: 7, title: 'Fauji', category: 'shows', image: 'https://m.media-amazon.com/images/M/MV5BMGIxYTdhYTAtZWRjYS00Nzk2LWFhZjYtYjc0ZjdlMTE5NzRkXkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_.jpg' },
    { id: 8, title: 'Kaun Banega Crorepati', category: 'shows', image: 'https://www.koimoi.com/wp-content/new-galleries/2020/09/kaun-banega-crorepati-trivia-heres-what-happened-when-shah-rukh-khan-replaced-amitabh-bachchan-in-season-3-001.jpg' },
    { id: 9, title: 'Baazigar', category: 'movies', image: 'https://i.ytimg.com/vi/d9njtTOMvEY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnTlkSw42NUN2JlrpK34W2nd7z6A' },
    { id: 10, title: 'Don 2', category: 'movies', image: 'https://m.media-amazon.com/images/M/MV5BMTY5OTMxMDQ3Ml5BMl5BanBnXkFtZTcwMjAwNjIwNw@@._V1_.jpg' },
    { id: 11, title: 'Devdas', category: 'movies', image: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Devdas_%282002_Hindi_film%29.jpg' },
    { id: 12, title: 'Kabhi Khushi Kabhie Gham', category: 'movies', image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg' },
    { id: 13, title: 'Mannat: The Shahrukh Khan Podcast', category: 'podcasts', image: 'https://i.ytimg.com/vi/5LFdcZe7WW4/maxresdefault.jpg' },
    { id: 14, title: 'Dil Se', category: 'movies', image: 'https://m.media-amazon.com/images/M/MV5BNWFjNGIxYWUtZDFmNy00NzRkLThkYWItZjBiNTJlNGE3MTA0XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_.jpg' },
    { id: 15, title: 'Darr', category: 'movies', image: 'https://i.ytimg.com/vi/VRZYct_n2Sc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiLbyesUIHg6Q3pSsyPZVAcI3UVA' },
    { id: 16, title: 'Challeye', category: 'songs', image: 'https://i.ytimg.com/vi/wr9M-CoxP7A/maxresdefault.jpg' },
    { id: 17, title: 'jhoome jo pathan', category: 'songs', image: 'https://i.ytimg.com/vi/YxWlaYCA8MU/maxresdefault.jpg' },
    { id: 18, title: 'jioSaavan', category: 'songs', image: 'https://c.saavncdn.com/989/Don-2-Hindi-2011-20221212014337-500x500.jpg' },
    { id: 19, title: 'Tujhe Dekha Toh Song | Dilwale Dulhania Le Jayenge ', category: 'songs', image: 'https://i.ytimg.com/vi/vCTW2GfcepQ/maxresdefault.jpg' },

    
  ];
  

// console.log(categoryFromContent);





export default function DataFiltering() {
const [ContentList,setContentList] =useState(Content);
const [active,setActive] =useState(0);

const category = ["all",...new Set(Content.map((c)=>c.category))]


const FilteredItems  = (category) =>{

    const filterList = Content.filter((mv)=>{ return mv.category === category})
    setContentList(filterList);


    if(category=="all") setContentList(Content)
    // console.log(filterList);
}

// useEffect(()=>{
// FilteredItems("songs")

// },[])


  return (<>
  
  <div className="data-filtering-body">

<div className="header">
    {
        category.map((c,i)=>{
            return(<>
    <button className={`${active===i?"active":"btn"}`} onClick={()=>{FilteredItems(c);setActive(i)}} key={Math.random()}>{c}</button>
            
            </>)
        })
    }
</div>


<div className="grid">
   
{
    ContentList.map((mv)=>{

        return(<>

        <div className="filter-card">
    <img src={mv.image} alt="" />
    <div className="title"><h2>{mv.title}</h2></div>
   </div>      
        </>)
    })
}


  


</div>






  </div>
  
  
  
  
  
  
  </>  )
}



