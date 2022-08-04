import Logo from './assets/Logo.svg';
import Burger from './assets/Burger.svg';
import BurgerClose from './assets/BurgerClose.svg';
import Tilt from './assets/Tilt.png';
import AboutPhoto from './assets/AboutPhoto.png';
import Wave from './assets/Wave.png';
import ProjectDesign from './assets/ProjectDesign.png';
import ProjectTicTacToe from './assets/ProjectTicTacToe.png';
import ProjectTodo from './assets/ProjectTodo.png';
import ProjectExpensesChart from './assets/ProjectExpensesChart.png';
import TiltDark from './assets/TiltDark.png';

export default function assets() {
    const assets = [
        { assetName: Logo, element: 'logo' },
        { assetName: Burger, element: 'burger-img' },
        { assetName: BurgerClose, element: 'x-img' },
        { assetName: Tilt, element: 'tilt-transition' },
        { assetName: AboutPhoto, element: 'about-photo' },
        { assetName: Wave, element: 'wave-transition' },
        { assetName: ProjectDesign, element: 'project-design' },
        { assetName: ProjectTicTacToe, element: 'project-tictactoe' },
        { assetName: ProjectTodo, element: 'project-todo-app' },
        { assetName: ProjectExpensesChart, element: 'project-expenses-chart' },
        { assetName: TiltDark, element: 'tilt-dark-transition' },
    ];

    function setAssetsSource(assets) {
        assets.forEach(asset => {
            const elements = document.querySelectorAll(
                `[data-${asset.element}]`
            );
            elements.forEach(element => (element.src = asset.assetName));
        });
    }

    setAssetsSource(assets);
}
