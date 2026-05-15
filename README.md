# Case Studies

Repository for technical case studies of projects from my resume.

## Index

| Project | Period | Doc |
|---|---|---|
| MDM Service — Master Data Platform for CPE/CVE | Jul 2024 – Present | [markdown](mdm-service-casestudy.md) · [pdf](mdm-service-casestudy.pdf) |

## Building PDFs

PDFs are rendered from the markdown sources using a tiny pipeline:

```bash
npm install marked --no-save
node build-pdf.js
chrome --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=mdm-service-casestudy.pdf \
  file:///<abs-path>/mdm-service-casestudy.html
```

Requires Node.js and Google Chrome.
