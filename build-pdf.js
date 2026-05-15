const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const mdFile = path.join(__dirname, 'mdm-service-casestudy.md');
const htmlFile = path.join(__dirname, 'mdm-service-casestudy.html');

const md = fs.readFileSync(mdFile, 'utf8');
const body = marked.parse(md);

const css = `
  @page { size: A4; margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1f2328;
    line-height: 1.55;
    font-size: 10.5pt;
    max-width: 760px;
    margin: 0 auto;
  }
  h1 { font-size: 22pt; border-bottom: 2px solid #d0d7de; padding-bottom: 6px; margin-top: 0; }
  h2 { font-size: 14pt; border-bottom: 1px solid #d0d7de; padding-bottom: 4px; margin-top: 22px; page-break-after: avoid; }
  h3 { font-size: 12pt; margin-top: 16px; page-break-after: avoid; }
  h4 { font-size: 11pt; margin-top: 12px; }
  p, li { font-size: 10.5pt; }
  code {
    font-family: "Consolas", "SF Mono", Menlo, Monaco, monospace;
    background: #f6f8fa;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 9.5pt;
  }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 10px 12px;
    overflow-x: auto;
    font-size: 9pt;
    line-height: 1.4;
    page-break-inside: avoid;
  }
  pre code { background: none; padding: 0; font-size: 9pt; }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0;
    font-size: 10pt;
    page-break-inside: avoid;
  }
  th, td {
    border: 1px solid #d0d7de;
    padding: 6px 10px;
    text-align: left;
    vertical-align: top;
  }
  th { background: #f6f8fa; font-weight: 600; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 18px 0; }
  blockquote {
    border-left: 4px solid #d0d7de;
    color: #57606a;
    padding: 0 12px;
    margin: 10px 0;
  }
  a { color: #0969da; text-decoration: none; }
  ul, ol { padding-left: 22px; }
  strong { font-weight: 600; }
`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>MDM Service Case Study</title>
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;

fs.writeFileSync(htmlFile, html, 'utf8');
console.log('Wrote', htmlFile);
