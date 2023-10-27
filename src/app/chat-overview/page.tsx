import ChatOverviewBox from "../../../components/ChatOverviewBox";

function NotificationBoxPage() {
  const chatinfos = [
    {
      seller: "Mr. A",
      message: "I'm A",
      time: "12:03",
    },
    { seller: "Mr. B", message: "I'm B", time: "15:21" },
    { seller: "Mr. C", message: "I'm C", time: "10:21" },
    { seller: "Mr. D", message: "I'm D", time: "9:21" },
    { seller: "Mr. E", message: "I'm E", time: "8:21" },
    { seller: "Mr. F", message: "I'm F", time: "7:21" },
    { seller: "Mr. G", message: "I'm G", time: "6:21" },
  ];

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <ChatOverviewBox chatinfos={chatinfos} />
    </div>
  );
}

export default NotificationBoxPage;
