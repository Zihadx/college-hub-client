import Banner from "../Banner/Banner";
import ImageStore from "../ImageStore/ImageStore";
import PopularCollege from "../PopularCollege/PopularCollege";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularCollege></PopularCollege>
           <ImageStore></ImageStore>
        </div>
    );
};

export default Home;