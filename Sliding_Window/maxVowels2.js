var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelsCount = 0;
    let currentVowels = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }
    maxVowelsCount = currentVowels;

    // Slide the window
    for (let i = k; i < s.length; i++) {
        // Remove the effect of the character going out of the window
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }
        // Add the effect of the character coming into the window
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        // Update max vowels count
        maxVowelsCount = Math.max(maxVowelsCount, currentVowels);
    }

    return maxVowelsCount;
};
