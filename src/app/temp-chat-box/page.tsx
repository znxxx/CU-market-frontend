import ChatBox from "../../../components/ChatBox";

function ChatBoxPage() {
  const dummyChatData = [
    {
      isYours: false,
      message: "Hello",
      time: "12:30 PM",
    },
    {
      isYours: true,
      message:
        "I have a question about a productdsfffsdfdsgsegbergergherherher.",
      time: "12:35 PM",
    },
    {
      isYours: false,
      message: "Sure, what's your question?",
      time: "12:40 PM",
    },
    {
      isYours: true,
      message: "FU",
      time: "12:40 PM",
    },
  ];

  return (
    <>
      <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
        <ChatBox seller="guyguynaja" chatbox={dummyChatData} />
      </div>
    </>
  );
}

export default ChatBoxPage;
