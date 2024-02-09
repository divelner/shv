import './ParticipantSelection.css';
import { Group } from '../../models/Group';
import missions from '../../services/data';
import { useEffect, useState } from 'react';

type ParticipantSelectionProps = {
    groups: Group[];
    time: string;
    timeBefore: string | null;
}

function ParticipantSelection({groups, time, timeBefore}: ParticipantSelectionProps) {
  
    const [error, setError] = useState(false);
    const [warning, setWarning] = useState(false);

    const [classes, setClasses] = useState('participant-selection');

    useEffect(() => {
        if (error) {
            setClasses('participant-selection error');
        } else if (warning) {
            setClasses('participant-selection warning');
        } else {
            setClasses('participant-selection');
        }
    },[error, warning])

    function optionSelected(value: string, time: string): void {
        if (!missions[time]) {
            missions[time] = []
        }

        setError(missions[time].includes(value));
        if (timeBefore) {
            setWarning(missions[timeBefore].includes(value));
        }

        missions[time].push(value);

        console.log(missions);
    }

    return <>
        <select className={classes} onChange={e => optionSelected(e.target.value, time)} autoComplete='on'>
            <option value=""></option>
            {groups.map(g => {
                return (
                    <optgroup key={`g-${g.name}-${g.id}`} label={g.name}>
                        {g.participants.map(p => {
                            return (
                                <option key={`g-${g.name}-${g.id}-${p.name}`} value={p.name}>
                                    {p.name}
                                </option>
                            )
                        })}
                    </optgroup>
                )
            })}
        </select>
    </>
}

export default ParticipantSelection;