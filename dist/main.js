/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const fetchData = async () => {\n  const res = await fetch(\"https://jsonplaceholder.typicode.com/todos\")\n    .then((response) => response.json())\n    .then((res) => res)\n    .catch((error) => error);\n};\n\nconst fetchDataGithub = async () => {\n  // Panggil API untuk mendapatkan data\n  const username = document.getElementById(\"username\").value;\n  if (!username) {\n    return;\n  }\n  const headers = {\n    headers: {\n      Accept: \"application/json\",\n      Authorization: \"token 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\",\n    },\n  };\n  await axios\n    .get(`https://api.github.com/users/${username}`, headers)\n    .then((res) => {\n      const imageElement = document.createElement(\"img\");\n      imageElement.setAttribute(\"src\", res.data.avatar_url);\n      imageElement.setAttribute(\"alt\", \"gambar user\");\n      imageElement.setAttribute(\"class\", \"w-10 h-10 rounded-full\");\n      document.getElementById(\"image\").appendChild(imageElement);\n    })\n    .catch((error) => console.log({ error }));\n};\n\ndocument.getElementById(\"submit\").addEventListener(\"click\", fetchDataGithub);\n\n\n//# sourceURL=webpack://hari10/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;