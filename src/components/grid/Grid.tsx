import { useEffect, useState } from "react";
import ParticipantSelection from '../participant-selection/ParticipantSelection';
import './Grid.css';
import { Group } from '../../models/Group';
import { getGroups } from '../../services/group';
import SelectCell from '../select-cell/SelectCell';

type Time = {
    id: number;
    label: string;
    time: string;
    timeBefore: string | null;
}

function Grid() {
    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        getAllGroups();
    }, []);

    async function getAllGroups() {
        const groups = await getGroups();
        setGroups(groups);
    }

    const times: Time[] = [
        {
            id: 1,
            label: '00:00 - 04:00',
            time: '00:00 - 04:00',
            timeBefore: null
        },
        {
            id: 2,
            label: '04:00 - 08:00',
            time: '04:00 - 08:00',
            timeBefore: '00:00 - 04:00'
        },
        {
            id: 3,
            label: '08:00 - 12:00',
            time: '08:00 - 12:00',
            timeBefore: '04:00 - 08:00'
        },
        {
            id: 4,
            label: '12:00 - 16:00',
            time: '12:00 - 16:00',
            timeBefore: '08:00 - 12:00'
        },
        {
            id: 5,
            label: '16:00 - 20:00',
            time: '16:00 - 20:00',
            timeBefore: '12:00 - 16:00'
        },
        {
            id: 6,
            label: '20:00 - 00:00',
            time: '20:00 - 00:00',
            timeBefore: '16:00 - 20:00'
        }
    ]

    return (
        <>
            <table className="grid-table">
                <thead>
                    <tr>
                        <th colSpan={4}>Time</th>
                        <th>Mission 1</th>
                        <th>Mission 2</th>
                        <th>Mission 3</th>
                        <th>Mission 4</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map(r => {
                            return (
                                <tr key={r.label}>
                                    <td colSpan={4}>{r.label}</td>
                                    <td className="list">
                                        <SelectCell groups={groups} rows={6} time={r.time} timeBefore={r.timeBefore}></SelectCell>
                                    </td>
                                    <td className="list">
                                        <SelectCell groups={groups} rows={3} time={r.time} timeBefore={r.timeBefore}></SelectCell>
                                    </td>
                                    <td className="list">
                                        <SelectCell groups={groups} rows={4} time={r.time} timeBefore={r.timeBefore}></SelectCell>
                                    </td>
                                    <td className="list">
                                        <SelectCell groups={groups} rows={15} time={r.time} timeBefore={r.timeBefore}></SelectCell>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Grid;