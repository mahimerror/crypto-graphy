import React, { useState } from 'react'
import convert from 'tc-crypto'

const TcCrypto = () => {

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
        const encryptedData = convert("tc", "enc", plainText, privateKey);
        setOutput(encryptedData);
        console.log(encryptedData);
    };

    const handleDecrypt = () => {
        // Example: Basic processing (replace this with real decryption logic)
        // const decryptedData = `${cipherText} (Decrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setPlainText(decryptedData);

        const decryptedData = convert("tc", "dec", cipherText);
        setOutput1(decryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    TC (Trusted Cipher) Crypto: A New Era in Secure Data Encryption
                </h1>

                <p className="text-lg mb-4">
                    In the ever-evolving landscape of cybersecurity, the need for robust encryption methods has never been more critical. The **TC (Trusted Cipher) Crypto Algorithm** offers a novel approach to secure data transmission, integrating multiple cryptographic techniques to ensure both confidentiality and integrity of sensitive information.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is TC-Crypto?
                </h2>
                <p className="text-lg mb-4">
                    TC-Crypto is an innovative cryptographic algorithm designed to provide a secure and efficient means of encrypting and decrypting data. One of its unique features is that it encrypts the data with a **private key**, which is a numeric value. This means that the resulting ciphertext inherently contains the key, allowing for decryption without needing the original key.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does TC-Crypto Work?
                </h2>
                <p className="text-lg mb-4">
                    The TC-Crypto algorithm employs a multi-layered approach to encryption. Here’s a breakdown of how it operates:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Input Data Transformation:</strong> The algorithm first processes the input data, replacing numeric characters with special placeholders and random transformations to enhance security.
                    </li>
                    <li className="mb-2">
                        <strong>Key Generation:</strong> A numeric key is used to create a binary representation that dictates how the data will be further processed and encrypted. Importantly, this key is encoded into the ciphertext itself.
                    </li>
                    <li className="mb-2">
                        <strong>Character Shifting:</strong> Each character in the transformed data undergoes a shifting process using the Caesar cipher, where the amount of shift is determined by a random value generated for each character.
                    </li>
                    <li className="mb-2">
                        <strong>Output Data Composition:</strong> The final encrypted output combines the transformed data, key information, and any additional security markers required for decryption.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Decryption Process
                </h2>
                <p className="text-lg mb-4">
                    The decryption process for TC-Crypto is designed to reverse the transformations applied during encryption, ensuring that the original plaintext can be recovered without needing the original key. This is achieved by:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Reversing Character Shifts:</strong> The shifting applied during encryption is reversed using the encoded key found within the ciphertext.
                    </li>
                    <li className="mb-2">
                        <strong>Restoring Original Data:</strong> The algorithm meticulously reconstructs the original data by interpreting the placeholders and random transformations applied during the encryption phase.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Advantages of TC-Crypto
                </h2>
                <p className="text-lg mb-4">
                    The TC-Crypto algorithm offers several key benefits:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Enhanced Security: By integrating multiple encryption techniques, TC-Crypto offers robust protection against various attack vectors.</li>
                    <li className="mb-2">Flexibility: The algorithm can handle different data types, including text and numeric values, ensuring versatility across applications.</li>
                    <li className="mb-2">Efficiency: TC-Crypto is designed for quick encryption and decryption processes, making it suitable for real-time applications.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of TC-Crypto
                </h2>
                <p className="text-lg mb-4">
                    The TC-Crypto algorithm is ideal for various applications, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Secure communication channels</li>
                    <li className="mb-2">Data storage encryption</li>
                    <li className="mb-2">Integrity verification for sensitive transactions</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    The **TC (Trusted Cipher) Crypto Algorithm** represents a significant advancement in the field of cryptography. By combining established techniques with innovative approaches, it addresses the growing demand for secure data encryption in today's digital age. As cybersecurity threats continue to evolve, adopting algorithms like TC-Crypto will be essential in safeguarding sensitive information against unauthorized access.
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

                            <div className="mb-4">
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
                                    Cipher Text:
                                </label>
                                <textarea
                                    value={output}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                                    rows="3"
                                    placeholder="Cipher text will appear here..."
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

                            <div className="mb-4 hidden">
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

export default TcCrypto;