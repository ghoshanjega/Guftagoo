import { isUndefined } from "util";


export default function debateReducer(state = null, action){
    if(state === null){
        return initialState
    }
    let tmp = {}
    Object.assign(tmp, state)
    switch(action.type){
        case "TOGGLE_DRAWER_FOR":
            tmp.openFor = !state.openFor
            return tmp
        case "TOGGLE_DRAWER_AGAINST":
            tmp.openAgainst = !(state.openAgainst)
            return tmp
        case "DECREMENT_TIME":
            if(tmp.time > 0){
                tmp.time = state.time - 1;
            }
            return tmp
        case "TOGGLE_SIDE":
            tmp.toggleSide = !(state.toggleSide)
            return tmp
        case "PICK_SIDE":
            tmp.side = action.payload.side
            return tmp
        default:
            return state
    }
}

const initialState = {
    title: "Argument Title Goes Here",
    openFor: false,
    openAgainst: false,
    toggleSide: false,
    side: undefined,
    time: 500,
    nodes: [
        {
            against: false,
            title: "For Argument opening here",
            evidence: [
                "evidence 1",
                "evidence 2",
                "evidence 3"
            ],
            citations: [
                "citation 1",
                "citation 2",
                "citation 3"
            ]
        },
        {
            against: true,
            title: "Against Argument opening here",
            evidence: [
                "evidence 1",
                "evidence 2",
                "evidence 3"
            ],
            citations: [
                "citation 1",
                "citation 2",
                "citation 3"
            ]
        }
    ]
}

