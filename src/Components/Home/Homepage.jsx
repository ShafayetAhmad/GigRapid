import CategoryTabs from "../CategoryTabs/CategoryTabs";
import HighestRatedGig from "../HighestRatedGig/HighestRatedGig";
import NeedSomethingDone from "../NeedSomethingDone/NeedSomethingDone";
import Banner from "./Banner/Banner";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <NeedSomethingDone></NeedSomethingDone>
            <CategoryTabs></CategoryTabs>
            <HighestRatedGig></HighestRatedGig>
        </div>
    );
};

export default Homepage;