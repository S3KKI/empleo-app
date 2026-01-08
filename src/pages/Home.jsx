import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f3f2ef]">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </div>
        </div>
    );
}
