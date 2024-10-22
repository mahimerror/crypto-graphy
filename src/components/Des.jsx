import React, { useState } from 'react'
import convert from 'tc-crypto'

const Des = () => {

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
        const encryptedData = convert("des", "enc", plainText, publicKey);
        setOutput(encryptedData);
    };

    const handleDecrypt = () => {
        // Example: Basic processing (replace this with real decryption logic)
        // const decryptedData = `${cipherText} (Decrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setPlainText(decryptedData);

        const decryptedData = convert("des", "dec", cipherText, publicKey1);
        setOutput1(decryptedData);
    };





    return (
        <div className="p-6">
            <div className="">
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    The DES Algorithm: A Foundational Block in Cryptography
                </h1>

                <p className="text-lg mb-4">
                    In the rapidly evolving world of cybersecurity, cryptographic algorithms play a critical role in securing sensitive information. One of the earliest and most well-known symmetric-key algorithms is the <strong>Data Encryption Standard (DES)</strong>. Although DES has largely been replaced by more advanced encryption methods today, its historical significance and foundational design continue to influence modern cryptography.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is DES?
                </h2>
                <p className="text-lg mb-4">
                    The <strong>Data Encryption Standard (DES)</strong> is a symmetric-key block cipher that was developed in the early 1970s by IBM and later adopted by the U.S. National Institute of Standards and Technology (NIST) in 1977 as a federal standard. DES was designed to encrypt 64-bit blocks of data using a 56-bit key, ensuring confidentiality in digital communication.
                </p>

                <p className="text-lg mb-4">
                    It remained a dominant encryption standard for over two decades before it was eventually deemed insecure due to advances in computational power, which made brute-force attacks feasible.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does DES Work?
                </h2>
                <p className="text-lg mb-4">
                    At its core, the DES algorithm uses a process known as <strong>Feistel structure</strong>, a symmetric design where the encryption and decryption processes are almost identical. Here’s a breakdown of how DES operates:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Generation:</strong> DES begins by generating 16 different keys, each 48 bits long, from an initial 56-bit key.
                    </li>
                    <li className="mb-2">
                        <strong>Initial Permutation:</strong> A shuffling process that reorders the 64-bit block of plaintext data.
                    </li>
                    <li className="mb-2">
                        <strong>16 Rounds of Encryption:</strong> Data is split, expanded, XORed, substituted through S-boxes, permuted, and swapped in each round.
                    </li>
                    <li className="mb-2">
                        <strong>Final Permutation:</strong> After 16 rounds, the two halves are combined, and a final permutation is applied.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> Decryption is simply the reverse of the encryption process using the same keys in reverse order.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why DES is No Longer Secure
                </h2>
                <p className="text-lg mb-4">
                    While DES was revolutionary at the time of its inception, it became vulnerable to attacks as computing power grew. A key reason for this vulnerability is the <strong>56-bit key length</strong>, which is too short by modern standards. With today's computational capabilities, it’s possible to <strong>brute-force</strong> DES, testing all possible key combinations to decrypt the data.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    The Legacy of DES
                </h2>
                <p className="text-lg mb-4">
                    Despite its limitations, DES introduced several critical concepts still used in modern encryption techniques, such as block cipher design, substitution-permutation networks, and symmetric-key cryptography.
                </p>

                <p className="text-lg mb-4">
                    Understanding DES helps us appreciate the evolution of cryptographic techniques and provides insights into the challenges of maintaining data security in an ever-changing technological landscape.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    Although DES is no longer considered secure, its impact on cryptography is undeniable. It laid the groundwork for modern encryption algorithms, influencing the development of stronger algorithms like <strong>AES</strong>, and shaped the future of secure communications.
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

export default Des;