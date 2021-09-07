import '../public/styles/reset.scss'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}