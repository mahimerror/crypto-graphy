import React, { useState } from 'react'
import { JSEncrypt } from 'jsencrypt';

const Ecc = () => {

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
                    Elliptic Curve Cryptography (ECC): A Modern Approach to Secure Communication
                </h1>

                <p className="text-lg mb-4">
                    <strong>Elliptic Curve Cryptography (ECC)</strong> is an advanced type of public-key cryptography that relies on the algebraic structure of elliptic curves over finite fields. ECC provides the same level of security as traditional public-key cryptosystems like RSA but with much smaller key sizes, making it highly efficient for use in resource-constrained environments such as mobile devices and embedded systems.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is ECC?
                </h2>
                <p className="text-lg mb-4">
                    ECC is based on the mathematics of elliptic curves, which are equations of the form y² = x³ + ax + b. The security of ECC comes from the difficulty of the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>, which involves finding the integer <em>k</em> given points <em>P</em> and <em>kP</em> on the elliptic curve. The problem is computationally hard, making ECC a robust choice for encryption, digital signatures, and key exchange.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does ECC Work?
                </h2>
                <p className="text-lg mb-4">
                    The ECC algorithm is an asymmetric cryptographic technique that uses a pair of keys: a public key and a private key. Here’s a simplified breakdown of how ECC operates:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Generation:</strong> In ECC, a private key is a random integer <em>d</em> chosen within a specific range. The corresponding public key is computed as <em>P</em> = <em>dG</em>, where <em>G</em> is a predefined point on the elliptic curve known as the generator point.
                    </li>
                    <li className="mb-2">
                        <strong>Encryption:</strong> To encrypt a message, the sender uses the recipient’s public key. A temporary private key is generated, and the message is encrypted by combining the public key and the temporary key using elliptic curve operations.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> The recipient uses their private key to decrypt the message by applying elliptic curve arithmetic, recovering the original message.
                    </li>
                    <li className="mb-2">
                        <strong>Elliptic Curve Diffie-Hellman (ECDH):</strong> This is a key exchange mechanism in which two parties generate a shared secret by combining their private key with the other party’s public key. The shared secret can then be used to encrypt communications.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why ECC is Secure and Efficient
                </h2>
                <p className="text-lg mb-4">
                    ECC’s security relies on the difficulty of solving the ECDLP, which is computationally infeasible with current technology for large key sizes. The efficiency of ECC is particularly appealing because it offers the same level of security as traditional systems like RSA with much smaller keys. For example, a 256-bit ECC key provides approximately the same security as a 3072-bit RSA key, reducing the computational load and memory usage.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of ECC
                </h2>
                <p className="text-lg mb-4">
                    ECC is increasingly used in modern cryptographic applications, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">SSL/TLS certificates for securing web traffic</li>
                    <li className="mb-2">Mobile and embedded systems due to its low resource usage</li>
                    <li className="mb-2">Cryptocurrency wallets for securing transactions</li>
                    <li className="mb-2">Digital signatures using the Elliptic Curve Digital Signature Algorithm (ECDSA)</li>
                </ul>

                <p className="text-lg mb-4">
                    The use of ECC in SSL/TLS certificates and digital signatures ensures secure communication over the internet, making it a vital component of modern encryption protocols.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    ECC vs. RSA
                </h2>
                <p className="text-lg mb-4">
                    ECC has become a preferred alternative to RSA due to its smaller key sizes and greater efficiency. For instance, to achieve the same level of security, RSA requires significantly larger key sizes than ECC, which makes ECC faster and more efficient in terms of computation and storage. As a result, ECC is particularly well-suited for mobile devices and environments where performance and memory are critical concerns.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    ECC represents a significant advancement in cryptography, offering strong security with minimal computational overhead. Its use in securing communications, digital signatures, and cryptocurrencies highlights its growing importance in modern cryptographic systems. As the need for lightweight, secure encryption continues to grow, ECC is expected to play a key role in the future of cryptographic protocols.
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

export default Ecc;