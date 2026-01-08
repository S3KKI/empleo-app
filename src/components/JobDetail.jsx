export default function JobDetail({ job, setView }) {
    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
            <button
                onClick={() => setView("home")}
                className="text-blue-600 mb-4 hover:underline"
            >
                ← Volver
            </button>

            <h1 className="text-3xl font-bold text-gray-800">
                {job.title}
            </h1>

            <p className="text-gray-600 mt-1">
                {job.company} • {job.location}
            </p>

            <span className="inline-block mt-3 bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                {job.type}
            </span>

            <h3 className="mt-6 text-xl font-semibold">Descripción</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
                {job.description}
            </p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Postular ahora
            </button>
        </div>
    );
}
