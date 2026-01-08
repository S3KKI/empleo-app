export default function Post() {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                    <h3 className="text-sm font-semibold">Empresa Tech</h3>
                    <p className="text-xs text-gray-500">Hace 1 día</p>
                </div>
            </div>

            <p className="text-sm text-gray-700 mb-3">
                Buscamos desarrollador React con conocimientos en testing y CI/CD.
            </p>

            <div className="flex justify-between text-xs text-gray-500">
                <span className="hover:text-black cursor-pointer">👍 Me gusta</span>
                <span className="hover:text-black cursor-pointer">💬 Comentar</span>
                <span className="hover:text-black cursor-pointer">🔄 Compartir</span>
            </div>
        </div>
    );
}
