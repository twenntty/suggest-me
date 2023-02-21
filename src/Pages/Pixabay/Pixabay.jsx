import { useEffect, useRef, useState } from "react";
import s from "./Pixabay.module.scss";

// const API_KEY = "19788052-12e74352d9c3069c5841e3f0b";

const Pixabay = () => {
  const [images, setImages] = useState([]);
  const timer = useRef(null);

  const getImages = async (value) => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo`
      );
      const { hits } = await response.json();
      setImages(hits);
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  useEffect(() => {
    getImages("dog");

    return () => {
      console.log("Unmount component");
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      getImages(value);
    }, 1000);
  };

  return (
    <div className={s.pixabay_container}>
      <input onChange={handleChange} />
      <ul className={s.list}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <img src={image.webformatURL} alt="animals" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pixabay;
