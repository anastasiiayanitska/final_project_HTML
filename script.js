const listEvent = document.querySelector(".list_event");
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: "",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    attendees: "",
  },
];

const category = document.querySelector("#category");
const type = document.querySelector("#type");
const distance = document.querySelector("#distance");
const date = document.querySelector("#date");

const categoryBtn = document.querySelector("#list_category");
const typeBtn = document.querySelector("#list_type");
const distanceBtn = document.querySelector("#list_distance");
const dateBtn = document.querySelector("#list_date");

const logoCategory = document.querySelector(".logo_up_category ");
const logoDate = document.querySelector(".logo_up_date ");
const logoType = document.querySelector(".logo_up_type ");
const logoDistance = document.querySelector(".logo_up_distance ");

const filters = {
  category: "",
  distance: "",
  type: "",
  date: "",
};

const listDistance = document.querySelector("#list_distance");
const listType = document.querySelector("#list_type");
const listDate = document.querySelector("#list_date");
const listCategory = document.querySelector("#list_category");
const btnReset = document.querySelector(".reset_filter");

btnReset.addEventListener("click", () => {
  listType.textContent = "Any type";
  listDate.textContent = "Any date";
  listCategory.textContent = "Any category";
  listDistance.textContent = "Any distance";
  filters = {
    category: "",
    distance: "",
    type: "",
    date: "",
  };

  renderEvents(updatedEventsStore);
});

categoryBtn.addEventListener("click", () => {
  category.classList.toggle("list_filter_show");
  logoCategory.classList.toggle("logo_down");
});
dateBtn.addEventListener("click", () => {
  date.classList.toggle("list_filter_show");
  logoDate.classList.toggle("logo_down");
});
typeBtn.addEventListener("click", () => {
  type.classList.toggle("list_filter_show");
  logoType.classList.toggle("logo_down");
});
distanceBtn.addEventListener("click", () => {
  distance.classList.toggle("list_filter_show");
  logoDistance.classList.toggle("logo_down");
});

function getClickedItemValue(list, callback) {
  list.addEventListener("click", function (event) {
    category.classList.add("list_filter_show");
    type.classList.add("list_filter_show");
    distance.classList.add("list_filter_show");
    date.classList.add("list_filter_show");
    logoCategory.classList.remove("logo_down");
    logoDate.classList.remove("logo_down");
    logoType.classList.remove("logo_down");
    logoDistance.classList.remove("logo_down");

    if (event.target.tagName === "LI") {
      let clickedValue = event.target.textContent;
      if (clickedValue === "all") {
        clickedValue = "";
      }
      callback(clickedValue);
    }
  });
}

function filterEvents(events, filters) {
  return events.filter((event) => {
    if (filters.category && event.category !== filters.category) {
      return false;
    }

    if (filters.distance && event.distance > parseInt(filters.distance)) {
      console.log(event.distance, parseInt(filters.distance), events, filters);

      return false;
    }

    if (filters.type && event.type !== filters.type) {
      return false;
    }
    if (filters.date) {
      const eventDate = new Date(event.date);
      const filterDate = new Date(filters.date);

      if (
        eventDate.getFullYear() !== filterDate.getFullYear() ||
        eventDate.getMonth() !== filterDate.getMonth() ||
        eventDate.getDate() !== filterDate.getDate()
      ) {
        return false;
      }
    }

    return true;
  });
}

function renderEvents(arr) {
  listEvent.innerHTML = "";

  arr.forEach((element) => {
    if(element.attendees===""){element.attendees="0"}
    listEvent.insertAdjacentHTML(
      "beforeend",
      `
          <div class="new_event">
            <div class="event_right">
              <img src="${element.image}" alt="">
            </div>
            <div class="event_left">
              <p>${element.date}</p>
              <h2>${element.title}</h2>
              <h5>${element.category}, ${element.type} (+${element.distance}km)</h5>
              <h4>Registered: ${element.attendees}</h4>
            </div>
          </div>
        `
    );
  });
}

getClickedItemValue(type, function (value) {
  filters.type = value;
  const filteredEvents = filterEvents(updatedEventsStore, filters);
  renderEvents(filteredEvents);
  listType.textContent = filters.type;
  if (filters.type == "") {
    listType.textContent = "Any type";
  }
});
getClickedItemValue(date, function (value) {
  filters.date = value;
  const filteredEvents = filterEvents(updatedEventsStore, filters);
  renderEvents(filteredEvents);
  listDate.textContent = filters.date;
  if (filters.date == "") {
    listDate.textContent = "Any date";
  }
});

getClickedItemValue(category, function (value) {
  filters.category = value;
  const filteredEvents = filterEvents(updatedEventsStore, filters);
  renderEvents(filteredEvents);
  listCategory.textContent = filters.category;
  if (filters.category == "") {
    listCategory.textContent = "Any category";
  }
});

getClickedItemValue(distance, function (value) {
  filters.distance = value;
  const filteredEvents = filterEvents(updatedEventsStore, filters);
  renderEvents(filteredEvents);
  listDistance.textContent = filters.distance;
  if (filters.distance == "") {
    listDistance.textContent = "Any distance";
  }
});

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${month} ${day}, ${formattedHours}:${formattedMinutes} ${ampm}`;
}

function updateEventsWithFormattedDates(events) {
  return events.map((event) => {
    const date = formatDate(event.date);
    return {
      ...event,
      date,
    };
  });
}

const updatedEventsStore = updateEventsWithFormattedDates(eventsStore);
renderEvents(updatedEventsStore);
