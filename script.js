
const cursos = [
  { id: 1, nombre: "Química General I", semestre: 1, prerequisitos: [] },
  { id: 2, nombre: "Técnicas de Laboratorio Químico", semestre: 1, prerequisitos: [] },
  { id: 3, nombre: "Introducción al Álgebra y Cálculo", semestre: 1, prerequisitos: [] },
  { id: 4, nombre: "Química Transformadora", semestre: 1, prerequisitos: [] },
  { id: 5, nombre: "Razonamiento y comunicación científica", semestre: 1, prerequisitos: [] },
  { id: 6, nombre: "Inglés I", semestre: 1, prerequisitos: [] },
  { id: 7, nombre: "Química General II", semestre: 2, prerequisitos: [1] },
  { id: 8, nombre: "Laboratorio de Química General", semestre: 2, prerequisitos: [1, 2] },
  { id: 9, nombre: "Física General", semestre: 2, prerequisitos: [3] },
  { id: 10, nombre: "Cálculo Diferencial e Integral", semestre: 2, prerequisitos: [3] },
  { id: 11, nombre: "Biología Celular", semestre: 2, prerequisitos: [2] },
  { id: 12, nombre: "Curso de Formación General", semestre: 2, prerequisitos: [] },
  { id: 13, nombre: "Inglés II", semestre: 2, prerequisitos: [6] },
  { id: 14, nombre: "Química Orgánica I", semestre: 3, prerequisitos: [7] },
  { id: 15, nombre: "Química Analítica", semestre: 3, prerequisitos: [7, 8] },
  { id: 16, nombre: "Laboratorio de Química Orgánica", semestre: 3, prerequisitos: [7, 8] },
  { id: 17, nombre: "Estadística y Análisis de Datos", semestre: 3, prerequisitos: [10] },
  { id: 18, nombre: "Física Aplicada a la Bioquímica", semestre: 3, prerequisitos: [9] },
  { id: 19, nombre: "Fisiología Celular", semestre: 3, prerequisitos: [9, 11] },
  { id: 20, nombre: "Cultura Científica", semestre: 3, prerequisitos: [4, 5] },
  { id: 21, nombre: "Química Orgánica II", semestre: 4, prerequisitos: [14] },
  { id: 22, nombre: "Laboratorio de Análisis Químico", semestre: 4, prerequisitos: [8, 15, 17] },
  { id: 23, nombre: "Química Analítica II", semestre: 4, prerequisitos: [15] },
  { id: 24, nombre: "Fisicoquímica I", semestre: 4, prerequisitos: [9, 10, 14] },
  { id: 25, nombre: "Fisiología de Sistemas", semestre: 4, prerequisitos: [19] },
  { id: 26, nombre: "Taller de Cultura Científica", semestre: 4, prerequisitos: [20] },
  { id: 27, nombre: "Curso de Formación General", semestre: 4, prerequisitos: [] },
  { id: 28, nombre: "Laboratorio de Análisis Instrumental", semestre: 5, prerequisitos: [22, 23] },
  { id: 29, nombre: "Bioquímica General", semestre: 5, prerequisitos: [21] },
  { id: 30, nombre: "Estructura y Función de Organelos", semestre: 5, prerequisitos: [21, 25] },
  { id: 31, nombre: "Fisicoquímica para Ciencias Biológicas", semestre: 5, prerequisitos: [18, 24] },
  { id: 32, nombre: "Inglés III", semestre: 5, prerequisitos: [13] },
  { id: 33, nombre: "Estructura y Función de Proteínas", semestre: 6, prerequisitos: [29, 31] },
  { id: 34, nombre: "Genética Molecular", semestre: 6, prerequisitos: [29] },
  { id: 35, nombre: "Inmunología Celular y Molecular", semestre: 6, prerequisitos: [30] },
  { id: 36, nombre: "Microbiología General", semestre: 6, prerequisitos: [30] },
  { id: 37, nombre: "Inglés IV", semestre: 6, prerequisitos: [32] },
  { id: 38, nombre: "Química Fisiológica y Patológica", semestre: 7, prerequisitos: [33, 35] },
  { id: 39, nombre: "Genética Molecular de Eucariontes", semestre: 7, prerequisitos: [34] },
  { id: 40, nombre: "Fisiología y Genética Microbiana", semestre: 7, prerequisitos: [34, 36] },
  { id: 41, nombre: "Administración y Gestión", semestre: 7, prerequisitos: [26] },
  { id: 42, nombre: "Unidad de Investigación en Bioquímica", semestre: 7, prerequisitos: [28, 29] },
  { id: 43, nombre: "Bioquímica Clínica y Patológica", semestre: 8, prerequisitos: [38] },
  { id: 44, nombre: "Fisiología y Bioquímica Vegetal", semestre: 8, prerequisitos: [39] },
  { id: 45, nombre: "Bioética", semestre: 8, prerequisitos: [38] },
  { id: 46, nombre: "Formulación de Proyectos", semestre: 8, prerequisitos: [33] },
  { id: 47, nombre: "Bioinformática", semestre: 8, prerequisitos: [33, 39] },
  { id: 48, nombre: "Práctica Profesional I", semestre: 8, prerequisitos: [33, 34] },
  { id: 49, nombre: "Laboratorio Bioquímica Clínica", semestre: 9, prerequisitos: [41, 43] },
  { id: 50, nombre: "Tópicos de Farmacología", semestre: 9, prerequisitos: [43, 45] },
  { id: 51, nombre: "Biotecnología", semestre: 9, prerequisitos: [43, 45] },
  { id: 52, nombre: "Electivo Especializado", semestre: 9, prerequisitos: [] },
  { id: 53, nombre: "Electivo Especializado", semestre: 9, prerequisitos: [] },
  { id: 54, nombre: "Práctica Profesional II", semestre: 9, prerequisitos: [43, 47, 48] },
  { id: 55, nombre: "Unidad de Investigación Avanzada", semestre: 10, prerequisitos: [42, 49, 51] },
  { id: 56, nombre: "Bioprocesos Industriales", semestre: 10, prerequisitos: [41, 51] },
  { id: 57, nombre: "Electivo Especializado", semestre: 10, prerequisitos: [] },
  { id: 58, nombre: "Electivo Especializado", semestre: 10, prerequisitos: [] },
  { id: 59, nombre: "Proyecto de Memoria de Título", semestre: 10, prerequisitos: [46, 49, 50, 51] },
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

document.addEventListener("DOMContentLoaded", renderMalla);
