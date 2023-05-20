import ExtraFirst from "./ExtraFirst";
import ExtraSecond from "./ExtraSecond";
import Gallery from "./Gallery";
import Header from "./Header";
import Category from "./category";
import useTitle from "./useTitle";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <Category></Category>
            <ExtraFirst></ExtraFirst>
            <ExtraSecond></ExtraSecond>
        </div>
    );
};

export default Home;