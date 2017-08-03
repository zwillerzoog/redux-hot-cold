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

    // this is where we left off, this is passing but need expect
    console.log('start up here');

    it('Should provide feedback and add guess to state on MakeGuess', ()=> {
        const value = 100;
        const state = {
            guesses: [],
            feedback: '',
            correctAnswer: value,
            showInfoModal: false
        };
        let newState = reducer(state, makeGuess(10));
        expect(newState.guesses).toEqual([10]);
        expect(newState.feedback).toEqual('You\'re Ice Cold...');

        newState = reducer(state, makeGuess(71));
        expect(newState.guesses).toEqual([71]);
        expect(newState.feedback).toEqual('You\'re Warm');

        newState = reducer(state, makeGuess(99));
        expect(newState.guesses).toEqual([99]);
        expect(newState.feedback).toEqual('You\'re Hot!');

        newState = reducer(state, makeGuess(100));
        expect(newState.guesses).toEqual([100]);
        expect(newState.feedback).toEqual('You got it!');
    })
})