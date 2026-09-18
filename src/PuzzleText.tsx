 import './PuzzleText.css'
 
 export const PuzzleText = ({answer}) => {
    const answerArray = [...answer]

    const sideChecker = (event) => {
        const rect = event.target.getBoundingClientRect()

        const leftDist = event.clientX - rect.left
        const rightDist = rect.right - event.clientX

        console.log(leftDist < rightDist ? "left" : "right")
    }

    return (
        <div class='word'>
            {
                answerArray.map(
                       (ch) => <span class='character' onMouseMove={(e) => {sideChecker(e)}}>{ch}</span>
                    )
            }
        </div>
    )
}
