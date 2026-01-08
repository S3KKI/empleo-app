export default function JobCard({ title, company, location, type, setView }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">{company}</p>

            <div className="flex justify-between mt-3">
                <span className="text-sm">📍 {location}</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {type}
                </span>
            </div>

            <button
                onClick={() => setView("detail")}
                className="mt-4 text-blue-600 font-semibold hover:underline"
            >
                Ver detalles →
            </button>
        </div>
    );
}
