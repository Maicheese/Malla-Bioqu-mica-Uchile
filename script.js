const cursos = [
  { id: 1, nombre: "Química General I", semestre: 1, prerequisitos: [] },
  { id: 2, nombre: "Técnicas de Laboratorio Químico", semestre: 1, prerequisitos: [] },
  { id: 3, nombre: "Introducción al Álgebra y Cálculo", semestre: 1, prerequisitos: [] },
  { id: 4, nombre: "Química Transformadora", semestre: 1, prerequisitos: [] },
  { id: 5, nombre: "Razonamiento y comunicación científica", semestre: 1, prerequisitos: [] },
  { id: 6, nombre: "Inglés I", semestre: 1, prerequisitos: [] },
  { id: 60, nombre: "Memoria de Título", semestre: 11, prerequisitos: [59] }
];

const aprobados = new Set();

function renderMalla() {
  const container = document.getElementById("malla-grid");
  container.innerHTML = "";
  for (let semestre = 1; semestre <= 11; semestre++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    columna.appendChild(titulo);
    const cursosSemestre = cursos.filter(c => c.semestre === semestre);
    cursosSemestre.forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      const bloqueado = curso.prerequisitos.some(pr => !aprobados.has(pr));
      if (aprobados.has(curso.id)) {
        div.classList.add("aprobado");
      } else if (bloqueado) {
        div.classList.add("bloqueado");
      }
      div.innerHTML = `<h3>${curso.nombre}</h3>`;
      if (!bloqueado || aprobados.has(curso.id)) {
        div.addEventListener("click", () => toggleCurso(curso.id));
      }
      columna.appendChild(div);
    });
    container.appendChild(columna);
  }
}

function toggleCurso(id) {
  if (aprobados.has(id)) {
    aprobados.delete(id);
  } else {
    aprobados.add(id);
  }
  renderMalla();
}

renderMalla();
