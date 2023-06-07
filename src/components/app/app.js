import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { AppRoute } from "/src/const";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import ScrollToTop from "/src/components/ui/scroll-top/scroll-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
