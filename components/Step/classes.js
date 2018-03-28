export default function(direction) {
    return {
        'horizon': {
            contain: {
                contain: true
            },
            everyStep: {
                everyStep: true
            },
            completeComp: {
                completeComp: true
            },
            currentComp: {
                currentComp: true
            },
            waitComp: {
                waitComp: true
            },
            completeLine: {
                completeLine: true
            },
            waitLine: {
                waitLine: true
            },
            step: {
                step: true
            },
            stepContain: {
                stepContain: true
            },
            stepTextContain: {
                stepTextContain: true
            },
            stepIcon: {
                stepIcon: true
            },
            stepTitle: {
                stepTitle: true
            },
            stepDescription: {
                stepDescription: true
            }
        },
        'vertical': {
            contain: {
                contain: true
            },
            everyStep: {
                vertical: true                
            },
            completeComp: {
                completeComp: true
            },
            currentComp: {
                currentComp: true
            },
            waitComp: {
                waitComp: true
            },
            completeLine: {
                completeVerticalLine: true
            },
            waitLine: {
                waitVerticalLine: true
            },
            step: {
                step: true
            },
            stepContain: {
                stepContain: true
            },
            stepTextContain: {
                stepTextContain: true
            },
            stepIcon: {
                stepIcon: true
            },
            stepTitle: {
                stepTitle: true
            },
            stepDescription: {
                stepDescription: true
            }
        }
    }[direction]
}