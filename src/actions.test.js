import reducer from './reducer';
import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions';

describe('actions', () => {    
    it('Should return action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThan(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    })
    it('Should add guess to guess array on makeGuess', () => {
        const value = 65;
        const action = makeGuess(value);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(value);
    })
    it('Should return InfoModal on ToggleInfoModal', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    })
}) 
