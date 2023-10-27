"use client";
import ChatBox from "../../../components/ChatBox";

function ChatBoxPage() {
  return (
    <>
      <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
        <ChatBox seller="guyguynaja" />
      </div>
    </>
  );
}
export default ChatBoxPage;
