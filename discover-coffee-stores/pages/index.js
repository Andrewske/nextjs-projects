import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';
import Card from '../components/card';
import coffeeStoresData from '../data/coffee-stores.json';
import { fetchCoffeeStores } from '../lib/coffee-stores';
import useTrackLocation from '../hooks/use-track-location';
import { useEffect, useState } from 'react';

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const { handleTrackLocation, latLong, locationErrorMsg, findingLocation } =
    useTrackLocation();
  const [coffeeStores, setCoffeeStores] = useState([]);
  const [coffeeStoresError, setCoffeeStoresError] = useState(null);

  useEffect(async () => {
    if (latLong) {
      try {
        const fetchedCoffeeStores = await fetchCoffeeStores(latLong);
        setCoffeeStores(fetchedCoffeeStores);
      } catch (err) {
        console.log({ err });
        setCoffeeStoresError(err.message);
      }
    }
  }, [latLong]);

  const handleOnBannerBtnClick = () => {
    console.log('Banner clicked');
    handleTrackLocation();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={findingLocation ? 'Locating...' : 'View stores nearby'}
          handleOnClick={handleOnBannerBtnClick}
        />
        {locationErrorMsg.length > 0 ? <p>{locationErrorMsg}</p> : null}
        {coffeeStoresError ? <p>{coffeeStoresError}</p> : null}
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400} />
        </div>
        {coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Coffee Stores Near Me</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((item) => (
                <Card
                  name={item.name}
                  imgUrl={
                    item.imgUrl ||
                    'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                  }
                  href={`/coffee-store/${item.id}`}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        )}
        {coffeeStores.length === 0 && props.coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Seattle Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((item) => (
                <Card
                  name={item.name}
                  imgUrl={
                    item.imgUrl ||
                    'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                  }
                  href={`/coffee-store/${item.id}`}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
