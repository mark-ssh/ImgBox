import { useRouteError } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="w-full flex flex-col text-center justify-center gap-4 h-[70vh]">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
