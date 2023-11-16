import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";

export default function Home() {
    return (
        <div className="h-[100vh] bg-[#333]">
            <Navbar />
            <UserList />
            {/* <Footer /> */}
        </div>
    );
}
