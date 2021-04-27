"use strict";

const calendar_array = [];
const events = [
  { title: "Lord of the Flies", date: new Date("2016/11/15"), rating: 5 },
  { title: "The Great Gatsby", date: new Date("2017/01/11"), rating: 4 },
  { title: "The Kite Runner", date: new Date("2017/03/18"), rating: 4 },
  { title: "Kafka on the Shore", date: new Date("2018/04/17"), rating: 5 },
  { title: "Romeo and Juliet", date: new Date("2018/07/02"), rating: 4 },
  {
    title: "The Final Empire (Mistborn, #1)",
    date: new Date("2019/01/09"),
    rating: 5,
  },
  {
    title: "The Well of Ascension (Mistborn, #2)",
    date: new Date("2019/01/19"),
    rating: 4,
  },
  {
    title: "The Hero of Ages (Mistborn, #3)",
    date: new Date("2019/01/29"),
    rating: 4,
  },
  {
    title: "American Gods (American Gods, #1)",
    date: new Date("2019/03/03"),
    rating: 5,
  },
  {
    title:
      "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
    date: new Date("2019/03/15"),
    rating: 4,
  },
  {
    title: "The Traitor Baru Cormorant (The Masquerade, #1)",
    date: new Date("2019/03/27"),
    rating: 5,
  },
  {
    title: "The Girl with the Dragon Tattoo (Millennium, #1)",
    date: new Date("2019/05/22"),
    rating: 3,
  },
  {
    title: "The Tipping Point: How Little Things Can Make a Big Difference",
    date: new Date("2019/05/24"),
    rating: 3,
  },
  {
    title: "Alice's Adventures in Wonderland / Through the Looking-Glass",
    date: new Date("2019/05/29"),
    rating: 3,
  },
  { title: "The Lord of the Rings", date: new Date("2019/06/17"), rating: 4 },
  {
    title: "The Autobiography of Gucci Mane",
    date: new Date("2019/06/05"),
    rating: 3,
  },
  {
    title: "Into the Labyrinth (Mage Errant #1)",
    date: new Date("2019/11/10"),
    rating: 5,
  },
  {
    title: "Jewel of the Endless Erg (Mage Errant #2)",
    date: new Date("2019/11/15"),
    rating: 3,
  },
  {
    title: "A Traitor in Skyhold (Mage Errant #3)",
    date: new Date("2019/11/22"),
    rating: 4,
  },
  {
    title: "Ender's Game (Ender's Saga, #1)",
    date: new Date("2019/12/02"),
    rating: 4,
  },
  {
    title: "The Demon King (Seven Realms, #1)",
    date: new Date("2020/01/05"),
    rating: 4,
  },
  { title: "The Gunslinger", date: new Date("2020/01/18"), rating: 3 },
  {
    title: "The Name of the Wind (The Kingkiller Chronicle, #1)",
    date: new Date("2020/04/12"),
    rating: 5,
  },
  {
    title: "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
    date: new Date("2020/04/30"),
    rating: 5,
  },
  {
    title:
      "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)",
    date: new Date("2020/05/07"),
    rating: 5,
  },
  {
    title: "Free the Darkness (King's Dark Tidings #1)",
    date: new Date("2020/07/17"),
    rating: 4,
  },
  {
    title: "The Darkness That Comes Before (The Prince of Nothing, #1)",
    date: new Date("2020/08/13"),
    rating: 3,
  },
  {
    title: "The Warrior Prophet (The Prince of Nothing, #2)",
    date: new Date("2020/08/25"),
    rating: 2,
  },
  {
    title:
      "American Kingpin: The Epic Hunt for the Criminal Mastermind Behind the Silk Road",
    date: new Date("2020/09/06"),
    rating: 4,
  },
  { title: "1984", date: new Date("2020/10/15"), rating: 3 },
  { title: "A Promised Land", date: new Date("2020/11/23"), rating: 4 },
  {
    title: "The Black Prism (Lightbringer, #1)",
    date: new Date("2020/12/02"),
    rating: 5,
  },
  {
    title: "The Blinding Knife (Lightbringer, #2)",
    date: new Date("2020/12/05"),
    rating: 5,
  },
  {
    title: "The Broken Eye (Lightbringer, #3)",
    date: new Date("2020/12/16"),
    rating: 4,
  },
  {
    title: "The Blood Mirror (Lightbringer, #4)",
    date: new Date("2020/12/18"),
    rating: 4,
  },
  {
    title: "The Burning White (Lightbringer, #5)",
    date: new Date("2020/12/29"),
    rating: 5,
  },
  {
    title: "The Black Company (The Chronicles of the Black Company, #1)",
    date: new Date("2021/02/03"),
    rating: 4,
  },
  {
    title: "Shadows Linger (The Chronicles of the Black Company, #2)",
    date: new Date("2021/02/14"),
    rating: 4,
  },
  {
    title: "The White Rose (The Chronicles of the Black Company, #3)",
    date: new Date("2021/02/20"),
    rating: 4,
  },
  {
    title: "Shadow Games (The Chronicles of the Black Company, #4)",
    date: new Date("2021/02/23"),
    rating: 3,
  },
  {
    title: "Red Sister (Book of the Ancestor, #1)",
    date: new Date("2021/03/02"),
    rating: 4,
  },
  {
    title: "Grey Sister (Book of the Ancestor, #2)",
    date: new Date("2021/03/04"),
    rating: 3,
  },
  {
    title: "Holy Sister (Book of the Ancestor, #3)",
    date: new Date("2021/03/07"),
    rating: 5,
  },
  {
    title: "Assassin's Apprentice (Farseer Trilogy, #1)",
    date: new Date("2020/02/14"),
    rating: 0,
  },
  { title: "Master of the Senate", date: new Date("2018/02/12"), rating: 3 },
  {
    title: "Throne of Glass (Throne of Glass, #1)",
    date: new Date("2017/09/13"),
    rating: 4,
  },
  { title: "To Kill a Mockingbird", date: new Date("2019/04/17"), rating: 3 },
  { title: "Washington: A Life", date: new Date("2019/04/25"), rating: 2 },
  {
    title: "City of Bones (The Mortal Instruments, #1)",
    date: new Date("2019/08/13"),
    rating: 4,
  },
  {
    title: "Promise of Blood (Powder Mage, #1)",
    date: new Date("2019/10/16"),
    rating: 3,
  },
  {
    title: "The Lies of Locke Lamora (Gentleman Bastard, #1)",
    date: new Date("2020/06/13"),
    rating: 5,
  },
  {
    title: "The Way of Shadows (Night Angel, #1)",
    date: new Date("2020/11/02"),
    rating: 4,
  },
  {
    title: "Shadow's Edge (Night Angel, #2)",
    date: new Date("2020/11/09"),
    rating: 4,
  },
  {
    title: "Beyond the Shadows (Night Angel, #3)",
    date: new Date("2020/11/17"),
    rating: 5,
  },
  {
    title: "Words of Radiance (The Stormlight Archive, #2)",
    date: new Date("2021/01/31"),
    rating: 4,
  },
  {
    title: "Prince of Thorns (The Broken Empire, #1)",
    date: new Date("2020/08/07"),
    rating: 3,
  },
  {
    title: "The Blade Itself (The First Law, #1)",
    date: new Date("2021/03/28"),
    rating: 5,
  },
  {
    title: "The Way of Kings (The Stormlight Archive, #1)",
    date: new Date("2021/01/27"),
    rating: 5,
  },
  {
    title: "The Emperor's Blades (Chronicle of the Unhewn Throne, #1)",
    date: new Date("2018/11/22"),
    rating: 4,
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
