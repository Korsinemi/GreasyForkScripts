// ==UserScript==
// @name         🐱 Oneko | The kitty who follows your cursor
// @namespace    https://github.com/Korsinemi
// @version      1.0-beta
// @description  A simple script for just put a kitty following your cursor.
// @icon         https://raw.githubusercontent.com/Korsinemi/GreasyForkScripts/main/images/oneko-logo.png
// @supportURL   https://github.com/Korsinemi/GreasyForkScripts/issues
// @author       Korsinemi
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @license      MIT
 
// @name:zh-CN   🐱 Oneko | 跟随你的光标的小猫
// @description:zh-CN  一个简单的脚本，只是把一个小猫放在你的光标后面。
// @name:es      🐱 Oneko | El gatito que sigue tu cursor
// @description:es Un simple script que pone un gatito siguiendo tu cursor.
// @name:hi      🐱 Oneko | आपके कर्सर का पीछा करने वाली बिल्ली
// @description:hi एक सरल स्क्रिप्ट जो बस आपके कर्सर का पीछा करने वाली एक बिल्ली को डालती है।
// @name:ar      🐱 Oneko | القطة التي تتبع المؤشر الخاص بك
// @description:ar سكريبت بسيط يضع قطة تتبع المؤشر الخاص بك.
// @name:pt      🐱 Oneko | O gatinho que segue o seu cursor
// @description:pt Um simples script que coloca um gatinho seguindo o seu cursor.
// @name:ru      🐱 Oneko | Котенок, который следует за вашим курсором
// @description:ru Простой скрипт, который просто ставит котенка, следующего за вашим курсором.
// @name:ja      🐱 Oneko | カーソルを追う子猫
// @description:ja カーソルを追う子猫を置くだけのシンプルなスクリプト。
// @name:de      🐱 Oneko | Das Kätzchen, das deinem Cursor folgt
// @description:de Ein einfaches Skript, das einfach eine Katze setzt, die deinem Cursor folgt.
// @name:fr      🐱 Oneko | Le chaton qui suit votre curseur
// @description:fr Un simple script qui met juste un chaton qui suit votre curseur.
// ==/UserScript==

fetch('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.js')
  .then(response => response.text())
  .then(text => eval(text))
  .catch(error => console.error('Error:', error));

// Oneko.js by Adryd325
// GreasyFork version by Korsinemi 💜
