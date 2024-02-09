import { Group } from '../../models/Group';
import ParticipantSelection from '../participant-selection/ParticipantSelection';

type ParticipantSelectionProps = {
    groups: Group[];
    rows: number;
    time: string;
    timeBefore: string | null;
}

function SelectCell({ groups, rows, time, timeBefore }: ParticipantSelectionProps) {
    const divs = [];
    for (let i = 0; i < rows; i++) {
        divs.push(<div key={`${i}-${rows}`}>
            <ParticipantSelection groups={groups} time={time} timeBefore={timeBefore}></ParticipantSelection>
        </div>)
    }

    return <>
        <div>
            {divs}
        </div>
    </>
}

export default SelectCell;