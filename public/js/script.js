// document.addEventListener("DOMContentLoaded", function () {
//     const projectsGrid = document.getElementById("projectsGrid");
//     const searchInput = document.getElementById("search");

//     // Function to generate project cards
//     function displayProjects(filteredProjects) {
//         projectsGrid.innerHTML = ""; // Clear previous projects
//         filteredProjects.forEach(project => {
//             projectsGrid.innerHTML += `
//                 <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                     <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover rounded-md">
//                     <h3 class="text-lg font-semibold text-gray-800 mt-4">${project.title}</h3>
//                     <p class="text-gray-600 mt-2">${project.description}</p>
//                     <a href="${project.link}" class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Project Details</a>
//                 </div>
//             `;
//         });
//     }

//     // Display all projects initially
//     displayProjects(projects);

//     // Search filter functionality
//     searchInput.addEventListener("input", function () {
//         const searchText = searchInput.value.toLowerCase();
//         const filteredProjects = projects.filter(project =>
//             project.title.toLowerCase().includes(searchText)
//         );
//         displayProjects(filteredProjects);
//     });
// });
