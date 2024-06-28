import React, { useEffect, useRef, useState } from 'react';
import "./Home.css";
import Crop from "../../assets/crop.jpg";
import Crop2 from "../../assets/crop2.jpg";
import Crop3 from "../../assets/crop3.jpg";

const Home = () => {
    const crops_data = [
        {
            "crop": "Maize",
            "url": "https://youtu.be/cWSICq994ek?feature=shared",
            "imgs": ['/Maize.jpg', '/maize-infarm.jpg']
        },
        {
            "crop": "Rice",
            "url": "https://youtu.be/6QVwPcooJ2o?feature=shared",
            "imgs": ['/rice.jpg', '/rice-infarm.webp']
        },
        {
            "crop": "Chickpea",
            "url": "https://youtu.be/AnspJeJDDgs?feature=shared",
            "imgs": ['/chickpea.jpg', '/chickpea-green-infarm.jpg', '/chickpea-yellow-infarm.jpg']
        },
        {
            "crop": "Kidney beans",
            "url": "https://youtu.be/sxS9ad32f4M?feature=shared",
            "imgs": ['/kidneybenas.webp', '/kidneybenas-1.webp', '/kidneybenas-2.webp']
        },
        {
            "crop": "Eggplants",
            "url": "https://youtu.be/L4saezVKYpo?si=rdmOkxS0O-TIgcg9",
            "imgs": ['/eggplants.jpg', '/eggplants-infarm.jpg']
        },
        {
            "crop": "Cinnamon",
            "url": "https://youtu.be/0bWWT64n3RU?si=Y1dqPHRnFzQ07_xr",
            "imgs": ['/cinnamon.jpg', '/cinnamon-plant.jpg']
        },
        {
            "crop": "Chili",
            "url": "https://youtu.be/qpGvEPmJffY?si=-lFXS_vGOMMojsr6",
            "imgs": ['/chili.jpg', '/chili-plant.jpg']
        },
        {
            "crop": "Carrot",
            "url": "https://youtu.be/Jg5bJNCygtc?si=fDBcSko8gI_fH16K",
            "imgs": ['/carrot.webp', '/carrot-plant.jpg']
        },
        {
            "crop": "Coffee",
            "url": "https://youtu.be/hwbrOt_7glg?si=i3w9Oi5HCSirnaJG",
            "imgs": ['/coffee.jpg', '/coffee-plant.jpg']
        },
        {
            "crop": "Jute",
            "url": "https://youtu.be/Y4wzO75tMjM?si=0OxGD93m8tSbbcJr",
            "imgs": ['/jute.jpg', '/jute-plant.jpg']
        },
        {
            "crop": "Cotton",
            "url": "https://youtu.be/FovIzNZ7Qe4?si=rveVaWHnayGTzb92",
            "imgs": ['/cotton.jpg', '/cotton-plant.jpg']
        },
        {
            "crop": "Coconut",
            "url": "https://youtu.be/n68F_dZX3C8?si=snWCA0g_4qBNVLTn",
            "imgs": ['/coconut.jpg', '/coconut-plant.jpg']
        },
        {
            "crop": "Papaya",
            "url": "https://youtu.be/xUdqOh3oMis?si=_xlgANC0ASsOlfBv",
            "imgs": ['/papaya.jpg', '/papaya-plant.jpg']
        },
        {
            "crop": "Orange",
            "url": "https://youtu.be/s5lqNxWRKaU?si=LA8YYZ6rREdY5kkG",
            "imgs": ['/orange.jpg', '/orange-plant.jpg']
        },
        {
            "crop": "Apple",
            "url": "https://youtu.be/0D4S-Oo61RY?si=fbMkeHDHFwQHJfXK",
            "imgs": ['/apple.jpg', '/apple-plant.jpg']
        },
        {
            "crop": "Muskmelon",
            "url": "https://youtu.be/c15UbiOmG6c?si=5hRsXJqxPs3zDpMV",
            "imgs": ['/muskmelon.jpg', '/muskmelon-plant.jpg']
        },
        {
            "crop": "Watermelon",
            "url": "https://youtu.be/Y7LaLOooO6g?si=IZYUmaE5GpGiYgNS",
            "imgs": ['/watermelon.jpg', '/watermelon-plant.jpg']
        },
        {
            "crop": "Grapes",
            "url": "https://youtu.be/BNl3R8PagJg?si=dVVNsK94Wg_JeNwk",
            "imgs": ['/grapes.jpg', '/grapes-plant.jpg']
        },
        {
            "crop": "Mango",
            "url": "https://youtu.be/FEZY3uLLGBA?si=k2Bljmtc0W00OJQ5",
            "imgs": ['/mango.jpg', '/mango-plant.jpg']
        },
        {
            "crop": "Banana",
            "url": "https://youtu.be/bnRRrdW7gU0?si=keAaN316qPO1aG6h",
            "imgs": ['/banana.jpg', '/banana-plant.jpg']
        },
        {
            "crop": "Pomegranate",
            "url": "https://youtu.be/ZIm54y1GyZg?si=wXeOcandWgco4vcJ",
            "imgs": ['/pomegranate.jpg', '/pomegranate-plant.jpg']
        },
        {
            "crop": "Lentil",
            "url": "https://youtu.be/O8v-ORrFSwA?si=FnrW7Znzf9H-QeU2",
            "imgs": ['/lentil.jpg', '/lentil-plant.jpg']
        },
        {
            "crop": "Blackgram",
            "url": "https://youtu.be/ntdCUtWB5Oo?si=cL03IRlORtz8KsDE",
            "imgs": ['/blackgram.jpg', '/blackgram-plant.jpg']
        },
        {
            "crop": "Mungbean",
            "url": "https://youtu.be/PZkb72N0Ts8?si=AeFxoTecP4Zz5nWx",
            "imgs": ['/mungbean.jpg', '/mungbean-plant.jpg']
        },
        {
            "crop": "Mothbeans",
            "url": "https://youtu.be/eT9nis5zCaE?si=NYfv2z_6eBTsgYvg",
            "imgs": ['/mothbeans.jpg', '/mothbeans-plant.jpg']
        },
        {
            "crop": "Pigeonpeas",
            "url": "https://youtu.be/rqehP3vTvnY?si=V0oCQ3mZmmrxXITd",
            "imgs": ['/pigeonpeas.jpg', '/pigeonpeas-plant.jpg']
        }
    ];

    const sliderRef = useRef(null);
    const [crop, setCrop] = useState(null);
    const [cropImage, setCropImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            n: parseInt(formData.get('Nitrogen (N)')) || 0,
            sec: parseInt(formData.get('Soil EC')) || 0,
            h: parseInt(formData.get('Humidity')) || 0,
            ph: parseInt(formData.get('pH')) || 0,
            p: parseInt(formData.get('Phosphorus (P)')) || 0,
            k: parseInt(formData.get('Potassium (K)')) || 0,
            r: parseInt(formData.get('Rainfall')) || 0,
            t: parseInt(formData.get('Temperature (°C)')) || 0
        };

        try {
            const response = await fetch('http://localhost:5555/data', {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log("Response from backend:", responseData);
            const predictedCrop = responseData.predictions ? responseData.predictions[0].values[0][0] : null;
            setCrop(predictedCrop);

            // if (predictedCrop) {
            //     for (let i = 0; i < crops_data.length; i++) {
            //         if (crops_data[i].crop.toLowerCase() === predictedCrop.toLowerCase()) {
            //             setCropImage(crops_data[i].imgs[0]);
            //             break;
            //         }
            //     }
            // }
        } catch (error) {
            console.error("Error sending data to backend:", error);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        let intervalId;

        const slide = () => {
            if (slider && slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0;
            } else {
                if (slider) {
                    slider.scrollLeft += slider.clientWidth;
                }
            }
        };

        intervalId = setInterval(slide, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='flex'>
            
            {/* {cropImage && <img src={cropImage} width="120px" alt="Crop" className="crop-image" />} */}
            <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="Nitrogen (N)" placeholder="Nitrogen (N)" required />
                    <input type="number" name="Phosphorus (P)" placeholder="Phosphorus (P)" required />
                    <input type="number" name="Potassium (K)" placeholder="Potassium (K)" required />
                    <input type="number" name="Temperature (°C)" placeholder="Temperature (°C)" required />
                    <input type="number" name="Humidity" placeholder="Humidity" required />
                    <input type="number" name="pH" placeholder="pH" required />
                    <input type="number" name="Rainfall" placeholder="Rainfall" required />
                    <input type="number" name="Soil EC" placeholder="Soil EC" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems:"center",
                width:"fit-content"
            }}>
                <h1>{crop ? crop : "No Crop"}</h1>
                <div className='for-img'>
                    <div className='slider' ref={sliderRef}>
                        {crop
                            ? crops_data.find(c => c.crop.toLowerCase() === crop.toLowerCase())?.imgs.map((img, i) => (
                                
                                <img key={i} className='img' src={`../../public/${img}`} alt={img} />
                            ))
                            : <>
                                <img className='img' src={Crop} alt="Default Crop" />
                                <img className='img' src={Crop2} alt="Default Crop" />
                                <img className='img' src={Crop3} alt="Default Crop" />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
