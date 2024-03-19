// ==UserScript==
// @name         ✅ RoVerify |  Roblox  Verification Badge
// @namespace    https://github.com/Korsinemi
// @version      2.5
// @description  A simple script that adds the Roblox verification badge to your name.
// @icon         https://en.help.roblox.com/hc/article_attachments/7997146649876/Roblox_Verified_Badge.png
// @supportURL   https://gist.github.com/Korsinemi/fbd0aba2579c62553f14db72a0a1b228
// @author       Korsinemi
// @match        https://www.roblox.com/*
// @match        https://create.roblox.com/*
// @grant        GM_setValue
// @license      MIT
 
// @name:zh-CN   ✅ RoVerify | Roblox 验证徽章
// @description:zh-CN  一个简单的脚本，将 Roblox 验证徽章添加到您的名称中。
// @name:es      ✅ RoVerify | Insignia de Verificación de Roblox
// @description:es Un simple script que agrega la insignia de verificación de Roblox a tu nombre.
// @name:hi      ✅ RoVerify | रोब्लॉक्स सत्यापन बैज
// @description:hi आपके नाम में रोब्लॉक्स सत्यापन बैज जोड़ने के लिए एक सरल स्क्रिप्ट।
// @name:ar      ✅ RoVerify | شارة التحقق من روبلوكس
// @description:ar سكريبت بسيط يضيف شارة التحقق من روبلوكس إلى اسمك.
// @name:pt      ✅ RoVerify | Insignia de Verificação do Roblox
// @description:pt Um simples script que adiciona a insígnia de verificação do Roblox ao seu nome.
// @name:ru      ✅ RoVerify | Значок верификации Roblox
// @description:ru Простой скрипт, который добавляет значок верификации Roblox к вашему имени.
// @name:ja      ✅ RoVerify | Roblox 認証バッジ
// @description:ja Robloxの名前に Roblox 認証バッジを追加するシンプルなスクリプト。
// @name:de      ✅ RoVerify | Roblox-Verifizierungsabzeichen
// @description:de Ein einfaches Skript, das das Roblox-Verifizierungsabzeichen zu Ihrem Namen hinzufügt.
// @name:fr      ✅ RoVerify | Badge de Vérification Roblox
// @description:fr Un simple script qui ajoute le badge de vérification Roblox à votre nom.
// ==/UserScript==
 
class Checkmark {
    constructor(profileSelectors) {
        this.profileSelectors = profileSelectors;
        this.badgeConfig = {
            spaceCharacter: ' ',
            src: this.svgBadge,
            title: 'Verified',
            alt: 'Verified Badge',
            style: {
                width: '28px',
                height: '28px',
                marginBottom: '2px'
            }
        };
    }
 
    svgBadge = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cg clip-path='url(%23clip0_8_46)'%3E%3Crect x='5.88818' width='22.89' height='22.89' transform='rotate(15 5.88818 0)' fill='%230066FF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.543 8.7508L20.549 8.7568C21.15 9.3578 21.15 10.3318 20.549 10.9328L11.817 19.6648L7.45 15.2968C6.85 14.6958 6.85 13.7218 7.45 13.1218L7.457 13.1148C8.058 12.5138 9.031 12.5138 9.633 13.1148L11.817 15.2998L18.367 8.7508C18.968 8.1498 19.942 8.1498 20.543 8.7508Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_46'%3E%3Crect width='28' height='28' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`
 
    createSpaceElement() {
        let spaceElement = document.createElement('span');
        spaceElement.textContent = this.badgeConfig.spaceCharacter;
        return spaceElement;
    }
 
    createVerifiedBadge(profileElement) {
        let fontSize = parseFloat(window.getComputedStyle(profileElement).fontSize);
        let iconSize = fontSize * 0.9;
        let verifiedBadge = document.createElement('img');
        verifiedBadge.className = 'profile-verified-badge-icon';
        verifiedBadge.src = this.badgeConfig.src;
        verifiedBadge.title = this.badgeConfig.title;
        verifiedBadge.alt = this.badgeConfig.alt;
        verifiedBadge.style.width = iconSize + 'px';
        verifiedBadge.style.height = iconSize + 'px';
        return verifiedBadge;
    }
 
    appendBadgeToProfile(profileElement) {
        profileElement.style.marginBottom = this.badgeConfig.style.marginBottom;
        profileElement.appendChild(this.createSpaceElement());
        profileElement.appendChild(this.createVerifiedBadge(profileElement));
    }
 
    findAndModifyProfiles() {
        let profileNameElements = document.querySelectorAll(this.profileSelectors.join(', '));
        profileNameElements.forEach(profileElement => this.appendBadgeToProfile(profileElement));
    }
}
 
class ProfileBadgeManager {
    constructor() {
        this.checkmark = new Checkmark([
            '.profile-name',
            '.age-bracket-label-username',
            '.user-name-container',
            '.user.PrimaryName',
            '.MuiGrid-root .MuiGrid-item .css-1g4gkv0-Grid-root-userName' // Roblox Studio item
        ]);
    }
 
    init() {
        setTimeout(() => this.checkmark.findAndModifyProfiles(), 2300);
    }
}
 
(function() {
    'use strict';
    let profileBadgeManager = new ProfileBadgeManager();
    profileBadgeManager.init();
})();
 
// Created with love by Korsinemi 🦊💜
