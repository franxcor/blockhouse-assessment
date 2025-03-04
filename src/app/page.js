'use client'
import styles from "./page.module.css";
import axios from 'axios';
import { useState, useEffect } from "react";


export default function Home() {
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const [fiveCryptoData, setFiveCryptoData] = useState({
    one: {name: "", price: 0},
    two: {name: "", price: 0},
    three: {name: "", price: 0},
    four: {name: "", price: 0},
    five: {name: "", price: 0}
  });

  const [searchResults, setSearchResults] = useState ({
    name: "",
    price: 0,
  })

  const getFiveData = async () => {
    let response = null;
    setLoading(true);
    try {
      response = await axios.get('https://api.coincap.io/v2/assets/');
    } catch (ex) {
      response = null;
      console.log(ex);
      //reject(ex);
    } finally {
      setLoading(false);
    }
    if (response) {
      //lazy grab of first 5 names and prices
      const json = Object.values(response.data['data']);
      setFiveCryptoData({
        one: {name: json[0]["id"], price: json[0]["priceUsd"]},
        two: {name: json[1]['id'], price: json[1]["priceUsd"]},
        three: {name: json[2]['id'], price: json[2]["priceUsd"]},
        four: {name: json[3]['id'], price: json[3]["priceUsd"]},
        five: {name: json[4]['id'], price: json[4]["priceUsd"]}
      });

    }
  };

  const [searched, setSearched] = useState("");
  const handleSearch = async (event) => {
    event.preventDefault();
    console.log(searched);
    setSearchLoading(true);
    let response = null;
    try {
      console.log(`https://api.coincap.io/v2/assets/${searched}`)
      response = await axios.get(`https://api.coincap.io/v2/assets/${searched}`);
    } catch (AxiosError) {
      setErrors("This cryptocurrency doesn't exist. Please try again")
      response = null;
    } finally {
      setSearchLoading(false);
    }
    if (response) {
      const json = Object.values(response.data['data']);
      
      setSearchResults({
        name: json[0], 
        price: json[8]
      });
    }
  }

  useEffect(() => {
    
    console.log("effect running ")
    if (typeof window !== 'undefined') {
      window.onload = getFiveData();
    }
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className = {styles.infoDisplay}>
          <h1 className = {styles.title}> Welcome to Crypto Tracker </h1>
          {/* data displays */}
          <div className = {styles.displays}>
            <div className={styles.mainDashboard}>
              <h1 className = {styles.dashTitle}> Top 5 Cryptocurrencies </h1>
              {loading && <p> loading... </p>}  {/* semi-lazy load indicator */}
              {fiveCryptoData.one.name !== "" &&
                <table className={styles.table}>
                  <thead className={styles.tableHead}>
                    <tr>
                      <td>
                        Name
                      </td>
                      <td>
                        Price
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {fiveCryptoData.one.name}
                      </td>
                      <td>
                        {fiveCryptoData.one.price}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {fiveCryptoData.two.name}
                      </td>
                      <td>
                        {fiveCryptoData.two.price}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {fiveCryptoData.three.name}
                      </td>
                      <td>
                        {fiveCryptoData.three.price}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {fiveCryptoData.four.name}
                      </td>
                      <td>
                        {fiveCryptoData.four.price}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {fiveCryptoData.five.name}
                      </td>
                      <td>
                        {fiveCryptoData.five.price}
                      </td>
                    </tr>
                  </tbody>
                </table>
            }
            <button className = {styles.refresh} onClick={getFiveData} disabled={loading === true}> Refresh </button>
            </div>


            <div className = {styles.searchResults}>
              <h1> Search Results</h1>
              {errors === "" && searchResults. name !== ""  && 
              <table className={styles.table}>
                <thead className={styles.tableHead}>
                <tr><td>Current price of {searchResults.name} : </td></tr>
                </thead>
                <tbody>
                  <tr><td>{searchResults.price} </td></tr>
                </tbody>
              </table>}
              {searchLoading && <p> loading... </p>} {/* semi-lazy load indicator */}
              
              {errors && <p>{errors}</p>}
              <form onSubmit = {handleSearch} className = {styles.searchForm}>
                <input type="text" onChange={(e) => setSearched(e.target.value)} className={styles.search} placeholder="Enter a currency"></input>
                <input type="submit" className={styles.refresh} value="Search" disabled={searchLoading === true}></input>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    /* KEEPING THIS FOR SYNTAX REFERENCE 
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    */
  );
}
