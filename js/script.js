// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Radio-Button

"use strict"

function enterClicked() {
  // input
  const weekend = document.getElementById('weekend').checked
  const weekday = document.getElementById('weekday').checked
  const child = document.getElementById('child').checked
  const adult = document.getElementById('adult').checked

  // process
  if (weekend == true && (child == true || adult == true)) {
    // relax
    document.getElementById('answer').innerHTML = "Time to relax for the weekend!"
  } else if (weekday == true && child == true) {
    // go to school
    document.getElementById('answer').innerHTML = "Time for school!"
  } else if (weekday == true && adult == true) {
    // go to work
    document.getElementById('answer').innerHTML = "Time to go to work!"
  } else {
    // only select one queation
    document.getElementById('answer').innerHTML = "Please finish all question!"
  }
}