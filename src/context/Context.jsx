import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(null);
    const [image, setImage] = useState(null);

    const onSent = async () => {
        try {
            let response = await run(input, image);
            setOutput(response || "No response received.");
        } catch (error) {
            console.error("Error fetching response:", error);
            setOutput("Something went wrong.");
        }

        setInput("");
        setImage(null);
    };

    const contextValue = { input, setInput, onSent, output, image, setImage };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
