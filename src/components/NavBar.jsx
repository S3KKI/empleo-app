export default function Navbar({ setView }) {
    return (
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
            <h1
                className="text-2xl font-bold text-blue-600 cursor-pointer"
                onClick={() => setView("home")}
            >
                Empleo<span className="text-gray-800">App</span>
            </h1>

            <button
                onClick={() => setView("post")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Publicar empleo
            </button>
        </nav>
    );
}
