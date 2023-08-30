import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#2F3677',
    isLogoTexture: true,
    isFullTexture:  false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export const updateDecalState = (type, url) => {
    if (type === 'logo') {
        state.logoDecal = url;
        state.isLogoTexture = true;
    } else if (type === 'full') {
        state.fullDecal = url;
        state.isFullTexture = true;
    }
};

export default state;