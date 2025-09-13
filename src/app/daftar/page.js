import React, { useState, useEffect } from "react";

const totalImages = 10; // Misalnya ada 10 gambar
const backgroundFolder = "/TESTIMONU/";

export default function Register() {
  const [homepageImageUrl, setHomepageImageUrl] = useState('');

  useEffect(() => {
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * totalImages) + 1; 
      const imageUrl = `${backgroundFolder}${randomIndex}.webp`; 
      setHomepageImageUrl(imageUrl);
    };
    changeBackgroundImage();
    const interval = setInterval(changeBackgroundImage, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: homepageImageUrl ? `url('${homepageImageUrl}')` : '',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  );
}
