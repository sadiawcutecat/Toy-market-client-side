import ExtraFirst from "./ExtraFirst";
import ExtraSecond from "./ExtraSecond";
import Gallery from "./Gallery";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ExtraFirst></ExtraFirst>
            <ExtraSecond></ExtraSecond>
        </div>
    );
};

export default Home;