import React, { useContext } from "react";
import { Context } from "../context/Context";

const MiddleText = () => {
    const { input, setInput, output, onSent, image, setImage } = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSent();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center relative h-screen rounded-2xl my-1 bg-gray-900 p-6'>
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-white mb-6">Hi. How can I help you?</h1>

                {/* Chat Input Box */}
                <form onSubmit={handleSubmit} className="relative w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        onChange={(event) => setInput(event.target.value)}
                        value={input}
                        className="md:w-full w-[95%] h-14 px-6 text-lg text-white bg-gray-800 border border-gray-600 rounded-xl outline-none"
                    />
                    
                    {/* Styled File Upload Button */}
                    <label className="cursor-pointer flex justify-center items-center w-full h-12 px-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition">
                        <span className="text-xl font-bold">{image ? image.name : "Upload an Image"}</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>

                    {/* Send Button */}
                    <button type="submit" className="w-full bg-purple-600 text-xl font-bold text-white py-3 rounded-xl hover:bg-purple-700 transition">
                        Send ➤
                    </button>
                </form>

                {/* AI Response Display */}
                {output && (
                    <div className="mt-6 p-4 bg-gray-800 text-white rounded-xl border border-gray-600 max-h-60 overflow-y-auto">
                        <h2 className="text-xl font-semibold">AI Response:</h2>
                        <pre className="text-sm whitespace-pre-wrap">{output}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MiddleText;
