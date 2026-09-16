 import './PuzzleText.css'
 
 export const PuzzleText = ({answer}) => {
    const answerArray = [...answer]

    return (
        <div class='word'>
            {
                answerArray.map(
                       (e) => <span class='character' onMouseEnter={() => {console.log(e)}}>{e}</span>
                    )
            }
        </div>
    )
}
