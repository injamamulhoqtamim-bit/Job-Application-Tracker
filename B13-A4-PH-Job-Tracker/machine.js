let jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote • Full-time • $130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"not_applied"},
  {id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA • Part-time • $80,000 - $120,000",  description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"not_applied"},
{id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA • Full-time • $125,000 - $165,000",  description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status:"not_applied"},
  {id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA • Full-time • $140,000 - $190,000",  description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"not_applied"},
  {id:5, company:"Innovation Labs", position:"UI/UX Engineer", location:"Austin, TX • Full-time • $110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"not_applied"},
  {id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York, NY • Full-time • $130,000 - $170,000",  description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"not_applied"},
  {id:7, company:"StartupXYZ", position:"Full Stack Engineer", location:"Remote • Full-time • $120,000 - $160,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"not_applied"},
  {id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA • Full-time • $130,000 - $175,000",  description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"not_applied"},
];
let currentTab = "all";
let deleteId = null;

function renderJobs() {

  const container = document.getElementById("jobContainer");
  const empty = document.getElementById("emptyState");
  container.innerHTML = "";

  const filtered = jobs.filter(job => 
    currentTab === "all" ? true : job.status === currentTab
  );

  const totalJobs = jobs.length;

  if(currentTab === "all"){
    document.getElementById("tabCount").innerText = totalJobs + " Jobs";
  } else {
    document.getElementById("tabCount").innerText = filtered.length + " of " + totalJobs + " Jobs";
  }

  if(filtered.length === 0){
    empty.classList.remove("hidden");
    updateCounts();
    return;
  }
empty.classList.add("hidden");

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = `
  bg-white border border-gray-200 rounded-lg p-5
  transition-all duration-300 ease-in-out
  hover:shadow-lg hover:-translate-y-1 hover:scale-[1]
  hover:border-blue-400 cursor-pointer
`;

    card.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h3 class="text-base font-bold text-gray-800">${job.company}</h3>
          <p class="text-sm text-gray-500 mt-1">${job.position}</p>
        </div>

        <button onclick="openModal(${job.id})"
          class="w-9 h-9 flex items-center justify-center rounded-full 
                 border border-gray-200 bg-gray-100 
                 hover:bg-red-100 hover:border-red-200 transition">

          <svg xmlns="http://www.w3.org/2000/svg" 
               class="h-4 w-4 text-gray-500 hover:text-red-500 transition"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6m5 4H7a2 2 0 01-2-2V7h14v12a2 2 0 01-2 2z" />
          </svg>

        </button>
      </div>

      <p class="text-xs font-bold text-gray-400 mt-2">${job.location}</p>

      <div class="mt-3">
        ${
          job.status === "not_applied" ? `<span class="bg-blue-100 text-xs px-3 py-1 rounded-md font-medium">NOT APPLIED</span>` :
          job.status === "interview" ? `<span class="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-md font-medium">INTERVIEW</span>` :
          `<span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-md font-medium">REJECTED</span>`
        }
      </div>

      <p class="text-xs text-gray-600 mt-3">${job.description}</p>

      <div class="flex gap-2 mt-4">
  <button onclick="updateStatus(${job.id}, 'interview')" 
    class="text-xs px-4 py-1.5 border border-green-500 text-green-600 
           rounded-md bg-white 
           transition-all duration-300 ease-in-out
           hover:bg-green-500 hover:text-white 
           hover:shadow-md hover:scale-105">
    Interview
  </button>

  <button onclick="updateStatus(${job.id}, 'rejected')" 
    class="text-xs px-4 py-1.5 border border-red-500 text-red-500 
           rounded-md bg-white 
           transition-all duration-300 ease-in-out
           hover:bg-red-500 hover:text-white 
           hover:shadow-md hover:scale-105">
    Rejected
  </button>
</div>
    `;

    container.appendChild(card);
  });

  updateCounts();
}

function openModal(id){
  deleteId = id;
  document.getElementById("deleteModal").classList.remove("hidden");
  document.getElementById("deleteModal").classList.add("flex");
}

function closeModal(){
  document.getElementById("deleteModal").classList.add("hidden");
  document.getElementById("deleteModal").classList.remove("flex");
  deleteId = null;
}

function confirmDelete(){
  jobs = jobs.filter(job => job.id !== deleteId);
  closeModal();
  renderJobs();
}

function updateStatus(id, status){
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function updateCounts(){
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "rejected").length;
}

function switchTab(tab, element){
  currentTab = tab;

  document.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.classList.remove("bg-blue-500","text-white");
    btn.classList.add("bg-gray-200","text-gray-600");
  });

  element.classList.remove("bg-gray-200","text-gray-600");
  element.classList.add("bg-blue-500","text-white");

  renderJobs();
}

renderJobs();
