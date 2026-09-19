<div align="center">

# Study buddy

**A documented software project by [Bhuvaneshwaran S](https://github.com/bhuvanesh6566).**

[![GitHub](https://img.shields.io/badge/GitHub-bhuvanesh6566-181717?logo=github)](https://github.com/bhuvanesh6566)
[![Issues](https://img.shields.io/github/issues/bhuvanesh6566/Study_buddy)](https://github.com/bhuvanesh6566/Study_buddy/issues)

[Source Code](https://github.com/bhuvanesh6566/Study_buddy) · [Report a Bug](https://github.com/bhuvanesh6566/Study_buddy/issues)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## About

This README follows a consistent portfolio documentation format while preserving the repository's existing project-specific documentation.

## Features

- ✅ Project-specific functionality
- ✅ Documented setup and usage
- ✅ Extensible architecture

## Tech Stack

See the project-specific documentation below.

## Getting Started

Clone the repository and follow the project-specific instructions below.

```bash
git clone https://github.com/bhuvanesh6566/Study_buddy.git
cd Study_buddy
```

## Usage

Follow the commands and examples in the project documentation below.

## Project Structure

Refer to the repository tree and project documentation below.

## Roadmap

- [ ] Add screenshots or demo GIF
- [ ] Add automated testing documentation
- [ ] Expand troubleshooting documentation

## Contributing

Open an issue for bugs or feature requests, then submit a focused pull request.

## License

See [LICENSE](LICENSE) if present.

---

# Project Documentation

# AI-Powered Study Buddy 📚🤖

An AI-assisted study application for explaining concepts, summarizing notes, and generating flashcards.

## Features
- Explain concepts in simple language
- Summarize study material
- Generate Q&A flashcards

## Tech Stack
React + Vite • FastAPI • FLAN-T5

## Setup
### Backend
```bash
cd study_buddy_backend
pip install fastapi uvicorn transformers torch pydantic
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
