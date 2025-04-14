import { useEffect, useRef, useState } from "react";

// IMAGES
import SokolLogo from "../images/SokolLogo.png";
import news from "../images/newspaper.svg";
import youth from "../images/boy.svg";
import camp from "../images/camp.svg";
import training from "../images/training.svg";
import gallery from "../images/gallery.svg";
import shop from "../images/shop.svg";
import contact from "../images/contact.svg";

import Cart from "./Cart";

import "./NavbarDesktop.scss";

type navigationOptions =
  | "home"
  | "news"
  | "youth"
  | "camp"
  | "trainers"
  | "gallery"
  | "shop"
  | "contact"
  | "none";


export default function Navbar(props: { current: navigationOptions, displayCart?: Boolean }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const burger = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);

  function changeBurgerClass() {
    burger.current?.classList.toggle("oppened");
  }

  function changeStyle(element: HTMLElement) {
    element.style.backgroundColor = "white";
    (element.children[0].children[0] as HTMLElement).style.filter = "invert()";
  }

  function lockScoll() {
    if (!isMobileNavOpen) return;

    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    changeBurgerClass();
    lockScoll();
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (list.current?.children) {
      switch (props.current) {
        case "news":
            changeStyle(list.current.children[0] as HTMLElement)
          break;
        case "youth":
          changeStyle(list.current.children[1] as HTMLElement);
          break;
        case "camp":
          changeStyle(list.current.children[2] as HTMLElement);
          break;
        case "trainers":
          changeStyle(list.current.children[3] as HTMLElement);
          break;
        case "gallery":
          changeStyle(list.current.children[4] as HTMLElement);
          break;
        case "shop":
          changeStyle(list.current.children[5] as HTMLElement);
          break;
        case "contact":
          changeStyle(list.current.children[6] as HTMLElement);
          break;
        default:
            break;
      }
    }
  }, [props.current]);

  return (
    <>
      <nav className="navbar-desktop">
        <div className="navbar-desktop-title">
          <a href="/">
            <img src={SokolLogo.src} alt="Herb klubu" />
            <span className="navbar-desktop-title-text-container">
              <span className="navbar-desktop-title-sokol">Sokół</span>{" "}
              <span className="navbar-desktop-title-marcinkowice">
                Marcinkowice
              </span>
            </span>
          </a>
        </div>

        <ul ref={list} className="navbar-desktop-list">
          <li>
            <a href="/artykuly">
              <img src={news.src} />
            </a>
          </li>
          <li>
            <a href="/grupy-mlodziezowe">
              <img src={youth.src} />
            </a>
          </li>
          <li>
            <a href="/oboz">
              <img src={camp.src} />
            </a>
          </li>
          <li>
            <a href="/trenerzy">
              <img src={training.src} />
            </a>
          </li>
          <li>
            <a href="/galeria">
              <img src={gallery.src} />
            </a>
          </li>
          <li>
            <a href="/sklep">
              <img src={shop.src} />
            </a>
          </li>
          <li>
            <a href="/kontakt">
              <img src={contact.src} />
            </a>
          </li>
        </ul>
        {props.displayCart !== undefined && <Cart/>}
      </nav>
      <nav className="navbar-mobile">
        <a href="/">
          <img src={SokolLogo.src} alt="Herb klubu" />
        </a>
        <div
          className="hamburger"
          onTouchEnd={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          <div className="dash oppened" ref={burger}></div>
        </div>
        {props.displayCart !== undefined && <Cart/>}
      </nav>
      {isMobileNavOpen && (
        <>
        <div className="navigation-mobile">
          <ul>
            <li>
              <a href="/artykuly">Aktualności</a>
            </li>
            <li>
              <a href="/grupy-mlodziezowe">Grupy Młodzieżowe</a>
            </li>
            <li>
              <a href="/oboz">Obóz</a>
            </li>
            <li>
              <a href="/trenerzy">Trenerzy</a>
            </li>
            <li>
              <a href="/galeria">Galeria</a>
            </li>
            <li>
              <a href="/sklep">Sklep</a>
            </li>
            <li>
              <a href="/kontakt">Kontakt</a>
            </li>
          </ul>
        
        </div>
        </>
      )}
    </>
  );
}
