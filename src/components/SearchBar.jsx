export default function SearchBar() {
    return (
        <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md flex gap-4">
            <input
                type="text"
                placeholder="Buscar empleo o empresa"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Ubicación</option>
                <option>Lima</option>
                <option>Remoto</option>
            </select>

            <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
                Buscar
            </button>
        </div>
    );
}
