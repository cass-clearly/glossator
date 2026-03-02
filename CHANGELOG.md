# Changelog

All notable changes to Remarq will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- Markdown formatting in comments: `**bold**`, `*italic*`, `` `code` ``, and `[links](url)`
- Visual formatting hints below comment and reply textareas
- XSS protection for comment markdown (blocks `javascript:`, `data:`, and `vbscript:` URL schemes)
