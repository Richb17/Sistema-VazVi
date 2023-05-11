import { createBoard } from '@wixc3/react-board';
import { AddProctud } from '../../../components/add-proctud/add-proctud';

export default createBoard({
    name: 'AddProctud',
    Board: () => <AddProctud />,
    environmentProps: {
        canvasHeight: 628,
        windowHeight: 640
    }
});