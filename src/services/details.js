export async function getDetails(imdbId) {
  const res = await fetch(`https://omdbapi.com/?apikey=7584f415&i=${imdbId}`);
  const data = await res.json();
  // console.log(data);
  return data;
}
