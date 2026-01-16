// Set up dimensions
const width = window.innerWidth;
const height = window.innerHeight;

let currentLang = 'es';
let currentLevel = 2; // Default to Pro, but will be overridden by Auth
let lastSelectedNode = null;

// Auth Status Check (from Django Context)
// USER_LEVEL and IS_AUTHENTICATED are defined in index.html
document.addEventListener("DOMContentLoaded", () => {

    // Access Control Logic
    if (typeof USER_LEVEL !== 'undefined') {
        currentLevel = USER_LEVEL;
    }

    /* lockPremiumFeatures removed - using updateLevel auth check instead */

    // Initial filter application based on level
    if (typeof root !== 'undefined') {
        updateLevel(currentLevel);
    }
});

const uiTranslations = {
    'es': {
        'title-main': 'El Árbol de la Ciberseguridad',
        'search-placeholder': 'Buscar herramienta (ej. Nmap)...',
        'legend-title': 'Estructura del Árbol',
        'leg-cat': 'Categoría Principal',
        'leg-sub': 'Sub-rama / Dominio',
        'leg-tool': 'Herramienta / Activo',
        'leg-active': 'Selección Actual',
        'resources-title': 'Recursos',
        'btn-official': 'Sitio Oficial',
        'btn-tutorial': 'Tutorial',
        'btn-github': 'GitHub',
        'btn-reddit': 'Reddit',
        'modal-title': 'Tutorial Rápido',
        'level-title': 'Nivel de Información',
        'btn-basic': 'Básico',
        'btn-normal': 'Normal',
        'btn-pro': 'Pro',
        'chat-greeting': '¡Hola! Soy tu asistente de ciberseguridad. ¿En qué puedo ayudarte?',
        'chat-placeholder': 'Escribe tu pregunta...',
        'all-branches': 'Actualizar todas las ramas',
        'btn-youtube': 'YouTube'
    },
    'en': {
        'title-main': 'The Cybersecurity Tree',
        'search-placeholder': 'Search tool (e.g. Nmap)...',
        'legend-title': 'Tree Structure',
        'leg-cat': 'Main Category',
        'leg-sub': 'Sub-branch / Domain',
        'leg-tool': 'Tool / Asset',
        'leg-active': 'Current Selection',
        'resources-title': 'Resources',
        'btn-official': 'Official Site',
        'btn-tutorial': 'Tutorial',
        'btn-github': 'GitHub',
        'btn-reddit': 'Reddit',
        'modal-title': 'Quick Tutorial',
        'level-title': 'Information Level',
        'btn-basic': 'Basic',
        'btn-normal': 'Normal',
        'btn-pro': 'Pro',
        'chat-greeting': 'Hello! I am your cybersecurity assistant. How can I help you?',
        'chat-placeholder': 'Type your question...',
        'all-branches': 'Update All Branches',
        'btn-youtube': 'YouTube'
    }
};

const levelNameMap = {
    'es': { 0: 'Básico', 1: 'Normal', 2: 'Pro' },
    'en': { 0: 'Basic', 1: 'Normal', 2: 'Pro' }
};

function updateLanguage(lang) {
    currentLang = lang;

    // Update static UI
    const elementsToTranslate = [
        'title-main', 'legend-title', 'leg-cat', 'leg-sub', 'leg-tool', 'leg-active',
        'resources-title', 'btn-official', 'btn-tutorial', 'btn-github', 'btn-reddit', 'btn-youtube', 'btn-youtube2', 'btn-youtube3', 'modal-title',
        'level-title', 'btn-basic', 'btn-normal', 'btn-pro', 'chat-greeting'
    ];

    elementsToTranslate.forEach(id => {
        const el = document.getElementById(id);
        if (el && uiTranslations[lang][id]) el.textContent = uiTranslations[lang][id];
    });

    // Update document title
    document.title = uiTranslations[lang]['title-main'];

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = uiTranslations[lang]['search-placeholder'];

    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = uiTranslations[lang]['chat-placeholder'];

    // Update node text
    svg.selectAll(".node text")
        .text(d => (currentLang === 'en' && d.data.nameEn) ? d.data.nameEn : d.data.name);

    // Refresh menu
    renderMenu();

    // Close search results if any
    if (searchInput) {
        searchInput.value = "";
    }

    // Refresh Popup if open
    if (lastSelectedNode) {
        showPopup(lastSelectedNode);
    }

    // Refresh Modal if open
    if (tutorialModal && tutorialModal.classList.contains('visible') && lastSelectedNode) {
        const tutorialTitle = (currentLang === 'en' && lastSelectedNode.data.nameEn) ? lastSelectedNode.data.nameEn : lastSelectedNode.data.name;
        const tutorialBody = (currentLang === 'en' && lastSelectedNode.data.tutorial_contentEn) ? lastSelectedNode.data.tutorial_contentEn : lastSelectedNode.data.tutorial_content;
        openTutorialModal(tutorialTitle, tutorialBody);
    }
}

