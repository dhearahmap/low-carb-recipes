import "../styles/globals.css";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={quicksand.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
