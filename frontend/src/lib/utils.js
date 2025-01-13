export function formatMessageTime(data) {
    return new Date(data).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Use 24-hour format
        timeZone: "Asia/Kolkata", // Explicitly set to Indian Standard Time
    });
}
