import React from 'react'
import { useState } from 'react'

export const Uppgift2 = () => {
	const [subheader, setSubheader] = useState('Who was first man on the moon, type the name below!')

	const checkanswer = (e) => {
		const correctAnswer = 'neil armstrong';
		const guess = e.toLowerCase();
		if (guess.length === 0){setSubheader('Who was first man on the moon, type the name below!')}
		for (var i = 0; i < guess.length; i++) {
			if (guess.charAt(i) === correctAnswer.charAt(i)) {
				setSubheader(e);
				if (guess === correctAnswer) {
					setSubheader('Neil Armstrong, YES Correct answer');
				}
			} else {
				setSubheader("WRONG");
				break
			}
		}
	}
	return (
		<div>
			<h1>Uppgift 2</h1>
			<h2>{subheader}</h2>
			<input placeholder="" onChange={event => checkanswer(event.target.value)} />
		</div>
	)
}

/*

INSTRUKTIONER FÖR UPPGIFT 2:
Denna vy skall använda sig av useState hook.

	1. Importera samt instansiera en ny useState.
	Du kan döpa variablen samt funktionsnamnet i din useState deklaration efter fri vilja. (valfritt)

	2. Initialvärdet skall vara en valfri sträng

	3. Värdet av ditt state skall synas i <h2> taggen på rad 7

	4. Det värde som matas in i <input> taggen på rad 8 skall uppdateras till att
	   vara det värde som finns i ditt state

 */