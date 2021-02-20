import React from 'react'
import { Introduktion } from '../../components/Introduktion'
//import {Introduktion} from '../../components/Introduktion'

export const Uppgift1 = () => {
	const details ={fornamn:'Peter',efternamn:'Ekberg',kurs:'React'}
	/*const fornamn='Peter'
	const efternamn='Ekberg'
	const kurs='React'*/
	return (
		<div>
			<h1>Uppgift 1</h1>
			<Introduktion details={details}/>
		</div>
	)
}

/*

INSTRUKTIONER FÖR UPPGIFT 1:
	1. Denna vy skall importera samt använda sig av Introduktion.js
	2. Du kommer behöva skicka med 3 prop värden(fornamn, efternamn, kurs) till Introduktion.js komponenten som är lokaliserad i src/components/
	3. Dessa värden skall synas i http://localhost:PORT/uppgift1 fliken.

 */