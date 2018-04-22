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
    title: "Microsoft should invest in a contingency plan for singularity?",
    openFor: false,
    openAgainst: false,
    toggleSide: false,
    side: undefined,
    time: 500,
    nodes: [
        {
            against: false,
            title: "Sir Tim: So when AI starts to make decisions such as who gets a mortgage, that's a big one. Or which companies to acquire and when AI starts creating its own companies, creating holding companies, generating new versions of itself to run these companies",
            evidence: [
                "This is because mortgage affects us all.",
                "Impact on a firm results in a direct impact on it's employees, who go on to influence the economy."
            ],
            citations: [
                "news.com/reports/mortgage-affects-us-all",
                "morenews.com/news/apple-layoffs-cupertino-economy"
            ]
        },
        {
            against: true,
            title: "Mark Zuckerberg: Whenever I hear people saying AI is going to hurt people in the future, I think yeah, you know, technology can generally always be used for good and bad, and you need to be careful about how you build it and you need to be careful about what you build and how it is going to be used.",
            
            evidence: [
                "After all, everything in excess is bad.",
                "Humans are in control and plan on having AI as an assistant."
            ],
            citations: [
                "philosophyjournals.com/papers/what-is-excess",
                "philosophyjournals.com/papers/what-is-control"
            ]
        }
    ]
}

