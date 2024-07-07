import React, { useState, useEffect } from "react";
import "./App.css";
import Imagecard from "./components/Imagecard";
import Imagesearch from "./components/Imagesearch";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState([true]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXPAY_API_KEY}&q=${term}_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <Imagesearch search={(text) => setTerm(text)} />
      {isloading ? (
        <h1 className="text-6xl text-center mx-auto mt-32"> is loading </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Imagecard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
