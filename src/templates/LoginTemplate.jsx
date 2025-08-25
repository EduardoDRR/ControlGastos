import styled from "styled-components";
import {Btnsave, v} from "../index";

export function LoginTemplate() {
	return (
		<Container imgfondo={v.imagenfondo}>
			<div className="contentCard">
				<span className="version">Versión 1.0</span>
				<div className="contentImg">
					<img src={v.logo} />
				</div>
				<Titulo>Control de Gastos</Titulo>
				<p>Toma el control de tus gastos 💸 e ingresos 💰</p>
				
				<ContainerBtn>
					<Btnsave titulo="Inicial con Google" icono={<v.iconogoogle />} />
				</ContainerBtn>

			</div>
		</Container>
	);
}

const Container = styled.div`
	background-image: url(${(props) => props.imgfondo});
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 087);
	text-align: center;

	.contentCard{
		background-color: #131313;
		border-radius: 20px;
		gap: 30px;
		display: flex;
		flex-direction: column;
		margin: 20px;
		padding: 40px;
		box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);

		.version{
			color : #727272;
			text-align: start;
		}
		.contentImg{
			img{
				max-width: 60%;
				animation: bounce-top 5s ease-in-out infinite alternate;
			}
		}
	};

	.bounce-top{animation:bounce-top .9s linear both} @keyframes bounce-top{0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%{transform:translateY(-24px);animation-timing-function:ease-in}65%{transform:translateY(-12px);animation-timing-function:ease-in}82%{transform:translateY(-6px);animation-timing-function:ease-in}93%{transform:translateY(-4px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}}
`

const Titulo = styled.span`
	font-size:4rem;
	font-weight: 700;
`

const ContainerBtn = styled.div`
	display: flex;
	justify-content: center;
`