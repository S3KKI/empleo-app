export default function RightSidebar() {
    return (
        <aside className="hidden xl:block w-72">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-3">
                    Empleos recomendados
                </h3>

                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="hover:text-black cursor-pointer">
                        Desarrollador Frontend
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        QA Automation
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        Analista TI
                    </li>
                </ul>
            </div>
        </aside>
    );
}
