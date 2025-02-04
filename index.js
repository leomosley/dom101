/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

// Test 1
function replaceText(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.textContent = str;
  }
}

// Test 2
function addTextTo(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.textContent += str;
  }
}

// Test 3
function moreBears() {
  const bears = document.querySelector("#animals");

  if (bears && bears instanceof HTMLImageElement) {
    bears.src = "http://placebear.com/400/200";
    bears.alt = "A bear.";
    bears.title = "A BEAR!";
  }
}

// Test 4
function setId(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.id = str;
    return elem;
  }
}

// Test 5
function setClass(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.className = str;
    return elem;
  }
}

// Test 6
function addAClass(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.classList.add(str);
    return elem;
  }
}

// Test 7
function removeAClass(elem, str) {
  if (elem instanceof HTMLElement && typeof str === "string") {
    elem.classList.remove(str);
    return elem;
  }
}

// Test 8
function newElement(name) {
  if (typeof name === "string") {
    const elem = document.createElement(name);
    return elem;
  }
}

// Test 9
function findElementById(id) {
  if (typeof id === "string") {
    const elem = document.querySelector("#" + id);
    return elem;
  }
}

// Test 10
function findElementsByQuery(query) {
  const elem = document.querySelectorAll(query);
  return elem;
}

// Test 11
function reverseList(query) {
  const list = document.querySelector(query);

  if (list instanceof HTMLUListElement || list instanceof HTMLOListElement) {
    const children = list.children;

    for (const li of children) {
      const lastChild = children[children.length - 1];
      li.insertAdjacentElement("beforebegin", lastChild);
    }

    return list;
  }
}

// Test 12
function mover(moveThis, appendToThis) {
  const element = document.querySelector(moveThis);
  const destination = document.querySelector(appendToThis);

  if (element instanceof HTMLElement && destination instanceof HTMLElement) {
    element.remove();
    destination.appendChild(element);
  }
}

// Test 13
function filler(list, candidates) {
  if (list instanceof HTMLElement && candidates instanceof Array) {
    for (const candidate of candidates) {
      const li = document.createElement("li");
      li.textContent = candidate;
      list.append(li);
    }
  }
}

// Test 14
function dupe(selector) {
  const element = document.querySelector(selector);

  if (element && element instanceof HTMLElement) {
    const parent = element.parentElement;
    const clone = element.cloneNode(true);

    if (parent) {
      parent.append(clone);
    }
  }
}

// Test 15
function removeAll(selector) {
  const element = document.querySelectorAll(selector);

  if (element) {
    for (const elem of element) {
      elem.remove();
    }
  }
}

// Test 16
function getUserData() {
  const nameInput = document.querySelector("#username");
  const speedInput = document.querySelector("#speed");
  const studentInput = document.querySelector("#student");

  const result = {};

  if (nameInput && nameInput instanceof HTMLInputElement) {
    result.name = nameInput.value;
  }

  if (speedInput && speedInput instanceof HTMLInputElement) {
    result.speed = speedInput.valueAsNumber;
  }

  if (studentInput && studentInput instanceof HTMLInputElement) {
    result.student = studentInput.checked;
  }

  return result;
}