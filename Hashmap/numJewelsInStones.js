function numJewelsInStones(jewels, stones) {
    // Create a set of jewels for O(1) lookups
    const jewelSet = new Set(jewels);
    let count = 0;
    
    // Loop through each stone and check if it's a jewel
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;  // Increment count if the stone is a jewel
        }
    }
    
    return count;  // Return the total count of jewels found in stones
}
