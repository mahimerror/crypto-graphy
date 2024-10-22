import React, { useState } from 'react'
import { JSEncrypt } from 'jsencrypt';

const Dh = () => {

    const [keyPair, setKeyPair] = useState({ publicKey: '', privateKey: '' });

    const [plainText, setPlainText] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [output, setOutput] = useState("");


    const [cipherText, setCipherText] = useState("");
    const [publicKey1, setPublicKey1] = useState("");
    const [privateKey1, setPrivateKey1] = useState("");
    const [output1, setOutput1] = useState("");

    // Generate RSA keypair
    const generateKeyPair = () => {
        const crypt = new JSEncrypt({ default_key_size: 512 });
        const publicKey = crypt.getPublicKey();
        const privateKey = crypt.getPrivateKey();

        setKeyPair({ publicKey, privateKey });
        setPublicKey(publicKey);
        console.log(publicKey);
        setPrivateKey(privateKey);
    };

    // Encrypt the message
    const handleEncrypt = () => {
        const crypt = new JSEncrypt();
        crypt.setPublicKey(publicKey);
        const encrypted = crypt.encrypt(plainText);
        setOutput(encrypted);
    };

    // Decrypt the message
    const handleDecrypt = () => {
        const crypt = new JSEncrypt();
        crypt.setPrivateKey(privateKey1);
        const decrypted = crypt.decrypt(cipherText);
        setOutput1(decrypted);
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    Diffie-Hellman (DH) Algorithm: Secure Key Exchange in Cryptography
                </h1>

                <p className="text-lg mb-4">
                    In cryptography, establishing a secure communication channel between two parties is essential, especially when they are communicating over a potentially insecure network. The **Diffie-Hellman (DH) key exchange** algorithm is one of the most revolutionary methods that allows two parties to securely exchange cryptographic keys without the need for a previously shared secret. First proposed in 1976 by Whitfield Diffie and Martin Hellman, this algorithm laid the foundation for secure online communications.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is Diffie-Hellman?
                </h2>
                <p className="text-lg mb-4">
                    The **Diffie-Hellman (DH)** algorithm is a method of securely exchanging cryptographic keys over a public channel. Unlike encryption algorithms that focus on securing the actual data, DH is used to create a shared secret between two parties, which can then be used for encryption and decryption in subsequent communication. Importantly, the DH algorithm enables this exchange without ever directly transmitting the secret key over the network.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does Diffie-Hellman Work?
                </h2>
                <p className="text-lg mb-4">
                    The Diffie-Hellman algorithm is based on the mathematical principles of modular arithmetic and the difficulty of solving discrete logarithms. Here’s a simplified breakdown of how DH works:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        **Step 1 - Public Parameters:** Two public numbers are chosen: a prime number **p** and a base **g** (also known as a generator).
                    </li>
                    <li className="mb-2">
                        **Step 2 - Private Keys:** Each party (say, Alice and Bob) selects their own private key (**a** for Alice and **b** for Bob), which is kept secret.
                    </li>
                    <li className="mb-2">
                        **Step 3 - Exchange of Public Keys:** Each party computes a public key by using the formula:
                        - Alice computes her public key as **A = g^a mod p**.
                        - Bob computes his public key as **B = g^b mod p**.
                        These public keys are exchanged between Alice and Bob over the insecure channel.
                    </li>
                    <li className="mb-2">
                        **Step 4 - Shared Secret:** Using each other’s public key and their own private key, both parties compute the same shared secret:
                        - Alice computes the shared secret as **s = B^a mod p**.
                        - Bob computes the shared secret as **s = A^b mod p**.
                    </li>
                </ul>

                <p className="text-lg mb-4">
                    Because both parties independently compute the same result, the shared secret **s** becomes the cryptographic key for encrypting further communications. The security of this key exchange lies in the fact that while **p**, **g**, **A**, and **B** are public, an attacker would need to solve the discrete logarithm problem, which is computationally infeasible with large numbers.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Key Benefits of Diffie-Hellman
                </h2>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        **Secure Key Exchange:** DH allows two parties to securely establish a shared secret key over an insecure channel.
                    </li>
                    <li className="mb-2">
                        **No Pre-shared Key Required:** Unlike symmetric encryption algorithms, DH doesn’t require a pre-shared secret key, making it ideal for environments where secure key distribution is difficult.
                    </li>
                    <li className="mb-2">
                        **Foundation for Many Cryptographic Protocols:** DH is used in many protocols, including TLS (used in HTTPS) and IPsec, for secure key exchanges in digital communications.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of Diffie-Hellman
                </h2>
                <p className="text-lg mb-4">
                    Diffie-Hellman is a foundational element of secure communication protocols. Some key applications include:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">**TLS/SSL:** DH is commonly used in TLS/SSL to establish a secure session key between a web server and a client.</li>
                    <li className="mb-2">**VPNs:** Virtual Private Networks (VPNs) use DH for securely exchanging session keys between the client and server.</li>
                    <li className="mb-2">**SSH:** Secure Shell (SSH) protocols use Diffie-Hellman to exchange cryptographic keys for secure connections.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    The **Diffie-Hellman (DH)** algorithm revolutionized the field of cryptography by enabling secure key exchange over insecure channels without needing to transmit the secret key itself. While more modern algorithms like **Elliptic Curve Diffie-Hellman (ECDH)** build upon this concept, DH remains a cornerstone in the design of secure communication protocols, ensuring privacy and security in our digital interactions.
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
                                    rows="5"
                                    placeholder="Enter plain text..."
                                />
                            </div>

                            {/* Button to genarate keys */}
                            <div className="flex justify-center">
                                <button
                                    onClick={generateKeyPair}
                                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Genarate Keys
                                </button>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Public Key:
                                </label>
                                <textarea
                                    value={publicKey}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Enter public key..."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Private Key:
                                </label>
                                <textarea
                                    type="text"
                                    value={privateKey}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
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
                                    rows="5"
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
                                    rows="5"
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

                            <div className="mb-4">
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
                                    rows="5"
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

export default Dh;