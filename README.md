Capture the Flag Challenege built as a part of the 561 - System Defence and Security project.

# Cryptic World CTF Challenge

## Overview
Cryptic World is a Capture The Flag (CTF) challenge focused on web exploration, HTML manipulation, cryptography, and problem-solving skills. The challenge consists of three progressive levels that get increasingly difficult, requiring players to uncover hidden clues and navigate through various puzzles to find the final flag.

## Challenge Details
- **Category**: Web
- **Difficulty**: Medium
- **Point Value**: 200
- **Final Flag**: CTF_SDaT{Luffy_Zoro}

## Setup Instructions
1. Clone the repository to your local machine
2. Deploy the project using Docker:
   ```
   docker build -t cryptic-world .
   docker run -p 80:80 cryptic-world
   ```
3. Access the challenge by navigating to `http://localhost:80` in your browser

## Challenge Structure
The challenge is divided into three distinct levels:

### Level 1: HTML Manipulation
Players must inspect the webpage elements and remove the "disabled" class from a button to proceed. This level introduces the concept of HTML inspection and manipulation.

### Level 2: Morse Code and URL Construction
Players decode a morse code message to obtain a shortened URL, then use an image filename to construct the complete URL path that leads to a downloadable file.

### Level 3: Cryptography and Hidden Routes
Players must modify and execute a Python script (disguised as a DLL file), using the key "Mario" to decrypt a message that reveals the final route to the flag.

## Hints
- The website includes CSS that may be blocking your progress - inspect element names carefully
- Remember everything you see in Level 1, as it may contain important clues for later levels
- Pay attention to the pastebin reference mentioned in Level 1

## Files Included
- Web server files (HTML, CSS, JavaScript)
- Cryptographic components
- Redirects and route configurations
- Solution and write-up documentation

## Author
Gana Teja Akula (https://github.com/ganatejadragneel)

---

This CTF challenge provides an excellent opportunity to practice web snooping, basic cryptography, and attention to detail. Good luck and happy hacking!
