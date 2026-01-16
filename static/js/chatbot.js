// Chatbot Element References
const chatFab = document.getElementById('chatbot-fab');
const chatWindow = document.getElementById('chatbot-window');
const chatCloseBtn = document.querySelector('.chat-close-btn');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const chatMessages = document.getElementById('chat-messages');

// Toggle Chat Window
function toggleChat() {
    chatWindow.classList.toggle('visible');
    if (chatWindow.classList.contains('visible')) {
        chatInput.focus();
    }
}

if (chatFab) chatFab.addEventListener('click', toggleChat);
if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);

// Handle User Input
function handleUserMessage() {
    const text = chatInput.value.trim();
    if (text === "") return;

    // Add User Message
    addMessage(text, 'user');
    chatInput.value = "";

    // Determine Language State
    const isEnglish = (typeof currentLang !== 'undefined' && currentLang === 'en');

    // Typing indication
    const typingText = isEnglish ? "Typing..." : "Escribiendo...";
    const loadingId = addMessage(`<div class="typing-indicator" style="font-style: italic; color: #888;">${typingText}</div>`, 'bot');

    // Process response asynchronously
    generateResponse(text, isEnglish).then(response => {
        // Remove typing indicator
        const loadingMsg = document.getElementById(loadingId);
        if (loadingMsg) loadingMsg.remove();

        addMessage(response, 'bot');
    });
}

if (chatSendBtn) chatSendBtn.addEventListener('click', handleUserMessage);
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });
}

// Add Message to UI
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    // Generate unique ID for removal (useful for loading state)
    div.id = 'msg-' + Date.now() + Math.random().toString(36).substr(2, 9);
    div.innerHTML = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div.id;
}

