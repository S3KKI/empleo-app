import Header from "../components/Header";
import JobSearch from "../components/JobSearch";
import JobPost from "../components/JobPost";

const Home = () => {
    return (
        <>
            <Header />
            <main style={{ padding: "20px" }}>
                <JobSearch />
                <JobPost />
            </main>
        </>
    );
};

export default Home;
