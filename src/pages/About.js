import React from "react";
import styled from "styled-components";

export const About = () => {
	const describeObj = [
		{
			title: "SIEDZIBA WARSZAWA",
			text: "ul.Baletowa 104 02-867 Warszawa",
			email: "biuro@cglass.pl",
			tel: "+48 22 33 15 400",
		},
		{
			title: "ODDZIAŁ KRAKÓW",
			text: "ul.Rybitwy 15 30-722 Kraków",
			email: "krakow@cglass.pl",
			tel: "+48 12 35 06 701",
		},
		{
			title: "HARTOWNIA SZKŁA",
			text: "ul.Budowlana 2 08-500 Ryki",
			email: "wycenszklo@cglass.pl",
			tel: "+48 607 638 177",
		},
	];

	return (
		<AboutWrapper>
			<div className="row justify-content-md-center m-0">
				{describeObj.map(({ title, text, email, tel, cols }) => (
					<div className="col-sm-3">
						<div className="card">
							<div className="card-body d-flex flex-column align-items-center">
								<h5 className="card-title">{title}</h5>
								<div className="card-text d-flex flex-column align-items-center">
									{text}
									<i>{email}</i>
									<b>{tel}</b>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<Info>
                <h2>CGlass fast orders v0.7</h2>
                <h3>Created by Artem Arakeliants and Maxim Lyovin</h3>
            </Info>
			
		</AboutWrapper>
	);
};

const AboutWrapper = styled.div`
	padding: 90px 0px;
	display: flex;
	flex-direction: column;
    height: 100vh;
    justify-content: space-between;
	h3 {
		font-size: medium;
	}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 5rem;
    font-size: 1rem;
`
