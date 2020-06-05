import { getLocationAtRequestOfUser } from "./getLocationAtRequestOfUser.js";

export function keydownEnter() {

	document.addEventListener("keydown", event => {

		if (event.code === "Enter") {

      getLocationAtRequestOfUser()
      
		}

	});
}

