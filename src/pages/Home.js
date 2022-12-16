import Header from "../components/Header";
import Website from "../components/Website";
import About from "../components/About";
import Security from "../components/Security";


function Home(props) {
    return(
        <div className="home">
            <Header />
            <About />
            <Security />
            <Website />
        </div>
    )
};

export default Home;