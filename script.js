const cursos = [
  { id: 1, nombre: "Química General I", semestre: 1, prerequisitos: [] },
  { id: 2, nombre: "Técnicas de Laboratorio Químico", semestre: 1, prerequisitos: [] }
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
      div.id = `curso-${curso.id}`;
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