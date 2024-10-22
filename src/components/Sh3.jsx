import React, { useState } from 'react'
import convert from 'tc-crypto'

const Sh3 = () => {

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
        const encryptedData = convert("sh3", "enc", plainText);
        setOutput(encryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    SHA-3 (Secure Hash Algorithm 3): A Modern Cryptographic Standard
                </h1>

                <p className="text-lg mb-4">
                    In the constantly evolving field of cryptography, hash functions play a crucial role in securing data and ensuring integrity. **SHA-3 (Secure Hash Algorithm 3)** is the latest member of the Secure Hash Algorithm family, standardized by the National Institute of Standards and Technology (NIST) in 2015. Unlike its predecessors, SHA-3 is built using a completely different cryptographic construction known as the **Keccak** algorithm, providing additional resilience to attacks and offering a new layer of security for digital applications.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is SHA-3?
                </h2>
                <p className="text-lg mb-4">
                    **SHA-3** is part of the SHA family but differs significantly from previous algorithms like SHA-1 and SHA-2. While SHA-1 and SHA-2 use the **Merkle-Damgård construction**, SHA-3 is built on the **Keccak sponge construction**, which allows for greater flexibility and security.
                </p>
                <p className="text-lg mb-4">
                    SHA-3 offers multiple hash output sizes, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">**SHA3-224**: Generates a 224-bit hash.</li>
                    <li className="mb-2">**SHA3-256**: Generates a 256-bit hash, which is widely used.</li>
                    <li className="mb-2">**SHA3-384**: Produces a 384-bit hash for enhanced security.</li>
                    <li className="mb-2">**SHA3-512**: Provides a 512-bit hash, the most secure option.</li>
                </ul>

                <p className="text-lg mb-4">
                    Like other hash functions, SHA-3 takes an input (often called a message) and generates a fixed-length hash that uniquely represents the data. Even a minor change in the input will result in a drastically different output, ensuring data integrity.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does SHA-3 Work?
                </h2>
                <p className="text-lg mb-4">
                    SHA-3 operates differently from SHA-1 and SHA-2, using the **Keccak sponge function**. Here’s a high-level breakdown of how it works:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        **Sponge Construction**: SHA-3 uses a "sponge" structure, which consists of an absorbing phase (where the input is processed) and a squeezing phase (where the output hash is generated).
                    </li>
                    <li className="mb-2">
                        **Block Processing**: The algorithm processes the input in blocks, absorbing the message and mixing it with a large internal state. SHA-3 uses bitwise operations, such as XOR, rotation, and permutation, to scramble the input effectively.
                    </li>
                    <li className="mb-2">
                        **Final Hash Generation**: After all blocks are processed, the output is squeezed out to produce the desired hash length, such as 256 bits for **SHA3-256** or 512 bits for **SHA3-512**.
                    </li>
                </ul>

                <p className="text-lg mb-4">
                    This sponge construction provides a more robust resistance to various cryptographic attacks, such as **length extension attacks**, which can threaten hash algorithms like SHA-1 and SHA-2.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why SHA-3 is Different from SHA-2
                </h2>
                <p className="text-lg mb-4">
                    Although both SHA-2 and SHA-3 are considered secure by modern standards, SHA-3 introduces key differences. SHA-2 relies on the older Merkle-Damgård structure, which has known vulnerabilities to certain attack vectors, while SHA-3’s Keccak sponge construction offers better defense against these types of attacks. As computing power grows and more advanced cryptanalysis techniques are developed, SHA-3’s design is intended to withstand future threats.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of SHA-3
                </h2>
                <p className="text-lg mb-4">
                    **SHA-3** is designed to be versatile and can be used in many of the same applications as SHA-2, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        **Digital Signatures**: SHA-3 is used to ensure the integrity of digital signatures by hashing the message before signing it with a private key.
                    </li>
                    <li className="mb-2">
                        **Cryptocurrency**: Blockchain networks, particularly those looking to future-proof their security, may adopt SHA-3 to secure transactions and data.
                    </li>
                    <li className="mb-2">
                        **Data Integrity Checks**: SHA-3 can be used in verifying file integrity to ensure that files are not tampered with or corrupted during transmission.
                    </li>
                    <li className="mb-2">
                        **Password Hashing**: Applications use SHA-3 to hash passwords, adding a critical layer of security by storing only hashed values rather than plaintext passwords.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    The Future of SHA-3
                </h2>
                <p className="text-lg mb-4">
                    While SHA-2 remains secure for now, SHA-3 was introduced to provide an additional layer of security as cryptographic research evolves. It was designed as a "backup" for SHA-2 in case unforeseen vulnerabilities were discovered. With its unique construction and increased resistance to certain attacks, SHA-3 is likely to become more prominent as the cryptographic landscape continues to evolve.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    **SHA-3** represents a modern step forward in cryptographic hashing. While it shares many applications with its predecessor, SHA-2, its new design and additional security measures make it an essential tool for future-proofing cryptographic security. Whether for securing blockchain technologies, verifying data integrity, or protecting sensitive information, SHA-3 plays a vital role in the cryptographic world.
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

                            <div className="mb-4 hidden">
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
            </div>
        </div>
    );
};

export default Sh3;