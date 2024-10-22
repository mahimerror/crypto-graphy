import React, { useState } from 'react'
import convert from 'tc-crypto'

const Md5 = () => {

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
        const encryptedData = convert("md5", "enc", plainText);
        setOutput(encryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    MD5 (Message Digest 5): A Hash Function for Data Integrity
                </h1>

                <p className="text-lg mb-4">
                    <strong>MD5 (Message Digest 5)</strong> is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value from an input data set of any size. Developed by Ronald Rivest in 1991, MD5 was initially designed to be a fast and efficient way to verify data integrity. Despite its popularity, MD5 has been found to have significant security vulnerabilities and is now considered unsuitable for further use in security-sensitive applications.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is MD5?
                </h2>
                <p className="text-lg mb-4">
                    MD5 is a hash function that takes an input (or "message") and returns a fixed-size string of characters, which appears random. The output is typically represented as a 32-character hexadecimal number. Hash functions like MD5 are commonly used in various applications, including checksums for file verification, digital signatures, and password hashing.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does MD5 Work?
                </h2>
                <p className="text-lg mb-4">
                    The MD5 algorithm processes data in blocks of 512 bits (64 bytes). The following steps outline the basic operation of MD5:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Padding:</strong> The input message is padded so that its length is congruent to 448 mod 512. This ensures that the message length is 64 bits short of a multiple of 512 bits. A single '1' bit is added, followed by '0' bits.
                    </li>
                    <li className="mb-2">
                        <strong>Appending Length:</strong> A 64-bit representation of the original message length is appended to the padded message.
                    </li>
                    <li className="mb-2">
                        <strong>Initialization:</strong> Four 32-bit variables (A, B, C, D) are initialized to specific constant values.
                    </li>
                    <li className="mb-2">
                        <strong>Processing Blocks:</strong> The padded message is processed in 512-bit chunks. Each chunk undergoes 64 operations involving bitwise operations, modular addition, and the use of auxiliary functions.
                    </li>
                    <li className="mb-2">
                        <strong>Finalization:</strong> After processing all blocks, the final hash value is computed by concatenating the variables A, B, C, and D.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Vulnerabilities of MD5
                </h2>
                <p className="text-lg mb-4">
                    Despite its initial popularity, MD5 has been found to be vulnerable to several types of attacks, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Collision Attacks:</strong> Researchers demonstrated that it is possible to generate two different inputs that produce the same MD5 hash. This undermines the integrity guarantees provided by the hash function.
                    </li>
                    <li className="mb-2">
                        <strong>Preimage Attacks:</strong> Although more difficult than collision attacks, advances in computational power have made it feasible to find an input that corresponds to a given MD5 hash.
                    </li>
                </ul>
                <p className="text-lg mb-4">
                    As a result of these vulnerabilities, MD5 is no longer considered secure for cryptographic purposes, particularly in applications requiring strong data integrity and security.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of MD5
                </h2>
                <p className="text-lg mb-4">
                    Despite its vulnerabilities, MD5 is still used in some non-cryptographic contexts, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Checksums for verifying file integrity in non-sensitive applications</li>
                    <li className="mb-2">Hashing data to quickly compare records in databases</li>
                    <li className="mb-2">Non-critical applications where performance is more important than security</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Alternatives to MD5
                </h2>
                <p className="text-lg mb-4">
                    Due to its vulnerabilities, developers are encouraged to use more secure hashing algorithms, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2"><strong>SHA-256:</strong> Part of the SHA-2 family, SHA-256 offers a higher level of security and is widely used in cryptographic applications.</li>
                    <li className="mb-2"><strong>BLAKE2:</strong> A fast and secure hashing algorithm designed to outperform MD5 and SHA-2 in speed and security.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    MD5 served as an essential tool for data integrity in the early days of cryptography, but its security flaws have rendered it obsolete for sensitive applications. While it may still be useful for non-cryptographic tasks, developers must prioritize stronger hash functions to ensure data integrity and security in modern applications.
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

export default Md5;