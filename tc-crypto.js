// Fisher-Yates shuffle algorithm with a seed based on the key
function shuffle(array, seed) {
  let randomSeed = seed;
  for (let i = array.length - 1; i > 0; i--) {
    randomSeed = (randomSeed * 9301 + 49297) % 233280; // Create a pseudo-random number based on the seed
    const j = Math.floor((randomSeed / 233280) * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to generate a substitution matrix based on the key
function generateMatrix(key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const matrix = [];

  // Generate a unique permutation for each row based on the key
  for (let i = 0; i < key.length; i++) {
    let row = alphabet.split('');
    shuffle(row, key.charCodeAt(i)); // Shuffle row based on key character
    matrix.push(row);
  }
  return matrix;
}

// Function to encrypt a character using the matrix
function encryptCharacter(char, key, matrix, position) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  const index = alphabet.indexOf(char);
  
  if (index === -1) return char; // If the character is not in the set, return it unchanged

  const row = position % matrix.length; // Determine row using key and position
  return matrix[row][index];
}





// Function to reverse the number mapping from special character pairs back to numbers
function specialCharPairToNumber(pair) {
  const numberMap = {
    'a$': '0',
    'b!': '1',
    'c@': '2',
    'd#': '3',
    'e%': '4',
    'f^': '5',
    'g&': '6',
    'h*': '7',
    'i(': '8',
    'j)': '9'
  };
  return numberMap[pair] || pair; // Return the original pair if not found in the map
}

// Function to reverse the special character substitution
function reverseSpecialChar(char, key) {
  const specialChars = '!@#$%^&*()';
  const shift = key.charCodeAt(0) % specialChars.length;
  const index = specialChars.indexOf(char);
  
  if (index === -1) return char; // If not a special character, return unchanged
  
  // Reverse the shift applied during encryption
  const originalIndex = (index - shift + specialChars.length) % specialChars.length;
  return specialChars[originalIndex];
}

// Function to reverse the letter substitution using the matrix
function decryptCharacter(char, key, matrix, position) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  const row = position % matrix.length;
  const rowIndex = matrix[row].indexOf(char);
  
  if (rowIndex === -1) return char; // If not a valid encrypted letter, return unchanged

  return alphabet[rowIndex]; // Return the original letter
}

// Main encryption function
function encryptText(plaintext, key) {
  const matrix = generateMatrix(key);
  let ciphertext = '';

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];

    if (/\d/.test(char)) { // Check if the character is a number
      ciphertext += char;
    } else if (/[A-Za-z]/.test(char)) { // Check if it's a letter
      ciphertext += encryptCharacter(char, key, matrix, i);
    } else { // Otherwise, treat as a special character
      ciphertext += char;
    }
  }

  return ciphertext;
}

// Main decryption function
function decryptText(ciphertext, key) {
  const matrix = generateMatrix(key);
  let plaintext = '';
  let i = 0;

  while (i < ciphertext.length) {
    const char = ciphertext[i];

    if (/[a-zA-Z0-9]/.test(char)) { // Check if the character is a letter or number
      plaintext += decryptCharacter(char, key, matrix, i);
      i++;
    } else if (/[!@#$%^&*()]/.test(char) && i + 1 < ciphertext.length && /[a-z]/.test(ciphertext[i + 1])) {
      // Check if it's a letter-special character pair (for numbers)
      const pair = char + ciphertext[i + 1];
      plaintext += specialCharPairToNumber(pair); // Convert back to number
      i += 2; // Skip the next character since it was part of the pair
    } else {
      // Treat as a special character and reverse substitution
      plaintext += reverseSpecialChar(char, key);
      i++;
    }
  }

  return plaintext;
}

// Example usage
const plaintext = " ;A@mi #S@e2cure Mes@sa(ge 123! ;Ami";
const key = "ComplexKey123"; // Key with numbers
const encrypted = encryptText(plaintext, key);
console.log("Encrypted Text:", encrypted);

const decrypted = decryptText(encrypted, key);
console.log("Decrypted Text:", decrypted);
