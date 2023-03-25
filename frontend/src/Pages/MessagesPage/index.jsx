import Users from "../../components/Users";
import Messages from "../../components/Messages";
import "./messagesPage.css";

const MessagesPage = () => {
	return (
		<div className="main">
			<div className="navbar">
				<p>NavBar</p>
			</div>
			<div className="page">
				<Users />
				<Messages />
			</div>
		</div>
	);
};

export default MessagesPage;
