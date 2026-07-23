import { useState } from "react";

import Header from "../components/Header";
import UploadBox from "../components/UploadBox";
import ChatBox from "../components/ChatBox";
import InputBox from "../components/InputBox";

import "../styles/Chat.css";

function Chat() {

    const [file, setFile] = useState(null);
    const [messages, setMessages] = useState([]);

    const [uploading, setUploading] = useState(false);
    const [thinking, setThinking] = useState(false);

    const uploadFile = async () => {

        if (!file) {
            alert("Please select a PDF");
            return;
        }

        setUploading(true);

        try {

            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(
                "http://127.0.0.1:8000/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            alert(data.message);

        } catch (error) {

            alert("Failed to upload PDF");

        } finally {

            setUploading(false);

        }

    };

    const sendMessage = async (question) => {

        if (!question.trim()) return;

        setMessages((prev) => [
            ...prev,
            {
                type: "user",
                text: question,
            },
        ]);

        setThinking(true);

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/ask",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question,
                    }),
                }
            );

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: data.answer,
                },
            ]);

        } catch (error) {

            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: "Something went wrong.",
                },
            ]);

        } finally {

            setThinking(false);

        }

    };

    return (

        <div className="chat-page">

            <Header />

            <UploadBox
                file={file}
                setFile={setFile}
                uploadFile={uploadFile}
                uploading={uploading}
            />

            <ChatBox
                messages={messages}
            />

            <InputBox
                sendMessage={sendMessage}
                uploading={uploading}
                thinking={thinking}
            />

        </div>

    );

}

export default Chat;