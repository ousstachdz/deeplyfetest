export default function swDev() {
  const SW_URL = `${import.meta.env.BASE_URL}sw.js`
  navigator.serviceWorker.register(SW_URL).then((response) => {
    console.log( response)
  })
}
