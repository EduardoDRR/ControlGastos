import styled from "styled-components";
import { Btnsave,v } from "../index"

export function LoginTemplate() {
	return (<>
		<div>
			<span>Version 1.0</span>
			<div>
				<img />
			</div>
			<Titulo>Control de Gastos</Titulo>
			<p>Toma el control de tus gastos💵 e ingresos💰</p>

			<ContainerBtn>
				<Btnsave titulo="iniciar con google" icono={<v.iconogoogle/>}/>
			</ContainerBtn>
		</div>
	</>);
}
const Container = styled.div`
 
`
const Titulo = styled.span`
 font-size: 5rem;
 font-weight: 700;
`
const ContainerBtn = styled.div`
 display: flex;
 justify-content: center;
`