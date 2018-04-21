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
        default:
            return state
    }
}

const initialState = {
    title: "Argument Title Goes Here",
    openFor: false,
    openAgainst: false,
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

