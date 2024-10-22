import React, { useState } from 'react'
import { JSEncrypt } from 'jsencrypt';

const Rsa = () => {

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
                    RSA Algorithm: The Backbone of Modern Public-Key Cryptography
                </h1>

                <p className="text-lg mb-4">
                    <strong>RSA</strong> (Rivest-Shamir-Adleman) is one of the most widely used public-key cryptographic algorithms. Developed in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, RSA revolutionized encryption by enabling secure communication over untrusted networks without the need for a shared secret key. RSA is the cornerstone of many secure communications protocols and continues to play a vital role in data encryption, digital signatures, and secure key exchange.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is RSA?
                </h2>
                <p className="text-lg mb-4">
                    <strong>RSA</strong> is an asymmetric cryptographic algorithm that uses a pair of keys: a public key and a private key. The public key can be shared openly and is used for encrypting data, while the private key is kept secret and is used for decrypting the data. The security of RSA relies on the mathematical difficulty of factoring large prime numbers, making it extremely secure with sufficiently large key sizes.
                </p>

                <p className="text-lg mb-4">
                    RSA is widely used for securing sensitive data, particularly in applications that require secure data transmission, such as email encryption, secure web traffic (SSL/TLS), and digital signatures.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does RSA Work?
                </h2>
                <p className="text-lg mb-4">
                    The RSA algorithm is based on the mathematical properties of prime numbers and modular arithmetic. Here's a simplified explanation of how RSA works:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Generation:</strong> RSA starts by generating two large prime numbers, <em>p</em> and <em>q</em>. These primes are multiplied to produce <em>n</em>, which is part of both the public and private keys. The totient, φ(<em>n</em>), is calculated as (p-1)(q-1).
                    </li>
                    <li className="mb-2">
                        <strong>Public Key:</strong> A public exponent <em>e</em> is chosen such that 1 &lt; <em>e</em> &lt; φ(<em>n</em>), and <em>e</em> is coprime with φ(<em>n</em>). The public key consists of the pair (<em>n</em>, <em>e</em>).
                    </li>
                    <li className="mb-2">
                        <strong>Private Key:</strong> The private key is derived by calculating <em>d</em>, the modular inverse of <em>e</em> modulo φ(<em>n</em>), such that (<em>e</em> * <em>d</em>) ≡ 1 (mod φ(<em>n</em>)). The private key consists of the pair (<em>n</em>, <em>d</em>).
                    </li>
                    <li className="mb-2">
                        <strong>Encryption:</strong> To encrypt a message <em>m</em>, the sender uses the public key and computes the ciphertext <em>c</em> = <em>m</em><sup><em>e</em></sup> mod <em>n</em>.
                    </li>
                    <li className="mb-2">
                        <strong>Decryption:</strong> The recipient uses their private key to decrypt the ciphertext <em>c</em> by computing <em>m</em> = <em>c</em><sup><em>d</em></sup> mod <em>n</em>, recovering the original message.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Why RSA is Secure
                </h2>
                <p className="text-lg mb-4">
                    RSA's security comes from the mathematical difficulty of factoring large numbers. The larger the key size, the more difficult it becomes to factor <em>n</em> into its prime factors <em>p</em> and <em>q</em>. RSA keys of at least 2048 bits are considered secure against modern attacks.
                </p>

                <p className="text-lg mb-4">
                    While brute-force attempts to break RSA would require factoring the product of two large primes, current computational power and algorithms are not efficient enough to do this within a reasonable time frame for sufficiently large key sizes.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications and Use Cases of RSA
                </h2>
                <p className="text-lg mb-4">
                    RSA is used in many critical security applications, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">SSL/TLS for securing web traffic</li>
                    <li className="mb-2">Email encryption with PGP and GPG</li>
                    <li className="mb-2">Digital signatures for verifying the authenticity of messages and software</li>
                    <li className="mb-2">Secure key exchange in various cryptographic protocols</li>
                </ul>

                <p className="text-lg mb-4">
                    Despite the development of newer encryption algorithms, RSA remains one of the most trusted and widely used methods for securing digital communication and data.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    RSA has stood the test of time as one of the most important cryptographic algorithms. Its introduction of public-key cryptography changed the landscape of secure communication, and its widespread use across the internet and in digital security applications demonstrates its enduring significance. Though modern cryptographic protocols increasingly rely on newer algorithms, RSA continues to be a key player in securing our digital world.
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

export default Rsa;