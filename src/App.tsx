import { Routes, Route } from "react-router-dom";
import { LangProvider } from "./hooks/useLang";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ItemGrid } from "./components/ItemGrid";
import { ItemDetail } from "./components/ItemDetail";
import { SetDetail } from "./components/SetDetail";
import { Footer } from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <ItemGrid />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/item/:id/:imageIndex" element={<ItemDetail />} />
          <Route path="/set/:id" element={<SetDetail />} />
          <Route path="/set/:id/:imageIndex" element={<SetDetail />} />
        </Routes>
      </main>
      <Footer />
    </LangProvider>
  );
}
