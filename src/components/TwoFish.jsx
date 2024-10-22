import React, { useState } from 'react'
import convert from 'tc-crypto'

const TowFish = () => {

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
                    Twofish Algorithm: A Modern Successor to Blowfish
                </h1>

                <p className="text-lg mb-4">
                    <strong>Twofish</strong> is a symmetric-key block cipher designed by Bruce Schneier, the same cryptographer behind Blowfish, as a faster and more secure alternative. Twofish was one of the five finalists in the competition to become the Advanced Encryption Standard (AES) and, although it was not selected, it is still widely respected for its speed and security.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is Twofish?
                </h2>
                <p className="text-lg mb-4">
                    <strong>Twofish</strong> is a symmetric block cipher that encrypts data in 128-bit blocks and supports key sizes of 128, 192, or 256 bits, making it highly secure and flexible. Like its predecessor Blowfish, Twofish is known for its efficient design, which allows it to perform well on both low-power devices and high-performance systems.
                </p>

                <p className="text-lg mb-4">
                    Its flexible key size and efficient design make Twofish suitable for a wide range of applications, from embedded systems to network encryption.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does Twofish Work?
                </h2>
                <p className="text-lg mb-4">
                    Twofish uses a <strong>Feistel network</strong> structure, similar to Blowfish, and applies a mix of substitution and permutation operations to the data. Here’s how Twofish operates:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Expansion:</strong> Twofish begins by expanding the key into several subkeys and two additional key-dependent matrices called "S-boxes" and "MDS matrices" used for mixing operations.
                    </li>
                    <li className="mb-2">
                        <strong>Data Encryption:</strong> Data is encrypted over 16 rounds using the Feistel network. In each round, half of the data is XORed with the round subkey and processed through complex transformations involving S-boxes, permutations, and a unique "whitening" step.
                    </li>
                    <li className="mb-2">
                        <strong>Mixing and Substitution:</strong> The S-boxes used in Twofish are key-dependent, which makes the substitution process dynamic. The MDS matrix mixes the data to ensure diffusion, a property that ensures that a small change in the input will drastically change the output.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> Decryption is simply the reverse of encryption, following the same steps in reverse order with the same keys.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why Twofish is Secure
                </h2>
                <p className="text-lg mb-4">
                    Twofish's security stems from its complex key schedule, dynamic S-boxes, and the MDS matrix mixing, all of which make it highly resistant to known cryptographic attacks like differential and linear cryptanalysis. Its support for key lengths up to 256 bits also makes it secure against brute-force attacks.
                </p>

                <p className="text-lg mb-4">
                    Additionally, the "whitening" technique, where parts of the key are XORed with the plaintext and ciphertext before and after the encryption process, adds an extra layer of security, making it harder for attackers to perform cryptanalysis.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications and Use Cases of Twofish
                </h2>
                <p className="text-lg mb-4">
                    Twofish is used in various encryption software and security protocols due to its speed and versatility. It is implemented in popular encryption tools like PGP (Pretty Good Privacy) and GPG (GNU Privacy Guard) for securing files and communication. Its efficient design makes it ideal for both hardware and software implementations.
                </p>

                <p className="text-lg mb-4">
                    Although Twofish did not become the AES standard, it remains highly regarded in the cryptographic community and is still considered a strong and efficient encryption method.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    Twofish is a fast, flexible, and secure encryption algorithm that provides a robust alternative to other ciphers like AES. Its strong security features and efficient performance have ensured its continued use in various applications, even decades after its development. For those seeking an encryption algorithm that balances security and speed, Twofish remains a solid choice.
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

export default TowFish;