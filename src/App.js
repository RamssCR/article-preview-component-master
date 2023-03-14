import "./App.css";
import React, {useState} from "react";
import { useMediaQuery } from "react-responsive";
import imgD from './drawers.jpg';
import imgMic from './avatar-michelle.jpg';
import logoShare from './share.svg';
import iconF from './icon-facebook.svg';
import iconT from './icon-twitter.svg';
import iconP from './icon-pinterest.svg';

export function Component() {

  let [word, setWord] = useState('')
  let [word2, setWord2] = useState('')
  let [bool, setBool] = useState(false)
  let [display, setDisplay] = useState('')
  const widthSize = useMediaQuery({query: '(min-width: 1115px)'})

  return (
    <>
      <main className="main">
        <img src={imgD} alt="Foto" className="drawer"/>
        <div className="flex-behave">
          <article className="component-info">
            <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
            <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
          </article>

          <article className="user-info">
            <div className="user-contact-route">
              <div className="user-and-date">
                <img alt="a" src={imgMic} />
                <div className="date">
                  <span>Michelle Appleton</span>
                  <p>28 Jun 2020</p>
                </div>
              </div>

              <img alt="img" src={logoShare} className="share" onMouseOver={()=>{
                setWord2(word2 = '1');
                setBool(bool = true)
                setDisplay(display = 'flex')
              }} onMouseOut={()=>{
                setWord2(word2 = '0')
                setBool(bool = false)
                setDisplay(display = 'none')
              }}/>
            </div>

            <div className="contacts-mobile" style={{opacity: word}}>
              <div className="icons">
                <p>SHARE</p>
                <img alt="a" src={iconF} className="fb-icon" />
                <img alt="a" src={iconT} className="tw-icon" />
                <img alt="a" src={iconP} className="pt-icon" />
              </div>

              <img src={logoShare} alt="a" className="share1" onClick={() => {
                if (word === '0') {
                  setWord(word = '1')
                } else {
                  setWord(word = '0')
                }
              }}/>
            </div>

            <div className="contacts-mobile-d" style={{opacity: word2, display: bool && widthSize ? display : display}}
            onMouseOver={()=>{
              setDisplay(display = 'flex')
              setWord2(word2 = '1');
            }} onMouseOut={()=>{
              setDisplay(display = 'none')
              setWord2(word2 = '0')
            }}>
              <div className="icons">
                <p>SHARE</p>
                <img alt="a" src={iconF} className="fb-icon" />
                <img alt="a" src={iconT} className="tw-icon" />
                <img alt="a" src={iconP} className="pt-icon" />
              </div>
            </div>
          </article>
        </div>

      </main>
    </>
  );
}
