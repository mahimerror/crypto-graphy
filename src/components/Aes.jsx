import React, { useState } from 'react'
import convert from 'tc-crypto'

const Aes = () => {

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
        const encryptedData = convert("aes", "enc", plainText, publicKey);
        setOutput(encryptedData);
    };

    const handleDecrypt = () => {
        // Example: Basic processing (replace this with real decryption logic)
        // const decryptedData = `${cipherText} (Decrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setPlainText(decryptedData);

        const decryptedData = convert("aes", "dec", cipherText, publicKey1);
        setOutput1(decryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    AES Algorithm: The Gold Standard of Modern Cryptography
                </h1>

                <p className="text-lg mb-4">
                    The <strong>Advanced Encryption Standard (AES)</strong> is one of the most widely used and secure encryption algorithms in the world today. Developed as a successor to the aging DES and 3DES algorithms, AES is known for its speed, security, and efficiency. It is used across various industries, including government, finance, and technology, to protect sensitive data.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is AES?
                </h2>
                <p className="text-lg mb-4">
                    <strong>AES</strong> is a symmetric-key block cipher that was established as a standard by the U.S. National Institute of Standards and Technology (NIST) in 2001. Unlike DES, which uses a 56-bit key, AES supports key sizes of 128, 192, or 256 bits, providing much stronger encryption. AES encrypts data in fixed-size blocks of 128 bits, ensuring that the data is protected against brute-force attacks and other cryptographic attacks.
                </p>

                <p className="text-lg mb-4">
                    AES has become the gold standard for encrypting sensitive data, particularly in government and military applications, due to its robust security features and widespread adoption.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does AES Work?
                </h2>
                <p className="text-lg mb-4">
                    AES operates using a process called the <strong>Substitution-Permutation Network (SPN)</strong>. Here’s a breakdown of how AES works to secure data:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Expansion:</strong> The initial key is expanded into several subkeys, one for each round of encryption.
                    </li>
                    <li className="mb-2">
                        <strong>Initial Round:</strong> Data is divided into 128-bit blocks, and the first round begins with an initial key addition.
                    </li>
                    <li className="mb-2">
                        <strong>Rounds of Encryption:</strong> Depending on the key size (128, 192, or 256 bits), AES goes through 10, 12, or 14 rounds of transformations. Each round involves four steps:
                        <ul className="list-disc ml-6">
                            <li className="mb-2"><strong>SubBytes:</strong> A byte-level substitution using a predefined S-box.</li>
                            <li className="mb-2"><strong>ShiftRows:</strong> A row-wise permutation of the data block.</li>
                            <li className="mb-2"><strong>MixColumns:</strong> A mixing operation applied to each column of the block.</li>
                            <li className="mb-2"><strong>AddRoundKey:</strong> The round key is XORed with the block of data.</li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <strong>Final Round:</strong> The final round excludes the MixColumns step and applies the other transformations, leaving encrypted data.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> AES decryption is essentially the reverse of the encryption process, using the same keys but reversing the order of operations.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why AES is Secure
                </h2>
                <p className="text-lg mb-4">
                    AES's strength lies in its large key sizes, which provide excellent security against brute-force attacks. Additionally, the combination of substitution, permutation, and mixing operations makes it highly resistant to known cryptographic attacks. Its 128-bit block size and variable key lengths ensure that AES remains secure, even against powerful computers and modern attack techniques.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    The Legacy and Adoption of AES
                </h2>
                <p className="text-lg mb-4">
                    Since its adoption as a federal standard, AES has been implemented in a wide range of systems, from securing communication in mobile phones to safeguarding financial transactions in banks. It is used by the U.S. government for top-secret data and has become a fundamental component of many cryptographic protocols.
                </p>

                <p className="text-lg mb-4">
                    AES is not only efficient but also future-proof, capable of withstanding modern cryptographic challenges and emerging threats.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    AES has cemented its position as the global standard for encryption. Its combination of speed, security, and scalability makes it the go-to choice for protecting data in a digital world. As cryptographic needs continue to evolve, AES remains a key player in the ongoing fight for data privacy and security.
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

export default Aes;