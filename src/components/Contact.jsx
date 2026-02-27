import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = useState("");
    const [attachedFile, setAttachedFile] = useState(null)

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "fdb2b1ea-6eb1-41d2-98e1-ed87d1304452");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data)
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center px-6 md:px-16 lg:px-32 py-20 w-full overflow-hidden min-h-screen flex flex-col justify-center scroll-mt-20"
            id="Contact">

            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
            </h1>
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                Connect with us to explore tailored solutions for your business needs
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 w-full">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full text-left">
                        <label className="text-sm font-medium">Your Name</label>
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 text-base focus:outline-none focus:border-blue-400"
                            type="text" name="Name" placeholder="Your Name" required
                        />
                    </div>
                    <div className="w-full text-left">
                        <label className="text-sm font-medium">Your Email</label>
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 text-base focus:outline-none focus:border-blue-400"
                            type="email" name="Email" placeholder="Your Email" required
                        />
                    </div>
                </div>

                <div className="mt-6 text-left">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none text-base focus:outline-none focus:border-blue-400"
                        name="Message" placeholder="Message" required
                    />

                    {/* <label className="flex items-center gap-2 mt-3 cursor-pointer w-fit">
                        <div className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="text-sm text-gray-500">Attach File</span>
                        </div>
                        <input type="file" name="attachment" className="hidden"
                            onChange={(e) => setAttachedFile(e.target.files[0])} />
                    </label> */}

                    {attachedFile && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                            <span className="truncate max-w-xs">📎 {attachedFile.name}</span>
                            <button type="button" onClick={() => setAttachedFile(null)}
                                className="text-red-400 hover:text-red-600 font-bold">✕</button>
                        </div>
                    )}
                </div>

                <button className="w-full md:w-auto mt-6 mb-10 bg-blue-600 text-white py-3 px-12 rounded text-base hover:bg-blue-700 transition">
                    {result ? result : "Send Message"}
                </button>
            </form>
        </motion.div>
    )
}

export default Contact;
