/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pronown = ["A", "The"];
  let subject = [
    "some guy",
    "my neighbor ",
    "dog",
    "some asshole on the street",
    "wife",
    "girlfriend"
  ];
  let action = ["stole my", "kicked my", "ate my", "drove over my"];
  let possession = ["homework", "car", "girlfriend", "shoes"];
  let where = [
    "on the freeway",
    "at my place",
    "in the pool",
    "at my girfriends house",
    "on top of my car and i started driving"
  ];

  let pronownIndex = Math.floor(Math.random() * pronown.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronown[pronownIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
