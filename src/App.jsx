import HeaderBackground from "./assets/components/HeaderBackground";
import Listings from "./assets/components/Listings";

function App() {
  return (
    <>
      <HeaderBackground />
      <main className="font-sans flex justify-center bg-background">
        <Listings />
      </main>
    </>
  );
}

export default App;
