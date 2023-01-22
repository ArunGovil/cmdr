import NotificationContext from "../context/NotificationContext";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContext>
      <Component {...pageProps} />
    </NotificationContext>
  );
}
