import React, { useState } from 'react'
import convert from 'tc-crypto'

const BlowFish = () => {

    const [plainText, setPlainText] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [output, setOutput] = useState("");


    const [cipherText, setCipherText] = useState("");
    const [publicKey1, setPublicKey1] = useState("");
    const [privateKey1, setPrivateKey1] = useState("");
    const [output1, setOutput1] = useState("");

    // Function to handle encryption/decryption or processing
    const handleEncrypt = () => {
        // Example: Basic processing (you can replace this with real cryptographic logic)
        // const encryptedData = `${plainText} (Encrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setOutput(encryptedData);
        // const encryptedData = encrypt("aes", plainText, publicKey);
        const encryptedData = convert("enc", "des", plainText, publicKey);
        setOutput(encryptedData);
    };

    const handleDecrypt = () => {
        // Example: Basic processing (replace this with real decryption logic)
        // const decryptedData = `${cipherText} (Decrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setPlainText(decryptedData);

        const decryptedData = convert("dec", "des", cipherText, publicKey1);
        setOutput1(decryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    Blowfish Algorithm: A Versatile Symmetric Cipher
                </h1>

                <p className="text-lg mb-4">
                    <strong>Blowfish</strong> is a symmetric-key block cipher developed by cryptographer Bruce Schneier in 1993. Known for its simplicity, efficiency, and flexibility, Blowfish has been widely adopted for encrypting sensitive data in various software applications. One of its key advantages is that it’s freely available for anyone to use, unlike some encryption algorithms that require licensing.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is Blowfish?
                </h2>
                <p className="text-lg mb-4">
                    <strong>Blowfish</strong> is a symmetric block cipher that encrypts data in 64-bit blocks using variable-length keys ranging from 32 bits to 448 bits. It was designed as a fast, drop-in replacement for older encryption algorithms like DES, which were becoming insecure due to advances in computational power.
                </p>

                <p className="text-lg mb-4">
                    Blowfish is notable for its simplicity, speed, and flexibility, allowing users to choose key lengths based on their specific security needs. Its speed and efficiency make it well-suited for both software and hardware implementations.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does Blowfish Work?
                </h2>
                <p className="text-lg mb-4">
                    Blowfish uses a <strong>Feistel network</strong> structure, which is a symmetric design where the encryption and decryption processes are nearly identical. Here’s a breakdown of its operation:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Expansion:</strong> Blowfish begins by expanding the key into several subkeys, which will be used during encryption. It requires the generation of 18 subkeys (P-array) and four S-boxes, each holding 256 32-bit entries.
                    </li>
                    <li className="mb-2">
                        <strong>Data Encryption:</strong> Data is encrypted in 16 rounds of the Feistel network. In each round, the data is split into two halves, and the right half is used to transform the left half, followed by swapping them.
                    </li>
                    <li className="mb-2">
                        <strong>Substitution and Permutation:</strong> Blowfish applies key-dependent substitutions using S-boxes and key-dependent permutations to add complexity to the encryption.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> Decryption is identical to encryption but with the subkeys applied in reverse order.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why Blowfish is Secure
                </h2>
                <p className="text-lg mb-4">
                    Blowfish's security lies in its ability to use variable-length keys and its Feistel network structure, which ensures that a small change in either the plaintext or the key produces a dramatically different ciphertext. Additionally, Blowfish's 16-round encryption process and the large key space (up to 448 bits) make it resistant to brute-force attacks and many other cryptographic attacks.
                </p>

                <p className="text-lg mb-4">
                    However, because Blowfish operates on 64-bit blocks, it can be susceptible to attacks on large datasets, such as birthday attacks, when dealing with significant amounts of data.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications and Use Cases of Blowfish
                </h2>
                <p className="text-lg mb-4">
                    Blowfish has been widely implemented in software applications, particularly in security tools like password managers, encryption utilities, and file protection systems. Its simplicity and efficiency make it popular in resource-constrained environments, but its use is decreasing in favor of more modern algorithms like AES, which supports larger block sizes and faster performance on modern hardware.
                </p>

                <p className="text-lg mb-4">
                    Despite its age, Blowfish is still used in certain applications and systems where the balance of security and speed is critical.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    Blowfish represents a key milestone in the history of cryptography, offering a flexible and secure encryption method that was a major improvement over older algorithms like DES. Though it is gradually being replaced by newer standards, Blowfish’s design and implementation continue to influence modern cryptographic algorithms.
                </p>
            </div>


            <div className='text-black'>
                <div id='encrypt' className="">
                    <div className="min-h-screen flex flex-col items-center justify-center">
                        <div className="w-full bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                                Encrypt Plain Text
                            </h1>

                            {/* Form Inputs */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Plain Text:
                                </label>
                                <textarea
                                    value={plainText}
                                    onChange={(e) => setPlainText(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    placeholder="Enter plain text..."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Public Key:
                                </label>
                                <input
                                    type="text"
                                    value={publicKey}
                                    onChange={(e) => setPublicKey(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter public key..."
                                />
                            </div>

                            <div className="mb-4 hidden">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Private Key:
                                </label>
                                <input
                                    type="text"
                                    value={privateKey}
                                    onChange={(e) => setPrivateKey(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter private key..."
                                />
                            </div>

                            {/* Button to process/encrypt */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleEncrypt}
                                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Encrypt
                                </button>
                            </div>

                            {/* Output Box */}
                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Output:
                                </label>
                                <textarea
                                    value={output}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                                    rows="3"
                                    placeholder="Output will appear here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='decrypt' className="">
                    <div className="min-h-screen flex flex-col items-center justify-center">
                        <div className="w-full bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                                Decrypt Cipher Text
                            </h1>

                            {/* Form Inputs */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Cipher Text:
                                </label>
                                <textarea
                                    value={cipherText}
                                    onChange={(e) => setCipherText(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    placeholder="Enter cipher text..."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Public Key:
                                </label>
                                <input
                                    type="text"
                                    value={publicKey1}
                                    onChange={(e) => setPublicKey1(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter public key..."
                                />
                            </div>

                            <div className="mb-4 hidden">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Private Key:
                                </label>
                                <input
                                    type="text"
                                    value={privateKey1}
                                    onChange={(e) => setPrivateKey1(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter private key..."
                                />
                            </div>

                            {/* Button to process/decrypt */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleDecrypt}
                                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Decrypt
                                </button>
                            </div>

                            {/* Output Box */}
                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Plain Text:
                                </label>
                                <textarea
                                    value={output1}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                                    rows="3"
                                    placeholder="Plain text will appear here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlowFish;