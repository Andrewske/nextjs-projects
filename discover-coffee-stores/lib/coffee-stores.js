import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    perPage: 40,
  });
  const unsplashResults = photos.response?.results || [];

  return unsplashResults.map((result) => result.urls['small']);
};

export const fetchCoffeeStores = async (
  latLong = '47.6129432,-122.4821489',
  radius = 20,
  limit = 8,
  category = 13035,
  query = 'coffee'
) => {
  try {
    const photos = await getListOfCoffeeStorePhotos();

    const response = await fetch(
      `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&v=20220216&radius=${radius}&limit=${limit}&category=${category}`,
      { headers: { Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY } }
    );
    const data = await response.json();

    return (
      data?.results?.map((venue, idx) => {
        const neighborhood = venue.location.neighborhood;
        return {
          id: venue.fsq_id,
          address: venue.location.address || '',
          name: venue.name,
          neighborhood:
            (neighborhood && neighborhood.length > 0 && neighborhood[0]) ||
            venue.location.cross_street ||
            '',
          imgUrl: photos[idx],
        };
      }) || []
    );
  } catch (err) {
    console.log(err.message);
    return;
  }
};
