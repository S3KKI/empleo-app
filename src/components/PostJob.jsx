export default function PostJob() {
    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Publicar nuevo empleo
            </h2>

            <form className="space-y-5">
                <input
                    type="text"
                    placeholder="Título del empleo"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Empresa"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />

                <select className="w-full border rounded-lg px-4 py-2">
                    <option>Tipo de empleo</option>
                    <option>Tiempo completo</option>
                    <option>Medio tiempo</option>
                    <option>Remoto</option>
                    <option>Contrato</option>
                </select>

                <textarea
                    placeholder="Descripción del empleo"
                    rows="5"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Publicar empleo
                </button>
            </form>
        </div>
    );
}
