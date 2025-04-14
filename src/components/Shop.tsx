import React, { type SyntheticEvent } from "react";
import "./Shop.scss";
import lupka from "../images/lupka.svg";
import gsap from "gsap";
import { cart, type Cart, type Product } from "../atoms/cart";
import { useGSAP } from "@gsap/react";
import { generateSlug } from "../lib/generateSlug";

export default function Shop(props: { products: Product[] }) {
  const [productType, setProductType] = React.useState("Akcesoria");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [stopAnimation, setStopAnimation] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  function hadndleSearchClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  React.useEffect(() => {
    const ctx = gsap.context(() => {});
    ctx.add(() => {
      gsap.from(".product", {
        y: -50,
        opacity: 0,
        stagger: 0.05,
      });
    });

    return () => {
      ctx.revert();
    };
  }, [productType, searchQuery]);

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <nav className="main-nav">
        <nav className="switch-nav">
          <ul>
            <li
              onClick={() => setProductType("Akcesoria")}
              style={{ opacity: productType === "Odzież" ? 0.25 : 1 }}
            >
              Akcesoria
            </li>
            <li
              onClick={() => setProductType("Odzież")}
              style={{ opacity: productType === "Akcesoria" ? 0.25 : 1 }}
            >
              Odzież
            </li>
          </ul>
        </nav>
        <div className="search-nav" onClick={hadndleSearchClick}>
          <img src={lupka.src} alt="Szukaj" />
          <input
            type="text"
            placeholder="Szukaj..."
            ref={inputRef}
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleQuery(e)
            }
          />
        </div>
      </nav>
      <section className="products">
        {
          // @ts-ignore
          props.products
            .filter((product:Product) => product.type == productType)
            .map(
              (product, index) =>
                (searchQuery === "" ||
                  product.name
                    .toLocaleLowerCase()
                    .search(searchQuery.toLocaleLowerCase())) !== -1 && (
                  <div key={index} className="product">
                    <a href={`/sklep/${generateSlug(product.name)}`}>
                      <img
                        src={product.imageSource}
                        alt="Produkt"
                        className="product-image"
                      />
                      <div className="overlay">
                        <h3>{product.name}</h3>
                        <p className="price">{product.price} PLN</p>
                      </div>
                    </a>
                  </div>
                )
            )
        }
      </section>
    </>
  );
}
