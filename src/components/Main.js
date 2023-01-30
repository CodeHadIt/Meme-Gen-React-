import React from 'react'

const Main = () => {

    //created a new state and gave it an empty string(because ultimately we'll pass in our url here which is a string)
    // const [memeImage, setMemeImage] = React.useState("")
    //New state with object of three properties.
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://imgflip.com/s/meme/Futurama-Fry.jpg"
    })

        //then passed our imported memesdata into state.
        //on first render the data from the api will be stored in allMemes state array
    const [allMemes, setAllMemes] = React.useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    //This is the function that will be called on click of a button.
    const getMemeImage = () =>{
        //we then generate a random one of these memes from the allMemes array
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        let url = allMemes[randomNumber].url;

        
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                [name]: value
                
            }
        })
    }

    return (
        <main>
            <div className='form'>
                <input 
                type="text" 
                placeholder='Upper Text'
                className='form-inputs'
                name= 'topText'
                value= {meme.topText}
                onChange = {handleChange}
                />


                <input type="text"
                placeholder='Lower Text' 
                className='form-inputs'
                name= 'bottomText'
                value= {meme.bottomText}
                onChange = {handleChange}
                />


                <button className='form-btn' onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>

            <div className="meme">
                <div className="image-container">
                    <img src={meme.randomImage} alt=""  />
                </div>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Main