/* eslint-disable react/prop-types */
import React from "react"
import speaker from "/src/assets/sound_max_fill.svg"
import copy from "/src/assets/content_copy_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"

export default function Box(){

    const [translatedLanguage, setTranslatedLanguage] = React.useState("")

    const [translatorLanguage, setTranslatorLanguage] = React.useState("")

    const [charCount, setCharCount] = React.useState(0)

    function handleChange(event){
        setCharCount (event.target.value.length)
    }

    return(
        <div className="box">
            <div className="translated">
                        <div className="languages">
                            <h3>Detect Language</h3>
                            <button onClick={() => setTranslatedLanguage("english")} className={translatedLanguage === "english" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "english" ? true : false}>English</button>
                            <button onClick={() => setTranslatedLanguage("french")} className={translatedLanguage === "french" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "french" ? true : false}>French</button>
                            <button onClick={() => setTranslatedLanguage("spanish")} className={translatedLanguage === "spanish" ? "selected-language" : "language-button"}  disabled={translatorLanguage === "spanish" ? true : false}>Spanish</button>
                        </div>
                        <textarea name="textArea" id="" className="text-area" maxLength="500" onChange={handleChange}>
                        
                        </textarea>
                        <div className="audio-and-copy">
                            <div className="audio-and-copy-buttons">
                            <button>
                                <img src={speaker} alt="" />
                            </button>
                            <button>
                                <img src={copy} alt="" />
                            </button>
                            </div>
                            <h5 className="caracters-count">{charCount}/500</h5>
                            <button className="translate-button">
                                Translate
                            </button>
                        </div>
            </div>
                <div className="translator">
                    <div className="languages">
                        <h3>Detect Language</h3>
                        <button onClick={() => setTranslatorLanguage("english")} className={translatorLanguage === "english" ? "selected-language" : "language-button"} disabled={translatedLanguage === "english" ? true : false}>English</button>
                        <button onClick={() => setTranslatorLanguage("french")} className={translatorLanguage === "french" ? "selected-language" : "language-button"} disabled={translatedLanguage === "french" ? true : false}>French</button>
                        <button onClick={() => setTranslatorLanguage("spanish")} className={translatorLanguage === "spanish" ? "selected-language" : "language-button"} disabled={translatedLanguage === "spanish" ? true : false}>Spanish</button>
                    </div>
                    <textarea name="" id="" className="text-area" maxLength="500">
                        
                    </textarea>
                    <div className="audio-and-copy">
                        <button>
                            <img src={speaker} alt="" />
                        </button>
                        <button>
                            <img src={copy} alt="" />
                        </button>
                    </div>
                </div>
            
        </div>
    )
}