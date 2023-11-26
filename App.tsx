import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export const App = () => {
  return (
    <div>
      <Header title="James" age={15} isRegistered /> <Footer />
    </div>
  );
};

export const Footer = () => {
  return <h1>Bye world</h1>;
};
