import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/* <> </> this is called react fragment */}

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient></ButtonGradient>
    </>
  );
};

export default App;
