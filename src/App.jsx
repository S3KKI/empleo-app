import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import PostJob from "./components/PostJob";
import JobDetail from "./components/JobDetail";

export default function App() {
  const [view, setView] = useState("home");

  const jobExample = {
    title: "Desarrollador Frontend",
    company: "Tech Solutions SAC",
    location: "Lima, Perú",
    type: "Tiempo completo",
    description:
      "Buscamos un desarrollador Frontend con experiencia en React y Tailwind CSS. "
      + "Será responsable de crear interfaces modernas, accesibles y optimizadas "
      + "para aplicaciones web de alto rendimiento."
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setView={setView} />

      {/* HOME */}
      {view === "home" && (
        <>
          <SearchBar />
          <div className="max-w-5xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
            <JobCard
              title={jobExample.title}
              company={jobExample.company}
              location={jobExample.location}
              type={jobExample.type}
              setView={setView}
            />
          </div>
        </>
      )}

      {/* PUBLICAR EMPLEO */}
      {view === "post" && <PostJob />}

      {/* DETALLE DEL EMPLEO */}
      {view === "detail" && (
        <JobDetail job={jobExample} setView={setView} />
      )}
    </div>
  );
}
