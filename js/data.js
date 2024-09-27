// Supongamos que tienes el JSON almacenado en una variable
const cvData = {
  personalInfo: {
    name: "Juan Pérez",
    contact: {
      email: "diego.cervera@bue.edu.ar",
      phone: "+54 9 11 1234 5678",
      address: "Calle Falsa 123, Buenos Aires, Argentina",
      linkedin: "https://www.linkedin.com/in/juanperez",
      github: "https://github.com/juanperez",
    },
    summary:
      "Líder técnico con más de 10 años de experiencia en el desarrollo y despliegue de aplicaciones en servidores. Especializado en tecnologías web, sistemas distribuidos y automatización de procesos.",
  },
  experience: [
    {
      position: "Líder Técnico",
      company: "Tech Solutions",
      location: "Buenos Aires, Argentina",
      startDate: "2020-01",
      endDate: "Presente",
      responsibilities: [
        "Liderar un equipo de 10 desarrolladores en proyectos de desarrollo web y de infraestructura.",
        "Diseñar e implementar procesos de CI/CD utilizando Jenkins y Docker.",
        "Desplegar aplicaciones escalables en servidores utilizando Kubernetes y AWS.",
      ],
      achievements: [
        "Reducción del tiempo de despliegue de aplicaciones en un 30%.",
        "Implementación de un sistema de monitoreo y alertas que mejoró la detección de fallos en producción.",
      ],
    },
  ],
  education: [
    {
      degree: "Ingeniería en Sistemas de Información",
      institution: "Universidad de Buenos Aires",
      startDate: "2010-03",
      endDate: "2015-12",
    },
  ],
  skills: {
    technical: [
      "JavaScript",
      "Node.js",
      "React",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Git",
    ],
    softSkills: [
      "Liderazgo",
      "Comunicación",
      "Trabajo en equipo",
      "Resolución de problemas",
    ],
  },
  languages: [
    {
      language: "Español",
      level: "Nativo",
    },
    {
      language: "Inglés",
      level: "Avanzado",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022-06",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "2021-09",
    },
  ],
};

// Función para renderizar información personal
function renderPersonalInfo(info) {
  const personalInfoDiv = document.getElementById("personal-info");
  personalInfoDiv.innerHTML = `
      <h2>${info.name}</h2>
      <p>Email: <a href="mailto:${info.contact.email}">${info.contact.email}</a></p>
      <p>Teléfono: ${info.contact.phone}</p>
      <p>Dirección: ${info.contact.address}</p>
      <p>LinkedIn: <a href="${info.contact.linkedin}" target="_blank">${info.contact.linkedin}</a></p>
      <p>GitHub: <a href="${info.contact.github}" target="_blank">${info.contact.github}</a></p>
      <p><strong>Resumen:</strong> ${info.summary}</p>
    `;
}

// Función para renderizar la experiencia
function renderExperience(experience) {
  const experienceDiv = document.getElementById("experience");
  experienceDiv.innerHTML = "<h3>Experiencia</h3>";
  experience.forEach((job) => {
    const jobHTML = `
        <div>
          <h4>${job.position} - ${job.company}</h4>
          <p>${job.location}</p>
          <p><strong>Fechas:</strong> ${job.startDate} - ${job.endDate}</p>
          <p><strong>Responsabilidades:</strong></p>
          <ul>${job.responsibilities
            .map((res) => `<li>${res}</li>`)
            .join("")}</ul>
          <p><strong>Logros:</strong></p>
          <ul>${job.achievements.map((ach) => `<li>${ach}</li>`).join("")}</ul>
        </div>
      `;
    experienceDiv.innerHTML += jobHTML;
  });
}

// Función para renderizar la educación
function renderEducation(education) {
  const educationDiv = document.getElementById("education");
  educationDiv.innerHTML = "<h3>Educación</h3>";
  education.forEach((edu) => {
    educationDiv.innerHTML += `
        <div>
          <p><strong>${edu.degree}</strong> - ${edu.institution}</p>
          <p>${edu.startDate} - ${edu.endDate}</p>
        </div>
      `;
  });
}

// Función para renderizar las habilidades
function renderSkills(skills) {
  const skillsDiv = document.getElementById("skills");
  skillsDiv.innerHTML = "<h3>Habilidades</h3>";
  skillsDiv.innerHTML += `
      <p><strong>Técnicas:</strong> ${skills.technical.join(", ")}</p>
      <p><strong>Blandas:</strong> ${skills.softSkills.join(", ")}</p>
    `;
}

// Función para renderizar los idiomas
function renderLanguages(languages) {
  const languagesDiv = document.getElementById("languages");
  languagesDiv.innerHTML = "<h3>Idiomas</h3>";
  languages.forEach((lang) => {
    languagesDiv.innerHTML += `<p>${lang.language} - ${lang.level}</p>`;
  });
}

// Función para renderizar las certificaciones
function renderCertifications(certifications) {
  const certificationsDiv = document.getElementById("certifications");
  certificationsDiv.innerHTML = "<h3>Certificaciones</h3>";
  certifications.forEach((cert) => {
    certificationsDiv.innerHTML += `
        <p>${cert.title} - ${cert.issuer} (${cert.date})</p>
      `;
  });
}

// Llamada para renderizar todas las secciones
renderPersonalInfo(cvData.personalInfo);
renderExperience(cvData.experience);
renderEducation(cvData.education);
renderSkills(cvData.skills);
renderLanguages(cvData.languages);
renderCertifications(cvData.certifications);
