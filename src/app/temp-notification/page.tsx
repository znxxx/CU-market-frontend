import NotificationBox from "../../../components/NotificationBox";

function NotificationBoxPage() {
  const notifications = [
    {
      product: "Product A",
      message: "Message A",
      time: "12:03",
    },
    { product: "Product B", message: "Message B", time: "15:21" },
    { product: "Product C", message: "Message C", time: "10:21" },
    { product: "Product D", message: "Message D", time: "9:21" },
    { product: "Product E", message: "Message E", time: "8:21" },
    { product: "Product F", message: "Message F", time: "7:21" },
    { product: "Product G", message: "Message G", time: "6:21" },
    { product: "Product H", message: "Message H", time: "5:21" },
  ];

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <NotificationBox notification={notifications} />
    </div>
  );
}

export default NotificationBoxPage;
