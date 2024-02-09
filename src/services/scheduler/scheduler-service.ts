import { Schedule } from "../../models/Schedule";

const getScheduler = async (): Promise<Schedule[]> => {
    const response = await fetch('http://localhost:3000/schedule');
    return response.json();
}

export { getScheduler };