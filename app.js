const kataIds = Array.from({ length: 32 }, (_, i) => `kata-${String(i + 1).padStart(3, "0")}`);
const knownFiles = ["index.html", "style.css", "styles.css", "script.js"];

const elements = {
  kataList: document.getElementById("kataList"),
  instructions: document.getElementById("instructions"),
  fileList: document.getElementById("fileList"),
  editor: document.getElementById("editor"),
  currentFile: document.getElementById("currentFile"),
  kataLabel: document.getElementById("kataLabel"),
  runBtn: document.getElementById("runBtn"),
  preview: document.getElementById("preview"),
  status: document.getElementById("status"),
  solutionBtn: document.getElementById("solutionBtn"),
};

const editorInstance = window.CodeMirror
  ? window.CodeMirror(elements.editor, {
      value: "",
      lineNumbers: false,
      tabSize: 2,
      indentUnit: 2,
      mode: "htmlmixed",
      lineWrapping: true,
    })
  : null;

function updateEditorSize() {
  if (!editorInstance) {
    return;
  }
  const main = elements.editor.parentElement;
  const header = main ? main.querySelector(".editor-header") : null;
  const headerHeight = header ? header.offsetHeight : 0;
  const available = main ? main.clientHeight - headerHeight : 0;
  const height = Math.max(available, 200);
  editorInstance.setSize("100%", `${height}px`);
  editorInstance.refresh();
}

const progressKey = "domKatasProgress";
const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");

const state = {
  currentKata: kataIds[0],
  files: {},
  currentFile: "",
  solutionMode: false,
  userFilesSnapshot: null,
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderEmStrong(escapedText) {
  let output = escapedText.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*(.+?)\*/g, "<em>$1</em>");
  return output;
}

function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (/^(https?:|#|\/)/i.test(trimmed)) {
    return trimmed;
  }
  return "";
}

function renderInlineSegment(text) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let output = "";
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text))) {
    output += renderEmStrong(escapeHtml(text.slice(lastIndex, match.index)));
    const label = renderEmStrong(escapeHtml(match[1]));
    const href = sanitizeUrl(match[2]);
    if (href) {
      output += `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${label}</a>`;
    } else {
      output += label;
    }
    lastIndex = match.index + match[0].length;
  }

  output += renderEmStrong(escapeHtml(text.slice(lastIndex)));
  return output;
}

function renderInlineMarkdown(text) {
  const parts = text.split("`");
  return parts
    .map((part, index) =>
      index % 2 === 1 ? `<code>${escapeHtml(part)}</code>` : renderInlineSegment(part)
    )
    .join("");
}

function renderMarkdown(raw) {
  const lines = raw.split("\n");
  let html = "";
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };

  lines.forEach((line) => {
        if (/^\s*#{1,6}\s+/.test(line)) {
          closeList();
          const level = line.match(/^\s*(#{1,6})/)[1].length;
          const content = renderInlineMarkdown(line.replace(/^\s*#{1,6}\s+/, ""));
          html += `<h${level}>${content}</h${level}>`;
          return;
        }

        if (/^\s*-\s+/.test(line)) {
          if (!inList) {
            html += "<ul>";
            inList = true;
          }
          const item = renderInlineMarkdown(line.replace(/^\s*-\s+/, ""));
          html += `<li>${item}</li>`;
          return;
        }

    if (line.trim() === "") {
      closeList();
      return;
    }

    closeList();
        html += `<p>${renderInlineMarkdown(line)}</p>`;
      });

  closeList();
  return html || "<p>Aucune consigne disponible.</p>";
}

function setStatus(message) {
  if (elements.status) {
    elements.status.textContent = message;
  }
}

function buildSrcdoc(files) {
  let html = files["index.html"] || "<!doctype html><html><head></head><body></body></html>";
  const css = files["style.css"] || files["styles.css"] || "";
  const js = files["script.js"] || "";
  const scriptClose = "</" + "script>";

  if (!/<head[^>]*>/i.test(html)) {
    html = `<head></head>${html}`;
  }

  const csp =
    "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:; font-src 'none'; connect-src 'none';\">";

  html = html.replace(/<head[^>]*>/i, (match) => `${match}\n${csp}`);

  if (css) {
    html = html.replace(/<\/head>/i, `<style>\n${css}\n</style>\n</head>`);
  }

  if (js) {
    if (/<\/body>/i.test(html)) {
      html = html.replace(/<\/body>/i, `<script>\n${js}\n${scriptClose}\n</body>`);
    } else {
      html += `<script>\n${js}\n${scriptClose}`;
    }
  }

  return html;
}

function renderPreview() {
  const srcdoc = buildSrcdoc(state.files);
  elements.preview.srcdoc = srcdoc;
  setStatus("Rendu mis a jour.");
}

function renderFileList() {
  elements.fileList.innerHTML = "";
  Object.keys(state.files).forEach((name) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.className = name === state.currentFile ? "active" : "";
    button.addEventListener("click", () => switchFile(name));
    elements.fileList.appendChild(button);
  });
}

function switchFile(name) {
  if (!state.files[name]) {
    return;
  }
  state.currentFile = name;
  elements.currentFile.textContent = name;
  setEditorMode(name);
  if (editorInstance) {
    editorInstance.setValue(state.files[name]);
    editorInstance.focus();
    updateEditorSize();
  } else {
    elements.editor.value = state.files[name];
  }
  renderFileList();
}

function setEditorContent(value) {
  state.files[state.currentFile] = value;
}

function getEditorContent() {
  if (editorInstance) {
    return editorInstance.getValue();
  }
  return elements.editor.value;
}

function setEditorMode(filename) {
  if (!editorInstance) {
    return;
  }
  let mode = "text/plain";
  if (filename.endsWith(".html")) {
    mode = "htmlmixed";
  } else if (filename.endsWith(".css")) {
    mode = "css";
  } else if (filename.endsWith(".js")) {
    mode = "javascript";
  }
  editorInstance.setOption("mode", mode);
}

async function fetchText(path) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    return await response.text();
  } catch (error) {
    return null;
  }
}

