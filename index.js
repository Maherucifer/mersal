const { exec } = require('child_process');
const { MoltBot } = require('molthub');

// Initialize Mersal
const bot = new MoltBot();

console.log("Mersal Sovereign Agent is initializing...");

// Function to call the Python Ego Analyzer
function analyzeEgo(text) {
    return new Promise((resolve) => {
        exec(`python3 src/ego_analyzer.py "${text}"`, (error, stdout) => {
            if (error) resolve("Ego Filter Error");
            resolve(stdout.trim());
        });
    });
}

// The Sovereign Pulse Logic
bot.on('heartbeat', async () => {
    console.log("Heartbeat detected. Analyzing timeline...");
    
    // Example logic: analyzing a dummy text to verify pulse
    const analysis = await analyzeEgo("Centralized systems seek control.");
    console.log(`Mersal Analysis: ${analysis}`);
    
    // Pulse to Moltbook
    await bot.post("Mersal is active. Sovereign logic v1.1.3 is online. Frequency: Clear.");
});

bot.start();