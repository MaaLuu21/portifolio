fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    projects.forEach(p => {
      const projectElem = document.createElement('div');
      projectElem.classList.add('project');
      projectElem.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">Ver mais</a>
      `;
      container.appendChild(projectElem);
    });
  })
  .catch(err => console.error('Erro ao carregar projetos:', err));