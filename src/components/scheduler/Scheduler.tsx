import { useEffect, useState } from "react";
import { getScheduler } from '../../services/scheduler/scheduler-service';
import { Schedule } from '../../models/Schedule';

import './Scheduler.css';

function Scheduler() {
    const [schedule, setSchedule] = useState<Schedule[]>([]);

    const [datesToHide, setDatesToHide] = useState<string[]>([]);

    useEffect(() => {
        loadSchedule();
    }, [])

    async function loadSchedule() {
        const schedule = await getScheduler();
        setSchedule(schedule);
    }

    function hideDate(date: string) {
        datesToHide.push(date);
        setDatesToHide(JSON.parse(JSON.stringify(datesToHide)));
    }

    function showDate(date: string) {
        datesToHide.splice(datesToHide.indexOf(date));
        setDatesToHide(JSON.parse(JSON.stringify(datesToHide)));
    }

    return <>
        <table className="schedule-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Mission 1</th>
                    <th>Mission 2</th>
                    <th>Mission 3</th>
                    <th>Mission 4</th>
                </tr>
            </thead>
            {
                schedule.map(s => {
                    return (
                        <tbody className={`${datesToHide.includes(s.date) ? 'hide-date-table' : ''}`} key={`table-${s.date}`}>
                            {s.missions.map(m => {
                                return (
                                    <tr key={`table-row-${s.date}-${m.time}`}>
                                        {m.time === '00:00 - 04:00' &&
                                            <td className="date-cell-header" rowSpan={6}>
                                                {s.date}
                                                {datesToHide.includes(s.date) 
                                                ?
                                                    <div onClick={() => showDate(s.date)}>- Expand Date</div>
                                                :
                                                    <div onClick={() => hideDate(s.date)}>+ Minimize Date</div>
                                                }
                                            </td>
                                        }
                                        <td>{m.time}</td>
                                        <td>
                                            <div>
                                                {m.mission1.map(name => {
                                                    return <div key={`table-row-${s.date}-${m.time}-mission1-name-${name}`}>{name}</div>
                                                })}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {m.mission2.map(name => {
                                                    return <div key={`table-row-${s.date}-${m.time}-mission2-name-${name}`}>{name}</div>
                                                })}
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )
                })
            }
        </table>
    </>
}

export default Scheduler;