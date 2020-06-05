import { getLinkToCityCoordinate } from './getCoordinateWithMapFirstLoad.js';

export function myPosition() {
    document.querySelector('.my-position').addEventListener('mousedown', () => {

        getLinkToCityCoordinate();
        document.querySelector('.search-local').value = '';

    });
}

