"use strict";

const calendar_array = [];
const events = [
  {
    title: "Has Globalization Gone Too Far?",
    date: new Date("2019/11/22"),
    rating: 4,
  },
  {
    title:
      "The Bottom Billion: Why the Poorest Countries Are Failing and What Can Be Done About It",
    date: new Date("2020/05/12"),
    rating: 5,
  },
  { title: "The Sound and the Fury", date: new Date("2020/06/04"), rating: 3 },
  { title: "Slaughterhouse-Five", date: new Date("2020/05/19"), rating: 3 },
  {
    title: "Stranger in a Strange Land",
    date: new Date("2020/04/03"),
    rating: 2,
  },
  { title: "The Grapes of Wrath", date: new Date("2020/04/25"), rating: 3 },
  {
    title: "Ender's Game (Ender's Saga, #1)",
    date: new Date("2020/03/23"),
    rating: 4,
  },
  {
    title: "The Fellowship of the Ring (The Lord of the Rings, #1)",
    date: new Date("2020/03/14"),
    rating: 5,
  },
  { title: "The Martian", date: new Date("2020/03/06"), rating: 5 },
  {
    title: "The Three-Body Problem (Remembrance of Earth’s Past #1)",
    date: new Date("2020/11/04"),
    rating: 4,
  },
  {
    title: "Sister Sable (The Mad Queen #1)",
    date: new Date("2020/05/13"),
    rating: 2,
  },
  { title: "The Sirens of Titan", date: new Date("2020/06/20"), rating: 4 },
  {
    title:
      "Fake Science: Exposing the Left's Skewed Statistics, Fuzzy Facts, and Dodgy Data",
    date: new Date("2020/05/07"),
    rating: 2,
  },
  { title: "Redwall (Redwall, #1)", date: new Date("2020/12/06"), rating: 4 },
  {
    title: "The Theory of Everything: The Origin and Fate of the Universe",
    date: new Date("2020/11/10"),
    rating: 3,
  },
  {
    title:
      "The Logic of Collective Action: Public Goods and the Theory of Groups",
    date: new Date("2020/04/30"),
    rating: 4,
  },
  {
    title: "A Farewell to Alms: A Brief Economic History of the World",
    date: new Date("2020/04/23"),
    rating: 4,
  },
  {
    title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
    date: new Date("2020/04/05"),
    rating: 3,
  },
  { title: "Free Trade Under Fire", date: new Date("2020/02/13"), rating: 2 },
  {
    title: "A Cooperative Species: Human Reciprocity and Its Evolution",
    date: new Date("2020/02/09"),
    rating: 2,
  },
  {
    title: "Guardians of Finance: Making Regulators Work for Us",
    date: new Date("2020/01/16"),
    rating: 5,
  },
  { title: "Cujo", date: new Date("2019/12/26"), rating: 3 },
  { title: "The Shining", date: new Date("2019/11/12"), rating: 5 },
  { title: "The Gunslinger", date: new Date("2020/06/13"), rating: 4 },
  {
    title: "Capital in the Twenty-First Century",
    date: new Date("2020/10/15"),
    rating: 4,
  },
  { title: "The Affluent Society", date: new Date("2020/10/05"), rating: 5 },
  {
    title: "The General Theory of Employment, Interest, and Money",
    date: new Date("2020/09/19"),
    rating: 3,
  },
  {
    title:
      "The Great Transformation: The Political and Economic Origins of Our Time",
    date: new Date("2020/09/09"),
    rating: 3,
  },
  { title: "Pale Fire", date: new Date("2021/02/21"), rating: 3 },
  { title: "A Promised Land", date: new Date("2021/02/10"), rating: 5 },
  {
    title: "This Changes Everything: Capitalism vs. The Climate",
    date: new Date("2021/03/24"),
    rating: 4,
  },
  {
    title: "Invent and Wander: The Collected Writings of Jeff Bezos",
    date: new Date("2021/03/11"),
    rating: 2,
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
      events: events, //TODO: add data
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
