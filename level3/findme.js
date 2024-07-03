function decryptMessage(key) {
    const encryptedMessage = "gAAAAABmJ-VG1hkdvv7XISzpc4tTT7_E1QoXxYTdy4X7shtfLTM9USLe3Jc3_Qk-e1UP1asarxk4XESa7DLq2Sd6LN2vyG6vqQ==";
    
    // Simulated decryption (replace with actual logic if needed)
    if (key === "Mario") {
        return "yourfinaldestination!!!";
    } else {
        return "Decryption failed. Invalid key.";
    }
}

document.getElementById('decryptButton').addEventListener('click', function() {
    const key = document.getElementById('keyInput').value;
    const result = decryptMessage(key);
    document.getElementById('result').textContent = "You can use me! But where? " + result;
});