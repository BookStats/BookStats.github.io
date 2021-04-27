"use strict";

const calendar_array = [];
const events = [
  {
    title: "Things That Make White People Uncomfortable",
    date: new Date("2021/02/19"),
    rating: 5,
  },
  { title: "A Farewell to Alms", date: new Date("2021/02/05"), rating: 3 },
  {
    title: "The Three-Body Problem (Remembrance of Earth’s Past #1)",
    date: new Date("2020/03/13"),
    rating: 5,
  },
  {
    title: "Inferno (Robert Langdon, #4)",
    date: new Date("2020/03/30"),
    rating: 3,
  },
  {
    title: "Fifty Shades of Grey (Fifty Shades, #1)",
    date: new Date("2020/02/14"),
    rating: 1,
  },
  {
    title: "The Lost Symbol (Robert Langdon, #3)",
    date: new Date("2020/02/28"),
    rating: 4,
  },
  {
    title: "Angels & Demons (Robert Langdon, #1)",
    date: new Date("2020/02/02"),
    rating: 4,
  },
  { title: "Twelfth Night", date: new Date("2020/01/13"), rating: 3 },
  { title: "Americana", date: new Date("2020/05/26"), rating: 2 },
  {
    title: "The Da Vinci Code (Robert Langdon, #2)",
    date: new Date("2020/05/02"),
    rating: 3,
  },
  {
    title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
    date: new Date("2020/05/14"),
    rating: 3,
  },
  {
    title: "Ender's Game (Ender's Saga, #1)",
    date: new Date("2020/05/07"),
    rating: 5,
  },
  { title: "Atonement", date: new Date("2020/06/26"), rating: 1 },
  { title: "Slaughter House-Five", date: new Date("2020/06/13"), rating: 5 },
  {
    title: "The Hobbit, or There and Back Again",
    date: new Date("2020/06/04"),
    rating: 4,
  },
  { title: "Never Let Me Go", date: new Date("2020/07/18"), rating: 4 },
  { title: "Twilight (Twilight, #1)", date: new Date("2020/01/06"), rating: 4 },
  {
    title: "Trump: The Art of the Deal",
    date: new Date("2021/01/17"),
    rating: 2,
  },
  { title: "The Sound and the Fury", date: new Date("2020/07/04"), rating: 4 },
  {
    title: "Stranger in a Strange Land",
    date: new Date("2020/08/17"),
    rating: 2,
  },
  { title: "The Sirens of Titan", date: new Date("2020/08/13"), rating: 3 },
  { title: "Deadline", date: new Date("2020/08/09"), rating: 2 },
  { title: "Redwall (Redwall, #1)", date: new Date("2020/10/15"), rating: 4 },
  {
    title:
      "The Bottom Billion: Why the Poorest Countries Are Failing and What Can Be Done About It",
    date: new Date("2020/09/30"),
    rating: 4,
  },
  { title: "Free Trade Under Fire", date: new Date("2020/09/19"), rating: 2 },
  {
    title:
      "The Logic of Collective Action: Public Goods and the Theory of Groups",
    date: new Date("2020/09/08"),
    rating: 3,
  },
  { title: "Titus Andronicus", date: new Date("2020/10/23"), rating: 4 },
  { title: "Wide Sargasso Sea", date: new Date("2020/11/14"), rating: 4 },
  {
    title: "The Illuminatus! Trilogy",
    date: new Date("2020/11/05"),
    rating: 4,
  },
  { title: "Salvage the Bones", date: new Date("2020/04/08"), rating: 4 },
  { title: "The Grapes of Wrath", date: new Date("2020/03/25"), rating: 2 },
  {
    title: "The Lightning Thief (Percy Jackson and the Olympians, #1)",
    date: new Date("2020/03/09"),
    rating: 5,
  },
  {
    title: "The Ruins of Gorlan (Ranger's Apprentice, #1)",
    date: new Date("2021/01/24"),
    rating: 4,
  },
  { title: "Cujo", date: new Date("2021/01/12"), rating: 5 },
  { title: "Treasure Island", date: new Date("2019/12/03"), rating: 3 },
  {
    title: "The Swiss Family Robinson",
    date: new Date("2019/12/16"),
    rating: 3,
  },
  {
    title: "Hatchet (Brian's Saga, #1)",
    date: new Date("2021/03/15"),
    rating: 4,
  },
  {
    title:
      "The Mysterious Benedict Society (The Mysterious Benedict Society, #1)",
    date: new Date("2021/03/03"),
    rating: 5,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // get array of div containing calendar
  let calendar_container_array = document.getElementsByClassName("calendar");

  // render initial calendars
  for (let i = 0; i < calendar_container_array.length; i++) {
    let container_container = calendar_container_array[i];
    let calendar = new FullCalendar.Calendar(container_container, {
      initialView: "listMonth",
      displayEventTime: false,
      initialDate: new Date(2021, i, 1),
      headerToolbar: {
        start: null,
        center: "title",
        end: null,
      },
      events: events,
      eventDidMount: function (arg) {
        if (arg.event.extendedProps.rating == 0)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#1170AA";
        else if (arg.event.extendedProps.rating == 1)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#FC7D0B";
        else if (arg.event.extendedProps.rating == 2)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#A3ACB9";
        else if (arg.event.extendedProps.rating == 3)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#57606C";
        else if (arg.event.extendedProps.rating == 4)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#5FA2CE";
        else if (arg.event.extendedProps.rating == 5)
          arg.el.getElementsByClassName(
            "fc-list-event-dot"
          )[0].style.borderColor = "#C85200";
      },
    });
    calendar.render();
    calendar_array.push(calendar);
  }

  //onclick listener for dorptown list
  document.getElementById("years").onchange = function () {
    for (let i = 0; i < calendar_array.length; i++) {
      let calendar = calendar_array[i];
      calendar.gotoDate(new Date(this.value, i, 1));
    }
  };
});