async function loadKata(kataId, useSolution = false) {
  setStatus("Chargement du kata...");
  state.currentKata = kataId;
  state.solutionMode = useSolution;
  elements.solutionBtn.textContent = useSolution ? "Revenir" : "Solution";

  const basePath = useSolution ? `${kataId}/solution` : kataId;
  const readme = await fetchText(`${kataId}/readme.md`);

  const files = {};
  for (const name of knownFiles) {
    const content = await fetchText(`${basePath}/${name}`);
    if (content !== null) {
      files[name] = content;
    }
  }

  if (!Object.keys(files).length) {
    files["index.html"] = "<h1>Pas de fichier charge</h1>";
  }

  state.files = files;
  state.currentFile = Object.keys(files)[0];

  elements.kataLabel.textContent = kataId.toUpperCase();
  elements.instructions.innerHTML = renderMarkdown(readme || "Aucune consigne pour ce kata.");

  renderFileList();
  setEditorMode(state.currentFile);
  switchFile(state.currentFile);
  renderPreview();
  updateEditorSize();
}

function renderKataList() {
  elements.kataList.innerHTML = "";
  kataIds.forEach((kataId) => {
    const item = document.createElement("li");
    item.className = "kata-item";

    const button = document.createElement("button");
    button.className = "kata-button";
    button.textContent = kataId.toUpperCase();
    button.addEventListener("click", () => {
      state.userFilesSnapshot = null;
      state.currentKata = kataId;
      updateActiveKata();
      loadKata(kataId, false);
    });

    const done = document.createElement("button");
    done.className = "done-toggle";
    done.textContent = progress[kataId] ? "☑" : "☐";
    if (progress[kataId]) {
      done.classList.add("is-done");
      item.classList.add("done");
    }
    done.addEventListener("click", (event) => {
      event.stopPropagation();
      progress[kataId] = !progress[kataId];
      localStorage.setItem(progressKey, JSON.stringify(progress));
      updateActiveKata();
    });

    item.appendChild(done);
    item.appendChild(button);
    elements.kataList.appendChild(item);
  });

  updateActiveKata();
}

function updateActiveKata() {
  const items = elements.kataList.querySelectorAll(".kata-item");
  items.forEach((item, index) => {
    const kataId = kataIds[index];
    const isActive = kataId === state.currentKata;
    const isDone = Boolean(progress[kataId]);
    item.classList.toggle("active", isActive);
    item.classList.toggle("done", isDone);
    const doneButton = item.querySelector(".done-toggle");
    doneButton.classList.toggle("is-done", isDone);
    doneButton.textContent = isDone ? "☑" : "☐";
  });
}

if (editorInstance) {
  editorInstance.on("change", () => {
    setEditorContent(editorInstance.getValue());
  });
} else {
  elements.editor.addEventListener("input", (event) => {
    setEditorContent(event.target.value);
  });
}

elements.runBtn.addEventListener("click", renderPreview);

elements.solutionBtn.addEventListener("click", async () => {
  if (state.solutionMode) {
    if (state.userFilesSnapshot) {
      state.files = { ...state.userFilesSnapshot };
      state.currentFile = Object.keys(state.files)[0];
      state.solutionMode = false;
      elements.solutionBtn.textContent = "Solution";
      renderFileList();
      switchFile(state.currentFile);
      renderPreview();
      setStatus("Retour a votre version.");
    }
    return;
  }

  state.userFilesSnapshot = { ...state.files };
  await loadKata(state.currentKata, true);
  if (Object.keys(state.files).length === 0) {
    setStatus("Aucune solution disponible pour ce kata.");
  } else {
    setStatus("Solution chargee.");
  }
});

renderKataList();
loadKata(state.currentKata, false);
updateEditorSize();
window.addEventListener("resize", updateEditorSize);
