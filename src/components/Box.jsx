/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import speaker from "/src/assets/sound_max_fill.svg"
import copy from "/src/assets/content_copy_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"

export default function Box(){

    const [translatedLanguage, setTranslatedLanguage] = React.useState("en")

    const [translatorLanguage, setTranslatorLanguage] = React.useState("fr")

    const [phrase, setPhrase] = React.useState("Hello, how are you?")

    const [translatedPhrase, setTranslatedPhrase] = React.useState("")

    const [data, setData] = React.useState("")

    function handleChange(event){
        setPhrase(event.target.value)
    }
   
    React.useEffect(() => {
        fetch(`https://api.mymemory.translated.net/get?q=${phrase}&langpair=${translatedLanguage}|${translatorLanguage}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(error => console.log(error))
    }, [phrase, translatedLanguage, translatorLanguage])

    function translate(){
        setTranslatedPhrase(data.responseData.translatedText)
    }
    
    return(
        <div className="box">
            <div className="translated">
                        <div className="languages">
                            <h3>Detect Language</h3>
                            <button onClick={() => setTranslatedLanguage("en")} className={translatedLanguage === "en" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "en" ? true : false}>English</button>
                            <button onClick={() => setTranslatedLanguage("fr")} className={translatedLanguage === "fr" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "fr" ? true : false}>French</button>
                            <button onClick={() => setTranslatedLanguage("es")} className={translatedLanguage === "es" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "es" ? true : false}>Spanish</button>
                        </div>
                        <textarea name="textArea" id="" className="text-area" maxLength="500" onChange={handleChange} defaultValue={phrase} />
                        <div className="audio-and-copy">
                            <div className="audio-and-copy-buttons">
                            <button>
                                <img src={speaker} alt="" />
                            </button>
                            <button>
                                <img src={copy} alt="" onClick={() => navigator.clipboard.writeText(phrase)} />
                            </button>
                            </div>
                            <h5 className="caracters-count">{phrase.length}/500</h5>
                            <button className="translate-button" onClick={() => translate()}>
                                Translate
                            </button>
                        </div>
            </div>
                <div className="translator">
                    <div className="languages">
                        <h3>Detect Language</h3>
                        <button onClick={() => setTranslatorLanguage("en")} className={translatorLanguage === "en" ? "selected-language" : "language-button"} disabled={translatedLanguage === "en" ? true : false}>English</button>
                        <button onClick={() => setTranslatorLanguage("fr")} className={translatorLanguage === "fr" ? "selected-language" : "language-button"} disabled={translatedLanguage === "fr" ? true : false}>French</button>
                        <button onClick={() => setTranslatorLanguage("es")} className={translatorLanguage === "es" ? "selected-language" : "language-button"} disabled={translatedLanguage === "es" ? true : false}>Spanish</button>
                    </div>
                    <textarea name="any-name" id="" className="text-area" maxLength="500" disabled={true} value={translatedPhrase} />
                    <div className="audio-and-copy">
                        <button>
                            <img src={speaker} alt="" />
                        </button>
                        <button>
                            <img src={copy} alt="" onClick={() => navigator.clipboard.writeText(translatedPhrase)} />
                        </button>
                    </div>
                </div>
            
        </div>
    )
}