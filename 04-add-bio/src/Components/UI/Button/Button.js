import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	width: auto;
	padding: 0.3rem 1.5rem;
	margin: ${(props) =>
		props.className !== "error-style" ? "0.5rem 0" : "1rem 2rem"};
	font: inherit;
	font-weight: bolder;
	background-color: gold;
	border: 0.5px solid black;
	float: ${(props) => (props.className === "error-style" ? "right" : "none")};
	&:hover {
		color: white;
		background-color: black;
	}
`;

export default Button;