// Logic: Generate Response (ASYNC)
async function generateResponse(input, isEnglish) {
    // 1. NORMALIZE INPUT: Lowercase + Remove Accents
    const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Localization Dictionaries
    const ui = {
        categoryPrefix: isEnglish ? "📂 **Category: " : "📂 **Categoría: ",
        toolsInCat: isEnglish ? "🛠️ **Tools in this category:**" : "🛠️ **Herramientas en esta categoría:**",
        typeToolHint: isEnglish ? "💡 <i>Type a tool name to see more details.</i>" : "💡 <i>Escribe el nombre de una herramienta para ver más detalles.</i>",
        installPrefix: isEnglish ? "📦 **How to install " : "📦 **Cómo instalar ",
        noInstallGuide: isEnglish ? "I don't have a specific guide for this tool, but you can usually find it on its official site." : "No tengo una guía específica para esta herramienta, pero generalmente puedes encontrarla en su sitio oficial.",
        downloadBtn: isEnglish ? "🌐 Download" : "🌐 Descargar",
        linksPrefix: isEnglish ? "🔗 **Links:** " : "🔗 **Enlaces:** ",
        foundPrefix: isEnglish ? "I found this about **" : "He encontrado esto sobre **",
        noDesc: isEnglish ? "No description available." : "Sin descripción disponible.",
        webBtn: isEnglish ? "🌐 Web" : "🌐 Web",
        githubBtn: isEnglish ? "💻 GitHub" : "💻 GitHub",
        tutorialBtn: isEnglish ? "📚 Tutorial" : "📚 Tutorial",
        wikiPrefix: isEnglish ? "🌐 **According to Wikipedia:**" : "🌐 **Según Wikipedia:**",
        wikiReadMore: isEnglish ? "Read more on Wikipedia" : "Leer más en Wikipedia",
        notFound: isEnglish ? `I didn't find specific information in my database about "${input}". 🤔` : `No encontré información específica en mi base de datos sobre "${input}". 🤔`,
        searchGoogle: isEnglish ? "Search on Google" : "Buscar en Google"
    };

    const cleanInput = normalize(input).replace(/[?¿!,.]/g, '');
    const inputTokens = cleanInput.split(/\s+/);

    // STOPWORDS: Words to ignore in token matching
    const stopWordsEs = ["herramienta", "herramientas", "programa", "software", "mejor", "recomiendas", "recomendar", "dime", "lista", "que", "como", "para", "usar", "cual", "cuales", "del", "las", "los", "una", "uno"];
    const stopWordsEn = ["tool", "tools", "program", "software", "best", "recommend", "tell", "list", "what", "how", "to", "use", "which", "the", "a", "an", "for", "is", "are"];
    const stopWords = isEnglish ? stopWordsEn : stopWordsEs;

    // INSTALL INTENT
    const installKeywordsEs = ["instal", "descargar", "bajar", "setup"];
    const installKeywordsEn = ["install", "download", "setup", "get"];
    const installKeywords = isEnglish ? installKeywordsEn : installKeywordsEs;

    const isInstallQuestion = installKeywords.some(k => cleanInput.includes(k));

    let bestMatch = null;
    let maxScore = 0;

    // 1. Search in Knowledge Base (Local)
    if (!isInstallQuestion) {
        for (const entry of knowledgeBase) {
            let score = 0;
            // Check strict phrase matches (on normalized keywords)
            if (entry.keywords.some(k => cleanInput.includes(normalize(k)))) {
                score += 15;
            }

            // Check token matches
            const keywordTokens = entry.keywords.join(" ").toLowerCase().split(/\s+/);
            inputTokens.forEach(token => {
                if (stopWords.includes(token) || token.length < 3) return;

                // Compare normalized tokens
                if (keywordTokens.map(normalize).includes(token)) {
                    score += 5;
                }
            });

            if (score > maxScore) {
                maxScore = score;
                bestMatch = entry;
            }
        }
    }

    if (bestMatch && maxScore >= 10) {
        return isEnglish && bestMatch.answerEn ? bestMatch.answerEn : bestMatch.answer;
    }

    // 2. Search in Tree Data (Local) - TOKEN BASED DEEP SEARCH
    const allNodes = getAllNodes(treeData);
    let bestNodeMatch = null;
    let maxNodeScore = 0;

    for (const node of allNodes) {
        let score = 0;
        // Use English fields if available and in English mode
        const rawName = (isEnglish && node.nameEn) ? node.nameEn : node.name;
        const rawDesc = (isEnglish && node.descriptionEn) ? node.descriptionEn : (node.description || "");

        const nodeName = normalize(rawName);
        const nodeDesc = normalize(rawDesc);

        // EXACT & PHRASE MATCHES
        if (cleanInput === nodeName) score += 100;
        else if (cleanInput.includes(nodeName) && nodeName.length > 3) score += 30;
        else if (nodeName.includes(cleanInput) && cleanInput.length > 3) score += 20;

        // TOKEN MATCHES
        inputTokens.forEach(token => {
            if (stopWords.includes(token) || token.length < 3) return;

            // Match in Name
            if (nodeName.includes(token)) score += 10;

            // Match in Description
            if (nodeDesc.includes(token)) score += 5;
        });

        if (score > maxNodeScore) {
            maxNodeScore = score;
            bestNodeMatch = node;
        }
    }

    // Found a valid node in the tree
    if (bestNodeMatch && maxNodeScore >= 5) {
        const foundNode = bestNodeMatch;
        const displayName = (isEnglish && foundNode.nameEn) ? foundNode.nameEn : foundNode.name;
        const displayDesc = (isEnglish && foundNode.descriptionEn) ? foundNode.descriptionEn : (foundNode.description || ui.noDesc);
        // Fallback to Spanish content if English is missing for these specific large content blocks
        const tutorialContent = (isEnglish && foundNode.tutorial_contentEn) ? foundNode.tutorial_contentEn : foundNode.tutorial_content;
        const installContent = (isEnglish && foundNode.install_contentEn) ? foundNode.install_contentEn : foundNode.install_content;

        // CHECK IF IT'S A CATEGORY (Has Children)
        if (foundNode.children && foundNode.children.length > 0) {
            let response = `${ui.categoryPrefix}${displayName}**<br><br>${displayDesc}<br><br>`;
            response += `${ui.toolsInCat}<br>`;

            // List children names
            const childrenNames = foundNode.children.map(c => {
                const childName = (isEnglish && c.nameEn) ? c.nameEn : c.name;
                return `• <b>${childName}</b>`;
            }).join('<br>');

            response += childrenNames;
            response += `<br><br>${ui.typeToolHint}`;
            return response;
        }

        // TOOL RESPONSE (Standard)
        if (isInstallQuestion) {
            let installResponse = `${ui.installPrefix}${displayName}**<br><br>`;
            if (installContent) {
                installResponse += installContent;
            } else {
                installResponse += ui.noInstallGuide;
            }
            let links = [];
            if (foundNode.url) links.push(`<a href="${foundNode.url}" target="_blank" style="color: #00ff9d;">${ui.downloadBtn}</a>`);
            if (links.length > 0) installResponse += `<br><br>${ui.linksPrefix}${links.join(" | ")}`;
            return installResponse;
        }

        let response = `${ui.foundPrefix}${displayName}**:<br><br>${displayDesc}`;
        if (tutorialContent) {
            response += `<hr style="margin: 10px 0; border: 0; border-top: 1px solid #444;">${tutorialContent}`;
        }
        let links = [];
        if (foundNode.url) links.push(`<a href="${foundNode.url}" target="_blank" style="color: #00ff9d;">${ui.webBtn}</a>`);
        if (foundNode.github) links.push(`<a href="${foundNode.github}" target="_blank" style="color: #00ff9d;">${ui.githubBtn}</a>`);
        if (foundNode.tutorialUrl) links.push(`<a href="${foundNode.tutorialUrl}" target="_blank" style="color: #00ff9d;">${ui.tutorialBtn}</a>`);
        if (links.length > 0) response += `<br><br>${ui.linksPrefix}${links.join(" | ")}`;
        return response;
    }

    // 3. Fallback to Wikipedia API (External)
    try {
        const langCode = isEnglish ? 'en' : 'es';
        const wikiUrl = `https://${langCode}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanInput)}`;
        const response = await fetch(wikiUrl);

        if (response.ok) {
            const data = await response.json();
            if (data.type === 'standard' && data.extract) {
                return `${ui.wikiPrefix}<br><br>${data.extract}<br><br>🔗 <a href="${data.content_urls.desktop.page}" target="_blank" style="color: #00ff9d;">${ui.wikiReadMore}</a>`;
            }
        }
    } catch (error) {
        console.error("Wiki Error:", error);
    }

    // 4. Final Fallback: Google Search
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    return `${ui.notFound}<br><br>🔎 <a href="${googleUrl}" target="_blank" style="color: #00ff9d; text-decoration: underline;">${ui.searchGoogle} "<b>${input}</b>"</a>`;
}

// Helper to flatten the tree data structure
function getAllNodes(data, list = []) {
    list.push(data);
    if (data.children) {
        data.children.forEach(child => getAllNodes(child, list));
    }
    return list;
}
