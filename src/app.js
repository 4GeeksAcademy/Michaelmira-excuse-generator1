/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
  let subjectIndex = Math.floor(Math.random() * pronown.length);
  let actionIndex = Math.floor(Math.random() * pronown.length);
  let possessionIndex = Math.floor(Math.random() * pronown.length);
  let whereIndex = Math.floor(Math.random() * pronown.length);

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
