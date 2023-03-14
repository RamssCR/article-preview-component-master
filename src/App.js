import "./App.css";
import React, {useState} from "react";
import { useMediaQuery } from "react-responsive";

export function Component() {

  let [word, setWord] = useState('')
  let [word2, setWord2] = useState('')
  let [bool, setBool] = useState(false)
  let [display, setDisplay] = useState('')
  const widthSize = useMediaQuery({query: '(min-width: 1115px)'})

  return (
    <>
      <main className="main">
        <img src="/drawers.jpg" alt="Foto" className="drawer"/>
        <div className="flex-behave">
          <article className="component-info">
            <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
            <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
          </article>

          <article className="user-info">
            <div className="user-contact-route">
              <div className="user-and-date">
                <img alt="a" src="/avatar-michelle.jpg" />
                <div className="date">
                  <span>Michelle Appleton</span>
                  <p>28 Jun 2020</p>
                </div>
              </div>

              <img alt="img" src="/share.svg" className="share" onMouseOver={()=>{
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
                <img alt="a" src="/icon-facebook.svg" className="fb-icon" />
                <img alt="a" src="/icon-twitter.svg" className="tw-icon" />
                <img alt="a" src="/icon-pinterest.svg" className="pt-icon" />
              </div>

              <img src="/icon-share.svg" alt="a" className="share1" onClick={() => {
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
                <img alt="a" src="/icon-facebook.svg" className="fb-icon" />
                <img alt="a" src="/icon-twitter.svg" className="tw-icon" />
                <img alt="a" src="/icon-pinterest.svg" className="pt-icon" />
              </div>
            </div>
          </article>
        </div>

      </main>
    </>
  );
}
