import React, { useState } from 'react'
import EC from 'elliptic';
import { Buffer } from 'buffer';

const ec = new EC.ec('secp256k1');

const Dsa = () => {

    const [message, setMessage] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [signature, setSignature] = useState('');
    const [isValid, setIsValid] = useState(null);

    // Generate key pair
    const generateKeyPair = () => {
        const keyPair = ec.genKeyPair();
        setPrivateKey(keyPair.getPrivate('hex'));
        setPublicKey(keyPair.getPublic('hex'));
    };

    // Sign the message
    const handleSign = () => {
        if (message && privateKey) {
            const key = ec.keyFromPrivate(privateKey);
            const msgHash = ec.hash().update(message).digest('hex');
            const sig = key.sign(msgHash);
            setSignature(sig.toDER('hex'));
        } else {
            alert('Please provide both message and private key');
        }
    };

    // Verify the signature
    const handleVerify = () => {
        if (message && publicKey && signature) {
            const key = ec.keyFromPublic(publicKey, 'hex'); // Create key from public key
            const msgHash = ec.hash().update(message).digest(); // Hash the message
            const sig = ec.signatureFromDER(Buffer.from(signature, 'hex')); // Create signature from DER
            const verified = key.verify(msgHash, sig); // Verify the signature
            setIsValid(verified);
            console.log(isValid);
        } else {
            alert('Please provide message, public key, and signature');
        }
    };





    return (
        <div className="p-6">
            <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-8">
                    DSA (Digital Signature Algorithm): Ensuring Data Integrity with Cryptographic Signatures
                </h1>

                <p className="text-lg mb-4">
                    In the realm of digital security, ensuring data integrity and authenticity is paramount. The **Digital Signature Algorithm (DSA)**, introduced by the National Institute of Standards and Technology (NIST) in 1991, plays a critical role in achieving this by offering a robust method for authenticating digital messages and documents. DSA is widely used in various applications, including secure communication, software distribution, and financial transactions.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    What is DSA?
                </h2>
                <p className="text-lg mb-4">
                    The Digital Signature Algorithm (DSA) is a **public key** cryptographic algorithm designed to generate and verify digital signatures. Unlike traditional encryption algorithms, DSA focuses solely on authentication by verifying the identity of the sender and ensuring that the message has not been altered in transit. This makes it a vital component in creating trusted digital environments.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    How Does DSA Work?
                </h2>
                <p className="text-lg mb-4">
                    DSA relies on mathematical principles to generate a unique signature for a given piece of data. Here’s a simplified breakdown of how DSA works:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>Key Generation:</strong> Two keys are generated – a **private key**, known only to the signer, and a **public key**, which is shared with others to verify the signature.
                    </li>
                    <li className="mb-2">
                        <strong>Signature Generation:</strong> The private key is used to sign a message by generating a digital signature. This signature is based on both the content of the message and the private key, ensuring its uniqueness for each message.
                    </li>
                    <li className="mb-2">
                        <strong>Signature Verification:</strong> The recipient can verify the authenticity of the message by using the sender's public key. If the signature matches, it proves that the message was sent by the owner of the private key and has not been tampered with.
                    </li>
                </ul>

                <p className="text-lg mb-4">
                    DSA relies heavily on hash functions, which generate a fixed-size string from input data. Common hash functions like **SHA-1** or **SHA-2** are used to create a hash of the message, which is then signed using the private key. During verification, the recipient checks if the hash of the received message matches the hash associated with the signature.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Key Benefits of DSA
                </h2>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        **Authentication:** DSA ensures that the message originates from a legitimate sender, preventing impersonation and fraud.
                    </li>
                    <li className="mb-2">
                        **Integrity:** The digital signature verifies that the message has not been modified in any way during transmission.
                    </li>
                    <li className="mb-2">
                        **Non-repudiation:** The sender cannot deny sending the signed message, as only the private key holder could have generated the signature.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Applications of DSA
                </h2>
                <p className="text-lg mb-4">
                    The DSA is widely used in scenarios where data authenticity and integrity are crucial. Some of its most common applications include:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">**Digital Certificates:** DSA is often used in SSL/TLS certificates to establish secure connections between web servers and browsers.</li>
                    <li className="mb-2">**Secure Email:** Many secure email services use DSA to verify the authenticity of email messages and prevent forgery.</li>
                    <li className="mb-2">**Code Signing:** Software developers use DSA to sign their code, ensuring that the software hasn't been altered and verifying the developer’s identity.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                    Conclusion
                </h2>
                <p className="text-lg mb-4">
                    The **Digital Signature Algorithm (DSA)** has become a cornerstone in the field of digital security, enabling secure communication and data integrity in a wide range of applications. By providing a method to authenticate digital messages, DSA plays a vital role in safeguarding sensitive information, preventing tampering, and ensuring trust in digital transactions.
                </p>
            </div>


            <div className='text-black'>
                <div id='encrypt' className="">
                    <div className="min-h-screen flex flex-col items-center justify-center">
                        <div className="w-full bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                                Create Signature
                            </h1>

                            {/* Form Inputs */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Message:
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Enter message..."
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
                                    onClick={handleSign}
                                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Create
                                </button>
                            </div>

                            {/* Output Box */}
                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Output:
                                </label>
                                <textarea
                                    value={signature}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                                    rows="5"
                                    placeholder="Output will appear here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='decrypt' className="hidden">
                    <div className="min-h-screen flex flex-col items-center justify-center">
                        <div className="w-full bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                                Decrypt Cipher Text
                            </h1>

                            {/* Form Inputs */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Message:
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Enter cipher text..."
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

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Signature:
                                </label>
                                <textarea
                                    value={signature}
                                    onChange={(e) => setSignature(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Enter signature..."
                                />
                            </div>

                            {/* Button to process/decrypt */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleVerify}
                                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Check
                                </button>
                            </div>

                            {/* Output Box */}
                            {/* <div className="mt-6">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dsa;