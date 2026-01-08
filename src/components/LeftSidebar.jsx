export default function LeftSidebar() {
    return (
        <aside className="hidden lg:block w-60">
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-gray-300 mb-2" />

                <h2 className="font-semibold text-sm">Angelo Rojas</h2>
                <p className="text-xs text-gray-500">
                    Estudiante de Sistemas
                </p>

                <div className="border-t mt-4 pt-2 text-xs text-gray-600 text-left">
                    <p className="flex justify-between">
                        <span>Conexiones</span>
                        <span className="font-semibold">120</span>
                    </p>
                    <p className="flex justify-between mt-1">
                        <span>Postulaciones</span>
                        <span className="font-semibold">5</span>
                    </p>
                </div>

            </div>
        </aside>
    );
}
