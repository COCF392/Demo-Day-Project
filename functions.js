function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36
    const random = Math.random().toString(36).substr(2, 9); // Generate random string
    return timestamp + random; // Combine for unique ID
}