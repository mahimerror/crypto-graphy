import React, { useState } from 'react'
import convert from 'tc-crypto'

const Sh1 = () => {

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
        const encryptedData = convert("sh1", "enc", plainText);
        setOutput(encryptedData);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    SHA-1 (Secure Hash Algorithm 1): An Overview of Its Use and Vulnerabilities
                </h1>

                <p className="text-lg mb-4">
                    <strong>SHA-1 (Secure Hash Algorithm 1)</strong> is a cryptographic hash function designed by the National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST) in 1995. It produces a 160-bit (20-byte) hash value, typically rendered as a 40-digit hexadecimal number. SHA-1 was widely used for ensuring data integrity, but significant vulnerabilities have been discovered over the years, leading to its decline in use for security-critical applications.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is SHA-1?
                </h2>
                <p className="text-lg mb-4">
                    SHA-1 is a member of the Secure Hash Algorithm family, which includes SHA-0, SHA-2, and SHA-3. The primary purpose of SHA-1 is to generate a fixed-size hash value from an arbitrary amount of input data. This hash can be used to verify data integrity, sign documents, and create digital signatures.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does SHA-1 Work?
                </h2>
                <p className="text-lg mb-4">
                    The SHA-1 algorithm processes data in 512-bit blocks, employing a series of logical operations, bitwise manipulations, and modular arithmetic to produce the final hash value. Here’s a simplified overview of the SHA-1 process:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Padding:</strong> The input message is padded to ensure its length is congruent to 448 mod 512. This involves appending a single '1' bit, followed by '0' bits, and finally adding a 64-bit representation of the original message length.
                    </li>
                    <li className="mb-2">
                        <strong>Initialization:</strong> Five 32-bit variables (A, B, C, D, E) are initialized to specific constants.
                    </li>
                    <li className="mb-2">
                        <strong>Processing Blocks:</strong> The padded message is divided into 512-bit chunks, which are processed in a series of 80 rounds. Each round involves mixing the message with the current hash value using logical functions and modular arithmetic.
                    </li>
                    <li className="mb-2">
                        <strong>Finalization:</strong> After processing all blocks, the final hash value is computed by combining the variables A, B, C, D, and E.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Vulnerabilities of SHA-1
                </h2>
                <p className="text-lg mb-4">
                    Despite its initial popularity, SHA-1 has been found to be vulnerable to several attacks, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Collision Attacks:</strong> Researchers demonstrated that it is feasible to generate two different inputs that produce the same SHA-1 hash, undermining its integrity. The first practical collision attack was announced by Google and CWI Amsterdam in 2017.
                    </li>
                    <li className="mb-2">
                        <strong>Preimage and Second Preimage Attacks:</strong> Although more challenging than collision attacks, advances in computational power have raised concerns about the feasibility of these types of attacks against SHA-1.
                    </li>
                </ul>
                <p className="text-lg mb-4">
                    As a result of these vulnerabilities, many organizations have moved away from using SHA-1 for security-sensitive applications.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of SHA-1
                </h2>
                <p className="text-lg mb-4">
                    Historically, SHA-1 was used in a variety of applications, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Digital signatures and certificates in SSL/TLS</li>
                    <li className="mb-2">Version control systems like Git for verifying data integrity</li>
                    <li className="mb-2">File integrity checks and checksum verification</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Alternatives to SHA-1
                </h2>
                <p className="text-lg mb-4">
                    Due to the vulnerabilities associated with SHA-1, it is recommended to use more secure hash functions, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2"><strong>SHA-2:</strong> The SHA-2 family, which includes SHA-224, SHA-256, SHA-384, and SHA-512, offers greater security and is widely adopted in modern cryptographic applications.</li>
                    <li className="mb-2"><strong>SHA-3:</strong> The SHA-3 family is based on a different cryptographic approach known as the Keccak algorithm and provides additional security features.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    While SHA-1 played a significant role in cryptographic history, its security vulnerabilities have rendered it unsuitable for modern applications that require strong data integrity. Organizations are encouraged to migrate to more secure hashing algorithms to protect sensitive information and ensure the integrity of digital communications.
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

export default Sh1;