"use strict";
(() => {
  const elements = {};
  const combinations = {
    care: {
      invisible: ["fit-guide-info", "materials-info", "made-of-desktop"],
      visible: ["care-info"],
    },
    fit: {
      invisible: ["care-info", "materials-info", "made-of-desktop"],
      visible: ["fit-guide-info"],
    },
    material: {
      invisible: ["fit-guide-info", "care-info", "made-of-desktop"],
      visible: ["materials-info", "made-of-desktop"],
    },
  };

  const selectTab = (id) => {
    for (const [key, value] of Object.entries(elements)) {
      if (key === id) value.classList.add("selected");
      else if (key.includes("tab")) value.className = "";
    }
  };
  const handleVisibility = (combinations) => {
    combinations.invisible.forEach((node) =>
      elements[node].classList.add("invisible")
    );
    combinations.visible.forEach((node) =>
      node.includes("desktop")
        ? (elements[node].className = "made-of")
        : (elements[node].className = "information")
    );
  };

  const handleTabClick = (e) => {
    if (!e.target.parentNode.className.includes("selected")) {
      selectTab(e.target.parentNode.id);
      if (e.target.parentNode.id.includes("fit-guide")) {
        return handleVisibility(combinations.fit);
      } else if (e.target.parentNode.id.includes("care")) {
        return handleVisibility(combinations.care);
      } else if (e.target.parentNode.id.includes("materials")) {
        return handleVisibility(combinations.material);
      }
    } else return;
  };

  [
    "fit-guide-tab",
    "care-tab",
    "materials-tab",
    "made-of-desktop",
    "materials-info",
    "care-info",
    "fit-guide-info",
  ].forEach((node) => {
    elements[node] = document.getElementById(node);
    if (node.includes("tab")) return (elements[node].onclick = handleTabClick);
  });
})();
