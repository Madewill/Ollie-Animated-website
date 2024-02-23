import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
            <Loader setLoading={setLoading} />   z
        </motion.div>

      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <motion.img src="/images/image-2.jpg"  layoutId='main-image-1'  transition={{ ease: [0.6, 0.001, -0.05, 0.9], duration: 1.6}}/>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
