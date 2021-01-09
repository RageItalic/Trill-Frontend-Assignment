import {useState, useEffect} from 'react'
import Butterfly1 from "./Assets/Butterflies/Butterfly1.jpg" 
import Butterfly2 from "./Assets/Butterflies/Butterfly2.jpg"
import Butterfly3 from "./Assets/Butterflies/Butterfly3.jpg"
import './App.css';
import axios from "axios"

function App() {

  //using state to store the quote
  let [quote, setQuote] = useState("Loading...")

  //fetching and setting quote when component mounts
  useEffect(() => {
    let fetchQuote = async () => {
      let result = await axios.get('https://quotes.rest/qod')
      setQuote(result.data.contents.quotes[0].quote)
    }
    fetchQuote()
  }, [])


  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Butterflies</h1>
        <p>{quote}</p>
      </div>
      <div className="imagesContainer">
        {/* 
          The code below is a version of the image grid 
          that is displayed using a map. Centering the middle image was a little troubling.
          However, the other 2 display exactly as wanted.
          One way to use map and get the desired result is to use
          conditionals and compare the index manually and use different CSS
          for the middle image.. but that would have to be hardcoded so it feels like cheating.
          But, this seems to be the better option compared to actually laying out each image manually... 
        */}
        {
          [
            {img: Butterfly1, title: "Danaus Plexippus"}, 
            {img: Butterfly2, title: "Morpho Pelides"}, 
            {img: Butterfly3, title: "Delias Eucharia"}
          ].map(({img, title}, index) => {
            return (
              <div className="butterfly">
                <div className="imgBox" key={index}>
                  <img src={img} 
                  style={index === 0 || index === 2 
                    ? {
                        minHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "cover"
                      } 
                    : {
                        maxHeight: "100%",
                        minWidth: "100%",
                        objectFit: "cover"
                      }
                  }
                  />
                </div>
                <h3>{title}</h3>
              </div>
            )
          })
        } 


        {/* This is the even more hardcoded, manually laid out version */}
        {/* <div className="butterfly">
          <div className="imgBox">
            <img src={Butterfly1} style={{
              minHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover"
            }} />
          </div>
          <h3>Danaus Plexippus</h3>
        </div>
        <div className="butterfly">
          <div className="imgBox">
            <img src={Butterfly2} style={{
              maxHeight: "100%",
              minWidth: "100%",
              objectFit: "cover"
            }} />
          </div>
          <h3>Morpho Pelides</h3>
        </div>
        <div className="butterfly">
          <div className="imgBox">
            <img src={Butterfly3} style={{
              minHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover"
            }} />
          </div>
          <h3>Delias Eucharia</h3>
        </div> */}
      </div>
    </div>



  );
}

export default App;
