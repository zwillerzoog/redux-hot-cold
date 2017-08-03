import reducer from './reducer';
import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL} from './actions';

describe('reducer', () => {
    it('Should take app back to initalState on NewGame', () => {
    const value = 45;
    const state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: value,
        showInfoModal: false
    };
    const newState = reducer(state, newGame())
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toEqual(value);
    expect(state.showInfoModal).toEqual(false);
    })
    it('Should provide feedback and add guess to state on MakeGuess', ()=> {
        const value = 45;
        const state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: value,
            showInfoModal: false
        };
    })
})