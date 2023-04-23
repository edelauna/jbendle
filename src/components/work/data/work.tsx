interface IWork {
    title: string;
    description: string;
    src: string;
}

export const works: IWork[] = [{
    title: "graphQL Batching + DOM clobbering XSS",
    description: "Video Walkthrough of Hack The Box's (HTB) Uni 2022 CTF Challenge: Batchcraft Potions",
    src: "https://www.youtube.com/embed/wIS4dd5QtZ0"
},{
    title: "Express Local File Inclusion LFI + Service Side Request Forgery SSRF 4K",
    description: "",
    src: "https://www.youtube.com/embed/02P1RfR_47c"
},{
    title: "NoSQL Injection",
    description: "Video Walkthrough of GlacierCTF's FlagCoin2 challenge.",
    src: "https://www.youtube.com/embed/RIpKBZ9lF8c"
},{
    title: "CTF Intro: Python2 Regex Bypass",
    description: "Video Walkthrough of GlacierCTF's Glacier Top News Challenge",
    src: "https://www.youtube.com/embed/MmlclCWmeO8"
},{
    title: "JSFUCKS To Bypass Calculator Logic",
    description: "Video Walkthrough of Glacier's CTF Broken Calculator Challenge",
    src: "https://www.youtube.com/embed/M9dGKkkxp_E"
},{
    title: "Brute Force OTP using cURL",
    description: "Video walk-through of solving Portswiggers Expert Lab: 2FA Bypass using a brute force attack.",
    src: "https://www.youtube.com/embed/guts6BmFjZs"
},{
    title: "Redis Cache Poisoning via Broken Access Control with Insecure Deserialization resulting in RCE",
    description: "Video Walkthrough of Hack the Box's 2023 Apocalypse CTF Web Challenge TrapTrack. The challenge was solved by poisoning the redis cache via curl to deserialize a malicious object which resulted in remote code execution.",
    src: "https://www.youtube.com/embed/ZzX9SNVzsH0"
},{
    title: "Cross Site Scripting via Polyglot Upload",
    description: "Video Walkthrough of Hack the Box's CTF Apocalypse 2023 challenge SpyBug. Solved by uploading a spoofed file containing javascript via multipart/form-data, which could be loaded by the page.",
    src: "https://www.youtube.com/embed/Wr2OJ52WiLU"
},{
    title: "Misconfigured JWT and Server Side Template Injection",
    description: "Video Walkthrough of Hack the Box's 2023 Apocalypse Web challenge Didactic Octo Paddle",
    src: "https://www.youtube.com/embed/WpYT1t3FPRM"
},{
    title: "graphql Injections and Apollo Cache Poisoning",
    description: "Video Walkthrough of Plaid's 2023 CTF challenge subs",
    src: "https://www.youtube.com/embed/tON4CorDDNE"
}]
