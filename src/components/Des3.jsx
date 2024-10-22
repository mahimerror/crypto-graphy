import React, { useState } from 'react'
import convert from 'tc-crypto'

const Des3 = () => {


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
        const encryptedData = convert("des3", "enc", plainText, publicKey);
        setOutput(encryptedData);
    };

    const handleDecrypt = () => {
        // Example: Basic processing (replace this with real decryption logic)
        // const decryptedData = `${cipherText} (Decrypted with Private Key: ${privateKey}, Public Key: ${publicKey})`;
        // setPlainText(decryptedData);

        const decryptedData = convert("des3", "dec", cipherText, publicKey1);
        setOutput1(decryptedData);
    };




    return (
        <div className='p-6'>
            <div className="">
                <div>
                    <h1 className="text-4xl font-bold text-blue-600 mb-8">
                        Triple DES Algorithm: Strengthening Symmetric Encryption
                    </h1>

                    <p className="text-lg mb-4">
                        Triple Data Encryption Standard, or <strong>3DES</strong>, is a more secure version of the original DES algorithm. Developed as a response to the growing vulnerabilities of DES due to advances in computational power, 3DES enhances security by applying the DES algorithm three times to each data block. This method, though more secure, also introduces increased computational overhead compared to its predecessor.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                        What is Triple DES (3DES)?
                    </h2>
                    <p className="text-lg mb-4">
                        <strong>Triple DES (3DES)</strong> is a symmetric-key block cipher that builds upon the original DES algorithm by encrypting data in three successive stages. This triple application provides significantly stronger security than single DES, but it is also more resource-intensive.
                    </p>

                    <p className="text-lg mb-4">
                        3DES was widely adopted in industries where higher security was needed but replacing DES entirely wasn't feasible. Despite its improved security over DES, 3DES is gradually being phased out in favor of faster and more secure algorithms like AES.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                        How Does 3DES Work?
                    </h2>
                    <p className="text-lg mb-4">
                        Triple DES works by applying the DES algorithm three times with either two or three unique keys, making it much more difficult to crack than single DES. Here’s a breakdown of its operation:
                    </p>

                    <ul className="list-disc ml-6 mb-4">
                        <li className="mb-2">
                            <strong>Keying Options:</strong> 3DES can be used with two or three unique keys, providing two different security levels.
                        </li>
                        <li className="mb-2">
                            <strong>Triple Application of DES:</strong> Data is first encrypted using DES with the first key, decrypted with the second key (or the first again if using only two keys), and then encrypted again with the third key.
                        </li>
                        <li className="mb-2">
                            <strong>Block Cipher:</strong> Like DES, 3DES operates on 64-bit blocks of data.
                        </li>
                        <li className="mb-2">
                            <strong>Decryption:</strong> Decryption involves reversing the process: decrypting with the third key, encrypting with the second, and decrypting with the first.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                        Why Use Triple DES?
                    </h2>
                    <p className="text-lg mb-4">
                        3DES was designed to address the weaknesses in DES while reusing its existing design. It became a standard for banking and financial services due to its resistance to brute-force attacks, which were increasingly problematic for DES’s 56-bit key length.
                    </p>

                    <p className="text-lg mb-4">
                        However, because 3DES runs DES three times, it requires more computational resources, making it slower than newer algorithms like AES.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                        The Legacy and Current Use of 3DES
                    </h2>
                    <p className="text-lg mb-4">
                        Although 3DES provided a more secure alternative to DES for many years, its use is declining in favor of more efficient encryption algorithms such as AES. However, 3DES remains in use in legacy systems, particularly in banking and financial sectors where compliance and compatibility with older systems are critical.
                    </p>

                    <p className="text-lg mb-4">
                        Understanding 3DES is essential for recognizing the evolution of encryption standards and how they address emerging security threats over time.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                        Conclusion
                    </h2>
                    <p className="text-lg mb-4">
                        Triple DES, while now considered inefficient compared to modern encryption algorithms, marked a critical step in cryptographic security. Its implementation ensured the continued protection of sensitive data during a time when DES could no longer keep up with advancing threats, and it remains an important part of cryptographic history.
                    </p>
                </div>
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

export default Des3;