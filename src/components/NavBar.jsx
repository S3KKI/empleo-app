export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">

                <h1 className="text-blue-700 font-bold text-lg">
                    empleo
                </h1>

                <input
                    type="text"
                    placeholder="Buscar"
                    className="hidden md:block bg-gray-100 rounded-md px-3 py-1 text-sm w-72 outline-none"
                />

                <nav className="flex gap-8 text-xs text-gray-600">
                    {["Inicio", "Empleos", "Mensajes", "Perfil"].map(item => (
                        <span
                            key={item}
                            className="hover:text-black cursor-pointer"
                        >
                            {item}
                        </span>
                    ))}
                </nav>

            </div>
        </header>
    );
}
