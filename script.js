const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications used by millions worldwide.",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations using D3.js and React.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design scalable backend systems using Python and AWS cloud services.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create modern user interfaces with strong frontend development expertise requird .",
    status: "all"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY • Full-time • $130,000 - $170,00",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote • Full-time • $120,000 - $160,000",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all"
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "TechCorp Industries",
    location: "Remote",
    type: "Full-time",
    salary: " $130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all"
  }
];

let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  const filteredJobs =
    currentTab === "all"
      ? jobs
      : jobs.filter(job => job.status === currentTab);

  if (filteredJobs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <img src="jobs.png" class="empty-img" alt="No Jobs">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filteredJobs.forEach(job => {
    container.innerHTML += `
      <div class="job-card">

        <button onclick="deleteJob(${job.id})" class="delete-btn">
          <i class="fa-solid fa-trash"></i>
        </button>

        <h3>${job.companyName}</h3>
        <p>${job.position}</p>
        <p class="status-badge ${
  job.status === "interview"
    ? "badge-interview"
    : job.status === "rejected"
    ? "badge-rejected"
    : ""
}">
  ${
    job.status === "interview"
      ? "INTERVIEW"
      : job.status === "rejected"
      ? "REJECTED"
      : "NOT APPLIED"
  }
</p>
        <p>${job.location} • ${job.type} • ${job.salary}</p>
        <p>${job.description}</p>

        <div class="btn-group">
          <button onclick="updateStatus(${job.id}, 'interview')" class="interview-btn">Interview</button>
          <button onclick="updateStatus(${job.id}, 'rejected')" class="reject-btn">Rejected</button>
        </div>

      </div>
    `;
  });
}

function updateStatus(id, newStatus) {
  const job = jobs.find(j => j.id === id);
  job.status = job.status === newStatus ? "all" : newStatus;
  updateCounts();
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  updateCounts();
  renderJobs();
}

function showTab(tab, element) {
  currentTab = tab;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  element.classList.add("active");
  renderJobs();
}

function updateCounts() {
  const interviewCount = jobs.filter(j => j.status === "interview").length;
  const rejectedCount = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectedCount;
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("available-count").innerText = jobs.length;
}

renderJobs();
updateCounts();