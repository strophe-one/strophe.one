 import './PuzzleText.css'
 
 export const PuzzleText = ({answer}) => {
    const answerArray = [...answer]

    return (
        <div class='word'>
            {
                answerArray.map(
                       (e) => <span class='character'>{e}</span>
                    )
            }
        </div>
    )
}
