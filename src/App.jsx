import { useState } from 'react'
import Card from './components/Card.jsx'
import Cardcontainer from './components/Cardcontainer.jsx'
import './App.css'

function App() {
  const data = [
  {
    title: "Mountain Sunrise",
    description: "Experience the breathtaking view of the sun rising over the mountain peaks, illuminating the valley below.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Forest Adventure",
    description: "Explore the dense forest trails filled with vibrant greenery and the sounds of wilderness.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "City Skyline",
    description: "A stunning view of the city skyline at twilight, showcasing the dazzling lights and urban life.",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Serene Beach",
    description: "Relax by the serene beach with crystal clear water and soft white sand under sunny skies.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Desert Dunes",
    description: "Discover the vast desert dunes with endless golden sands and rolling hills under a bright sun.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Snowy Peaks",
    description: "Marvel at the snow-covered mountain peaks reaching high into the clear blue sky.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Rolling Hills",
    description: "Gentle rolling hills covered in lush green grass under a bright sunny sky.",
    imageUrl: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Sunset Over Water",
    description: "A captivating sunset casting beautiful orange hues over calm waters.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Tropical Paradise",
    description: "Palm trees and turquoise waters create the ultimate tropical paradise experience.",
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Urban Street",
    description: "Lively urban street scene full of culture and energy.",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Wildflower Meadow",
    description: "A colorful meadow blanketed by wildflowers in full bloom.",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Starry Night",
    description: "Gaze into the vast starry night sky away from city lights.",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80"
  }
];

  return (
    <>
    
        <Cardcontainer data={data}/>
      
    </>
  )
}

export default App
