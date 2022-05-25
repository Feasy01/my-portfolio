import React from "react";
import "./Portfolio.scss";
import {
	Card,
	Row,
	Col,
	Tag,
	Typography,
	Title,
	Avatar,
	Button,
	Tabs,
} from "antd";
import { LoginOutlined, Html5Outlined, ToolOutlined } from "@ant-design/icons";
import { Carousel } from "react-bootstrap";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Portfolio() {
	function onChange(a, b, c) {
		console.log(a, b, c);
	}
	const { TabPane } = Tabs;

	return (
		<div className="portfolio" id="portfolio">
			<div className="left">
				<div className="left-tabs">
					<Tabs defaultActiveKey="1" centered>
						<TabPane tab="Web Development" key="1">
							<div className="title" style={{}}>
								<Typography>
									<Typography.Title
										level={2}
										style={{
											fontFamily: "roboto",
											fontWeight: 300,
											margin: 0,
											display: "flex",
											alignContent: "center",
											justifyContent: "center",
										}}
									>
										Web Development Projects{" "}
									</Typography.Title>
								</Typography>
								<p
									style={{
										margin: 0,
										fontSize: 20,
										display: "flex",
										alignContent: "center",
										justifyContent: "center",
									}}
								>
									<Html5Outlined />
								</p>
							</div>

							<Row gutter={[32, 32]} className="project-card-container">
								<Col lg={6} sm={32}>
									<Card className="project-card" hoverable={true}>
										<div className="image-container">
											<img
												src="assets/Instagram-clone.png"
												style={{ width: 100 + "%", borderRadius: 5 + "px" }}
												shape="square"
											></img>
											<Typography.Title
												level={4}
												style={{ marginTop: 5 + "px" }}
											>
												CRUD App
											</Typography.Title>
										</div>
										<div className="description-button-container">
											<div className="tags">
												<Tag color="blue">React</Tag>
												<Tag color="green">Node.js</Tag>
												<Tag color="orange">Firebase</Tag>
											</div>
											<p>
												A real-time working 'clone' of the instagram App. An
												example of a CRUD App
											</p>
											<Button type="primary">
												<a
													target="_blank"
													href="https://definitely-not-instagram-1.web.app/"
													style={{ textDecoration: "none" }}
												>
													DEMO
												</a>
											</Button>
										</div>
									</Card>
								</Col>

								<Col lg={6} sm={32}>
									<Card className="project-card" hoverable>
										<div className="image-container">
											<img
												src="assets/API-demo.png"
												style={{ width: 100 + "%", borderRadius: 5 + "px" }}
												shape="square"
											></img>
											<Typography.Title
												level={4}
												style={{ marginTop: 5 + "px" }}
											>
												API demo
											</Typography.Title>
										</div>
										<div className="description-button-container">
											<div className="tags">
												<Tag color="blue">React</Tag>
												<Tag color="green">Node.js</Tag>
												<Tag color="yellow">Chart.js</Tag>
												<Tag color="cyan">Axios</Tag>
											</div>
											<p>
												Application that fetches data from various providers.
												Information is then displayed in different forms
												allowing users to get essesntial cryptocurrencies news
											</p>
											<Button type="primary">
												<a
													target="_blank"
													href="https://api-demo-crypto.web.app/"
													style={{ textDecoration: "none" }}
												>
													DEMO
												</a>
											</Button>
										</div>
									</Card>
								</Col>
								<Col lg={6} sm={32}>
									<Card className="project-card" hoverable={true}>
										<div className="image-container">
											<img
												src="assets/MERN-stack.png"
												style={{ width: 100 + "%", borderRadius: 5 + "px" }}
												shape="square"
											></img>
											<Typography.Title
												level={4}
												style={{ marginTop: 5 + "px" }}
											>
												MERN stack demo
											</Typography.Title>
										</div>
										<div className="description-button-container">
											<div className="tags">
												<Tag color="red">MongoDB</Tag>
												<Tag color="yellow">Express</Tag>
												<Tag color="green">Node.js</Tag>
												<Tag color="blue">React</Tag>
											</div>
											<p>
												A MERN stack application-demo. A clone of tinder
												allowing the user to create their profile, match with
												others and send messages.
											</p>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<Button type="primary">
													<a
														target="_blank"
														href="https://mernstack-tinderdemo.herokuapp.com/"
														style={{ textDecoration: "none" }}
													>
														DEMO
													</a>
												</Button>
												<Button type="primary">
													<a
														target="_blank"
														href="https://github.com/Feasy01/tinder-demo"
														style={{ textDecoration: "none" }}
													>
														SOURCE
													</a>
												</Button>
											</div>
										</div>
									</Card>
								</Col>
								<Col lg={6} sm={32}>
									<Card className="project-card" hoverable={true}>
										<div className="image-container">
											<img
												src="assets/real-time-chat-app.png"
												style={{ width: 100 + "%", borderRadius: 5 + "px" }}
												shape="square"
											></img>
											<Typography.Title
												level={4}
												style={{ marginTop: 5 + "px" }}
											>
												Real time chat app
											</Typography.Title>
										</div>
										<div className="description-button-container">
											<div className="tags">
												<Tag color="blue">React</Tag>
												<Tag color="green">Node.js</Tag>
												<Tag color="orange">Firebase</Tag>
											</div>
											<p>
												A chat application that works in real time. Client keeps
												connection with the firebase and automatically updates
												the state on database's events
											</p>
											<Button type="primary">
												<a
													target="_blank"
													href="https://chatapp2-2.web.app/"
													style={{ textDecoration: "none" }}
												>
													DEMO
												</a>
											</Button>
										</div>
									</Card>
								</Col>
							</Row>
						</TabPane>
						<TabPane tab="Electronics Projects" key="2">
							<div className="title" style={{}}>
								<Typography>
									<Typography.Title
										level={2}
										style={{
											fontFamily: "roboto",
											fontWeight: 300,
											margin: 0,
											display: "flex",
											alignContent: "center",
											justifyContent: "center",
										}}
									>
										Electronics Projects{" "}
									</Typography.Title>
								</Typography>
								<p
									style={{
										margin: 0,
										fontSize: 20,
										display: "flex",
										alignContent: "center",
										justifyContent: "center",
									}}
								>
									<ToolOutlined />
								</p>
							</div>
							<Row gutter={[32, 32]} className="project-card-container">
								<Col lg={6} sm={32}>
									<Card className="project-card" hoverable={true}>
										<div className="image-container">
											<img
												src="assets/piedpiper.png"
												style={{ width: 100 + "%", borderRadius: 5 + "px" }}
												shape="square"
											></img>
											<Typography.Title
												level={4}
												style={{ marginTop: 5 + "px" }}
											>
												Sound Source Localization
											</Typography.Title>
										</div>
										<div className="description-button-container">
											<div className="tags">
												<Tag color="blue">C++</Tag>
												<Tag color="green">Assembly</Tag>
												<Tag color="orange">Electronics</Tag>
											</div>
											<p>
												A robot that localizes and reaches a source of sound
											</p>
											<Button type="primary">
												<a
													target="_blank"
													href="https://github.com/Feasy01/Pied-Piper-challange"
													style={{ textDecoration: "none" }}
												>
													SOURCE
												</a>
											</Button>
										</div>
									</Card>
								</Col>
							</Row>
						</TabPane>
					</Tabs>
				</div>

				{/* </Carousel> */}
			</div>
			<div className="right"></div>
		</div>
	);
}

export default Portfolio;
