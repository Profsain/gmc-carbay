import { useState } from "react";

const ImageGallery = () => {
  const imgUrls = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/1.jpg?7891",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/2.jpg?7891",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/3.jpg?7891",
    "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/31/3164862/4.jpg?7891",
    "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/31/3164862/4.jpg?7891",
    ];

    // state
    const [imgUrl, setImgUrl] = useState(imgUrls[0]);

    // handle change image
    const handleImageChange = (urlIndex) => {
        setImgUrl(imgUrls[urlIndex]);
    }
    
    const styles = {
        img: {
            width: "100px",
            height: "100px",
            margin: "10px",
        }
    }
  return (
    <div>
      <img
        src={imgUrl}
        alt="pictures"
      />

          <div>
              {imgUrls.map((url, index) => (
                    <img key={index} src={url} alt="pictures" style={styles.img} onClick={() => handleImageChange(index)}/>
              ))}
      </div>
    </div>
  );
};

export default ImageGallery;