// Language selector event listener
document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('language-select');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // Level selector listeners
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLevel(parseInt(btn.dataset.level));
        });
    });
});

const zoom = d3.zoom().on("zoom", (event) => {
    g.attr("transform", event.transform);
});

const svg = d3.select("#tree-container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom);

const g = svg.append("g");

const tree = d3.tree().nodeSize([40, 250]); // Adjust node spacing

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

const getNodeColor = (d) => {
    if (d.depth === 1) return "#d2a8ff"; // Category: Purple
    if (d.depth === 2) return "#58a6ff"; // Sub-branch: Blue
    if (!d.children && !d._children) return "#3fb950";   // Tool: Green
    return "#8b949e"; // Root or other: Grey
};

let root = d3.hierarchy(treeData);
root.x0 = height / 2;
root.y0 = 0;

// Initial render
update(root);

function handleNodeClick(event, d) {
    isAnimating = false; // Stop auto-traversal on click
    highlightPath(d);
    showPopup(d);
    if (event) event.stopPropagation();
}

function update(source) {
    const nodes = root.descendants();
    const links = root.links();

    // Compute the new tree layout.
    tree(root);

    // Nodes section
    const node = g.selectAll('g.node')
        .data(nodes, d => d.data.name + (d.depth));

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${source.y0 || 0},${source.x0 || height / 2})`)
        .on('click', handleNodeClick);

    nodeEnter.append('circle')
        .attr('r', 5)
        .attr('fill', d => getNodeColor(d));

    nodeEnter.append('text')
        .attr('dy', 3)
        .attr('x', d => d.children || d._children ? -10 : 10)
        .style('text-anchor', d => d.children || d._children ? 'end' : 'start')
        .text(d => (currentLang === 'en' && d.data.nameEn) ? d.data.nameEn : d.data.name);

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position
    nodeUpdate.transition()
        .duration(750)
        .attr('transform', d => `translate(${d.y},${d.x})`);

    // Update the node attributes and style
    nodeUpdate.select('circle')
        .attr('fill', d => getNodeColor(d));

    // Remove any exiting nodes
    const nodeExit = node.exit().transition()
        .duration(750)
        .attr('transform', d => `translate(${source.y},${source.x})`)
        .remove();

    nodeExit.select('circle').attr('r', 0);
    nodeExit.select('text').style('fill-opacity', 0);

    // Links section
    const link = g.selectAll('path.link')
        .data(links, d => d.target.data.name);

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', d => {
            const o = { x: source.x0 || height / 2, y: source.y0 || 0 };
            return d3.linkHorizontal().x(d => d.y).y(d => d.x)({ source: o, target: o });
        });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(750)
        .attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x));

    // Remove any exiting links
    link.exit().transition()
        .duration(750)
        .attr('d', d => {
            const o = { x: source.x, y: source.y };
            return d3.linkHorizontal().x(d => d.y).y(d => d.x)({ source: o, target: o });
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(d => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Popup elements
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const nodeName = document.getElementById("node-name");
const nodeDesc = document.getElementById("node-description");
const popupLinks = document.getElementById("popup-links");
const linkOfficial = document.getElementById("link-official");
const linkTutorial = document.getElementById("link-tutorial");
const linkGithub = document.getElementById("link-github");
const linkReddit = document.getElementById("link-reddit");
const linkYoutube = document.getElementById("link-youtube");
const linkYoutube2 = document.getElementById("link-youtube2");
const linkYoutube3 = document.getElementById("link-youtube3");

// Modal elements
const tutorialModal = document.getElementById("tutorial-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.querySelector("#tutorial-modal .close-modal");

// Function to highlight the path from a node to the root
function highlightPath(d) {
    console.log("Highlighting path for:", d.data.name);

    // Reset all nodes and links
    g.selectAll(".node")
        .classed("node--active", false);

    // Reset all links to default
    g.selectAll(".link")
        .classed("link--active", false);

    // Get all ancestors of the selected node
    const ancestors = d.ancestors();
    console.log("Ancestors:", ancestors.map(a => a.data.name));

    // Highlight selected node
    g.selectAll(".node")
        .classed("node--active", function (nodeData) {
            return nodeData === d;
        });

    // Highlight links connecting ancestors
    g.selectAll(".link")
        .classed("link--active", function (linkData) {
            const isInPath = ancestors.includes(linkData.source) && ancestors.includes(linkData.target);
            return isInPath;
        });
}


function showPopup(d) {
    if (!d || !popup || !popupImg || !nodeName || !nodeDesc) return;
    lastSelectedNode = d;

    // Update basic info
    popupImg.src = d.data.image || "/static/assets/images/aplicaciones/tool_placeholder.png";
    nodeName.textContent = (currentLang === 'en' && d.data.nameEn) ? d.data.nameEn : d.data.name;
    const fallbackDesc = (currentLang === 'en') ? "Exploring the depths of cybersecurity..." : "Explorando las profundidades de la ciberseguridad...";
    nodeDesc.textContent = (currentLang === 'en' && d.data.descriptionEn) ? d.data.descriptionEn : (d.data.description || fallbackDesc);

    // Update resources title
    const resTitle = document.getElementById("resources-title");
    if (resTitle) {
        const titleKey = 'resources-title';
        resTitle.textContent = uiTranslations[currentLang][titleKey];
    }

    // Update buttons text
    const labels = ['btn-official', 'btn-tutorial', 'btn-github', 'btn-reddit', 'btn-youtube'];
    labels.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = uiTranslations[currentLang][id];
    });
    // Ensure youtube2 button has a default if not set by setLink later
    const yt2Btn = document.getElementById('btn-youtube2');
    if (yt2Btn) yt2Btn.textContent = uiTranslations[currentLang]['btn-youtube'];

    // Handle links Helper
    function setLink(el, url, labelId, customLabel) {
        if (url) {
            el.href = url;
            el.style.display = "flex";

            // Set label
            const labelEl = el.querySelector('span[id^="btn-"]');
            if (labelEl) {
                if (customLabel) {
                    labelEl.textContent = customLabel;
                } else if (labelId) {
                    labelEl.textContent = uiTranslations[currentLang][labelId];
                }
            }

            if (el.id === "link-tutorial") {
                el.onclick = null;
                el.removeAttribute("onclick");
            }
            return true;
        } else {
            el.style.display = "none";
            return false;
        }
    }

    let hasLinks = false;
    hasLinks |= setLink(linkOfficial, d.data.url, 'btn-official');

    // Tutorial Logic: Content > External URL
    const tutorialTitle = (currentLang === 'en' && d.data.nameEn) ? d.data.nameEn : d.data.name;
    const tutorialBody = (currentLang === 'en' && d.data.tutorial_contentEn) ? d.data.tutorial_contentEn : d.data.tutorial_content;

    if (tutorialBody) {
        linkTutorial.href = "#";
        linkTutorial.style.display = "flex";
        const labelEl = linkTutorial.querySelector('#btn-tutorial');
        if (labelEl) labelEl.textContent = uiTranslations[currentLang]['btn-tutorial'];
        linkTutorial.onclick = (e) => {
            e.preventDefault();
            openTutorialModal(tutorialTitle, tutorialBody);
        };
        hasLinks = true;
    } else {
        hasLinks |= setLink(linkTutorial, d.data.tutorialUrl, 'btn-tutorial');
    }

    hasLinks |= setLink(linkGithub, d.data.github, 'btn-github');
    hasLinks |= setLink(linkReddit, d.data.reddit, 'btn-reddit');

    // YouTube links with custom labels support
    const yt1Label = (currentLang === 'en' && d.data.youtube_labelEn) ? d.data.youtube_labelEn : d.data.youtube_label;
    const yt2Label = (currentLang === 'en' && d.data.youtube2_labelEn) ? d.data.youtube2_labelEn : d.data.youtube2_label;
    const yt3Label = (currentLang === 'en' && d.data.youtube3_labelEn) ? d.data.youtube3_labelEn : d.data.youtube3_label;

    let yt1Def = uiTranslations[currentLang]['btn-youtube'];
    let yt2Def = uiTranslations[currentLang]['btn-youtube'];
    let yt3Def = uiTranslations[currentLang]['btn-youtube'];

    // If multiple exist but no labels, use 1, 2, 3
    const ytCount = (d.data.youtube ? 1 : 0) + (d.data.youtube2 ? 1 : 0) + (d.data.youtube3 ? 1 : 0);
    if (ytCount > 1 && !yt1Label && !yt2Label && !yt3Label) {
        yt1Def += " 1";
        yt2Def += " 2";
        yt3Def += " 3";
    }

    hasLinks |= setLink(linkYoutube, d.data.youtube, null, yt1Label || yt1Def);
    hasLinks |= setLink(linkYoutube2, d.data.youtube2, null, yt2Label || yt2Def);
    hasLinks |= setLink(linkYoutube3, d.data.youtube3, null, yt3Label || yt3Def);

    // Show/hide entire links column
    if (hasLinks) {
        popupLinks.classList.remove("hidden");
    } else {
        popupLinks.classList.add("hidden");
    }

    // Centering the view on the node
    centerNode(d);

    popup.classList.add("visible");
}

function centerNode(d) {
    if (!d) return;
    const targetScale = 1.6; // Closer zoom for video/focus
    const x = -d.y * targetScale + width / 2;
    const y = -d.x * targetScale + height * 0.35;

    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(targetScale));
}

function hidePopup() {
    if (popup) popup.classList.remove("visible");
    // Keep the green links visible - don't reset them
}

function openTutorialModal(title, content) {
    if (!tutorialModal) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    tutorialModal.classList.add("visible"); // Use class for animation
    tutorialModal.style.display = "flex"; // Ensure it's displayed
}

function closeTutorialModal() {
    if (!tutorialModal) return;
    tutorialModal.classList.remove("visible");
    setTimeout(() => {
        tutorialModal.style.display = "none";
    }, 300); // Wait for transition
}

// Event Listeners for Modal
if (closeModalBtn) {
    closeModalBtn.onclick = closeTutorialModal;
}

if (tutorialModal) {
    window.addEventListener("click", (event) => {
        if (event.target === tutorialModal) {
            closeTutorialModal();
        }
    });
}

let currentNodeIndex = 0;
let isAnimating = true;

function animate() {
    if (!isAnimating) return;

    const nodes = root.descendants();
    const d = nodes[currentNodeIndex];

    // Highlight node
    d3.selectAll("circle")
        .transition()
        .duration(500)
        .attr("fill", node => (node === d ? "#ff9100" : getNodeColor(node)))
        .attr("r", node => (node === d ? 10 : 6));

    highlightPath(d);
    showPopup(d);

    currentNodeIndex = (currentNodeIndex + 1) % nodes.length;

    // Wait 4 seconds for reading and interaction
    setTimeout(animate, 4000);
}

// Add click listener to nodes to stop animation and show popup permanently
function setupInteractions() {
    // Note: Node clicks are now handled globally in the update() function via handleNodeClick

    // Close popup when clicking background
    // Close popup and stop animation when clicking background
    d3.select("body").on("click", () => {
        isAnimating = false;
        hidePopup();

        // Reset node styles for a clear view
        d3.selectAll("circle")
            .transition()
            .duration(500)
            .attr("fill", d => getNodeColor(d))
            .attr("r", 6);
    });

    // Prevent closing when clicking inside popup
    if (popup) {
        popup.addEventListener("click", (e) => e.stopPropagation());
    }
}

// Start sequence
setupInteractions();
setupInteractivity();
animate();

function setupInteractivity() {
    const searchInput = document.getElementById("search-input");

    renderMenu();

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === "") {
            // Reset to show all branches
            applyFilter("all");
            return;
        }

        const nodes = root.descendants();
        const found = nodes.find(d =>
            d.data.name.toLowerCase().includes(query) ||
            (d.data.nameEn && d.data.nameEn.toLowerCase().includes(query))
        );

        if (found) {
            isAnimating = false;
            // Apply filter to show only this tool and its ancestors
            applyFilter(found);
            const foundName = (currentLang === 'en' && found.data.nameEn) ? found.data.nameEn : found.data.name;
            console.log("🔍 Search: Showing", foundName, "and its ancestors");
        }
    });
}

function renderMenu() {
    const menuContainer = document.querySelector(".filters");
    if (!menuContainer) return;

    // Preserve the "All" button
    menuContainer.innerHTML = `<button class="filter-btn active" data-category="all">${uiTranslations[currentLang]['all-branches']}</button>`;

    // Create Category Groups
    root.children.forEach(category => {
        const group = document.createElement("div");
        group.className = "menu-group";

        const catBtn = document.createElement("button");
        catBtn.className = "filter-btn category-header";
        catBtn.textContent = (currentLang === 'en' && category.data.nameEn) ? category.data.nameEn : category.data.name;

        const subList = document.createElement("div");
        subList.className = "sub-menu hidden";

        catBtn.onclick = (e) => {
            e.stopPropagation();
            // Toggle sublist visibility
            const isHidden = subList.classList.contains("hidden");
            // Close other category lists if desired (optional)
            // document.querySelectorAll('.sub-menu').forEach(el => el.classList.add('hidden')); 

            if (isHidden) {
                subList.classList.remove("hidden");
            } else {
                subList.classList.add("hidden");
            }

            setActiveBtn(catBtn);
            applyFilter(category);
        };
        group.appendChild(catBtn);

        if (category.children) {
            category.children.forEach(sub => {
                const subItemWrapper = document.createElement("div");
                subItemWrapper.className = "sub-item-wrapper";

                const subBtn = document.createElement("button");
                subBtn.className = "filter-btn sub-item";
                subBtn.textContent = (currentLang === 'en' && sub.data.nameEn) ? sub.data.nameEn : sub.data.name;

                const toolsList = document.createElement("div");
                toolsList.className = "tools-menu hidden";
                toolsList.style.paddingLeft = "15px";
                toolsList.style.display = "flex";
                toolsList.style.flexDirection = "column";
                toolsList.style.gap = "2px";

                subBtn.onclick = (e) => {
                    e.stopPropagation();
                    const isHidden = toolsList.classList.contains("hidden");
                    if (isHidden) {
                        toolsList.classList.remove("hidden");
                    } else {
                        toolsList.classList.add("hidden");
                    }

                    setActiveBtn(subBtn);
                    applyFilter(sub);
                };

                subItemWrapper.appendChild(subBtn);

                if (sub.children) {
                    sub.children.forEach(tool => {
                        const toolBtn = document.createElement("button");
                        toolBtn.className = "filter-btn tool-item";
                        toolBtn.textContent = (currentLang === 'en' && tool.data.nameEn) ? tool.data.nameEn : tool.data.name;

                        toolBtn.onclick = (e) => {
                            e.stopPropagation();
                            setActiveBtn(toolBtn);
                            applyFilter(tool);
                        };
                        toolsList.appendChild(toolBtn);
                    });
                }

                subItemWrapper.appendChild(toolsList);
                subList.appendChild(subItemWrapper);
            });
        }

        group.appendChild(subList);
        menuContainer.appendChild(group);
    });

    const allBtn = menuContainer.querySelector('[data-category="all"]');
    allBtn.onclick = (e) => {
        e.stopPropagation();
        setActiveBtn(allBtn);
        applyFilter("all");
    };
}

function setActiveBtn(btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function highlightNodeSearch(d) {
    d3.selectAll("circle")
        .classed("searching", node => node === d)
        .transition()
        .duration(500)
        .attr("fill", node => (node === d ? "#ff9100" : getNodeColor(node)))
        .attr("r", node => (node === d ? 12 : 6));
}

// Duplicate centerNode removed

function resetHighlight() {
    d3.selectAll("circle")
        .classed("searching", false)
        .attr("fill", d => getNodeColor(d))
        .attr("r", 6);

    g.selectAll(".node")
        .classed("node--active", false);
}

function applyFilter(nodeOrCategory) {
    const nodes = d3.selectAll(".node");
    const links = d3.selectAll(".link");

    if (nodeOrCategory === "all") {
        nodes.transition().duration(500).style("opacity", 1);
        links.transition().duration(500).style("opacity", 0.6);
        // Reset green links to brown
        g.selectAll(".link").classed("link--active", false);
        console.log("✅ Reseteadas todas las líneas a marrón");
        return;
    }

    // Capture descendants of the target node
    const targetNode = nodeOrCategory; // This is a D3 hierarchy node
    const descendants = targetNode.descendants();
    const descendantNames = new Set(descendants.map(d => d.data.name));

    // Also get ancestors to keep parent branches visible
    const ancestors = targetNode.ancestors();
    const ancestorNames = new Set(ancestors.map(d => d.data.name));

    nodes.transition().duration(500).style("opacity", d => {
        // Always show the root node (Ciberseguridad)
        if (d.depth === 0) return 1;

        // Show if it's an ancestor (parent branch)
        if (ancestorNames.has(d.data.name)) return 1;

        // Show if it's the target or a descendant
        if (descendantNames.has(d.data.name)) return 1;

        return 0; // Hide completely instead of dimming
    });

    links.transition().duration(500).style("opacity", d => {
        // Show links connected to root
        if (d.source.depth === 0) return 1;

        // Show links in the ancestor path
        if (ancestorNames.has(d.source.data.name) && ancestorNames.has(d.target.data.name)) return 1;

        // Show links to descendants
        if (descendantNames.has(d.target.data.name)) return 1;

        return 0; // Hide completely instead of dimming
    });

    isAnimating = false;
    centerNode(targetNode);
    highlightPath(targetNode);
    showPopup(targetNode);
}

function updateLevel(level) {
    // Auth Check
    if (typeof IS_AUTHENTICATED !== 'undefined' && !IS_AUTHENTICATED && level > 0) {
        showAuthModal(false); // Show Register modal
        return;
    }

    currentLevel = level;

    // Update UI buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.level) === level);
    });

    // Re-filter and re-render tree
    const nodesToKeep = treeData.children.filter(d => (d.minLevel || 0) <= currentLevel);
    const filteredTreeData = { ...treeData, children: nodesToKeep };

    // Re-initialize hierarchy
    root = d3.hierarchy(filteredTreeData);

    // Position root
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    // Refresh sidebar menu (which uses root.children)
    renderMenu();

    fitToScreen();

    console.log("Tree filtered to level:", level);
}

function fitToScreen() {
    const nodes = root.descendants();
    if (!nodes.length) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    nodes.forEach(d => {
        if (d.y < minX) minX = d.y;
        if (d.y > maxX) maxX = d.y;
        if (d.x < minY) minY = d.x;
        if (d.x > maxY) maxY = d.x;
    });

    // Padding settings
    const paddingX = 200; // Horizontal padding (extra for text labels)
    const paddingY = 100; // Vertical padding

    const contentWidth = (maxX - minX) + paddingX;
    const contentHeight = (maxY - minY) + paddingY;

    // Determine scale to fit
    const scale = Math.min(
        (width * 0.9) / contentWidth,
        (height * 0.9) / contentHeight
    );

    // Clamp scale to reasonable limits
    const limitedScale = Math.min(Math.max(scale, 0.2), 1.5);

    // Calculate center of the content
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;

    // Translation to center the content
    const tx = width / 2 - midX * limitedScale;
    const ty = height / 2 - midY * limitedScale;

    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(limitedScale));
}
