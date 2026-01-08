import Post from "./Post";

export default function Feed() {
    return (
        <main className="flex-1 max-w-xl">
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <input
                    placeholder="¿Qué deseas publicar?"
                    className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
                />
            </div>

            <Post />
            <Post />
            <Post />
        </main>
    );
}
