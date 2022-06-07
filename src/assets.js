import Logo from './assets/Logo.svg';
import Burger from './assets/Burger.svg';
import BurgerClose from './assets/BurgerClose.svg';
import Tilt from './assets/Tilt.svg';

export default function assets() {
    const assets = [
        { assetName: Logo, element: 'logo' },
        { assetName: Burger, element: 'burger-img' },
        { assetName: BurgerClose, element: 'x-img' },
        { assetName: Tilt, element: 'tilt-transition' },
    ];

    function setAssetsSource(assets) {
        assets.forEach(asset => {
            const element = document.querySelector(`[data-${asset.element}]`);
            element.src = asset.assetName;
        });
    }

    setAssetsSource(assets);
}
